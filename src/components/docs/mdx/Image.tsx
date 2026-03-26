import type { ReactNode } from "react";
import NextImage from "next/image";
import { assetUrl } from "@/lib/asset-path";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function Image({ src, alt, width = 800, height = 450 }: ImageProps): ReactNode {
  const isLocalAsset = src.startsWith("/");
  const isRemoteAsset = src.startsWith("https://") || src.startsWith("http://");

  if (!isLocalAsset && !isRemoteAsset) return null;

  const resolvedSrc = isLocalAsset ? assetUrl(src) : src;

  return (
    <figure className="my-6">
      <NextImage src={resolvedSrc} alt={alt} width={width} height={height} loading="lazy" className="max-w-full rounded-lg border border-[var(--line)]" />
    </figure>
  );
}
