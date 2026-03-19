import type { ReactNode } from "react";
import type { SlideImage } from "./slide-data";
import { assetUrl } from "@/lib/asset-path";

interface MarqueeTrackProps {
  direction: "left" | "right";
  images: SlideImage[];
}

export function MarqueeTrack({ direction, images }: MarqueeTrackProps): ReactNode {
  const dirClass = direction === "left" ? "marquee-left" : "marquee-right";

  const imgs = images.map((img) => (
    <img
      key={img.filename}
      src={assetUrl(`/slides/${img.filename}`)}
      alt={img.alt}
      width={720}
      height={405}
      loading="lazy"
    />
  ));

  const dupeImgs = images.map((img) => (
    <img
      key={`dup-${img.filename}`}
      src={assetUrl(`/slides/${img.filename}`)}
      alt=""
      width={720}
      height={405}
      loading="lazy"
    />
  ));

  return (
    <div className={`marquee-track ${dirClass}`}>
      <div className="marquee-content">{imgs}</div>
      <div className="marquee-content" aria-hidden="true">{dupeImgs}</div>
    </div>
  );
}
