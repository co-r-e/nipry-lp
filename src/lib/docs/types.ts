export interface DocFrontmatter {
  title: string;
  description: string;
  icon?: string;
  badge?: string;
  toc?: boolean;
  draft?: boolean;
}

export interface TocEntry {
  id: string;
  text: string;
  depth: 2 | 3;
}

export interface DocPage {
  slug: string[];
  frontmatter: DocFrontmatter;
  filePath: string;
}

export interface SectionMeta {
  title: string;
  icon?: string;
  pages: string[];
}

export interface SidebarNode {
  title: string;
  href?: string;
  icon?: string;
  badge?: string;
  children?: SidebarNode[];
}

export interface PageLink {
  title: string;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SearchEntry {
  title: string;
  description: string;
  href: string;
  section: string;
  content: string;
}
