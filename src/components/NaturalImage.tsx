import Image from "next/image";
import { imgSize } from "@/lib/imgsize";

/* Ảnh hiển thị đúng tỉ lệ gốc, không bao giờ to hơn kích thước gốc (tránh bị mờ), có thể giới hạn chiều cao. */
export default function NaturalImage({ src, alt, className, priority, maxH }: { src: string; alt: string; className?: string; priority?: boolean; maxH?: string }) {
  const { w, h } = imgSize(src);
  return (
    <Image src={src} alt={alt} width={w} height={h} priority={priority} className={className} quality={90}
      sizes={`(max-width:${w}px) 100vw, ${w}px`}
      style={{ display: "block", width: "100%", height: "auto", margin: "0 auto",
        maxWidth: maxH ? `min(100%, ${w}px, calc(${maxH} * ${(w / h).toFixed(4)}))` : `min(100%, ${w}px)` }} />
  );
}
