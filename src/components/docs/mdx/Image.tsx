import type { ReactNode } from "react";
import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function Image({ src, alt, width = 800, height = 450 }: ImageProps): ReactNode {
  if (!src.startsWith("/") && !src.startsWith("https://")) return null;

  return (
    <figure className="my-6">
      <NextImage src={src} alt={alt} width={width} height={height} loading="lazy" className="max-w-full rounded-lg border border-[var(--line)]" />
    </figure>
  );
}
