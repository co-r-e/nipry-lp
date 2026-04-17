import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import {
  getPageBySlug,
  getPageSource,
  getAllSlugs,
  getPrevNextPages,
  getBreadcrumbs,
  getFirstPageSlug,
} from "@/lib/docs/content";
import { compileMdx } from "@/lib/docs/mdx";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { PrevNextLinks } from "@/components/docs/PrevNextLinks";
import { TableOfContents } from "@/components/docs/TableOfContents";

interface Props {
  params: Promise<{ slug?: string[] }>;
}

export async function generateStaticParams(): Promise<{ slug?: string[] }[]> {
  const slugs = await getAllSlugs();
  return [{ slug: [] }, ...slugs.map((slug) => ({ slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return {
      title: "Documentation | Amaroad",
      description: "Amaroad documentation and guides.",
    };
  }

  const page = await getPageBySlug(slug);
  if (!page) {
    return { title: "Not Found | Amaroad Docs" };
  }

  const { title, description } = page.frontmatter;

  return {
    title: `${title} | Amaroad Docs`,
    description,
    openGraph: {
      title: `${title} | Amaroad Docs`,
      description,
      type: "article",
    },
  };
}

export default async function DocsPage({ params }: Props): Promise<ReactNode> {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    const firstSlug = await getFirstPageSlug();
    redirect(firstSlug ? `/docs/${firstSlug.join("/")}` : "/");
  }

  const page = await getPageBySlug(slug);
  if (!page) notFound();

  const source = await getPageSource(page);
  const { content, frontmatter, toc } = await compileMdx(source);
  const [breadcrumbs, { prev, next }] = await Promise.all([
    getBreadcrumbs(slug),
    getPrevNextPages(slug),
  ]);

  const showToc = frontmatter.toc !== false && toc.length > 0;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://co-r-e.github.io/dexcode-lp";
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: frontmatter.title,
    description: frontmatter.description,
    url: `${baseUrl}/docs/${slug.join("/")}`,
    publisher: {
      "@type": "Organization",
      name: "Amaroad",
      url: baseUrl,
    },
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="flex">
        <article className="min-w-0 flex-1 px-6 pt-6 pb-16 lg:px-10">
          <Breadcrumb items={breadcrumbs} />

          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-[var(--ink)]">
              {frontmatter.title}
            </h1>
            {frontmatter.description && (
              <p className="mt-2 text-lg text-[var(--ink-soft)]">
                {frontmatter.description}
              </p>
            )}
          </header>

          <div className="prose-docs max-w-3xl">{content}</div>

          <PrevNextLinks prev={prev} next={next} />
        </article>

        {showToc && <TableOfContents entries={toc} />}
      </div>
    </>
  );
}
