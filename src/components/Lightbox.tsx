"use client";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Close } from "./Icons";

/* Ảnh bấm được để xem lớn; các ảnh cùng một section là một nhóm để chuyển trước / sau. */
const ZOOM = [
  ".v2-gallery img", ".v2-four img", ".v2-pair img", ".v2-tech img", ".v2-dealer-img", ".story-img img",
  ".cd-full img", ".cd-poster .wrap > img", ".cp-img img.on", ".n-card img", ".about-img img", ".car-hero-img img",
].join(",");

type Item = { src: string; alt: string };

/** Lấy đường dẫn ảnh gốc từ URL tối ưu của next/image. */
function original(img: HTMLImageElement) {
  try { return new URL(img.currentSrc || img.src).searchParams.get("url") ?? img.src; } catch { return img.src; }
}

export default function Lightbox() {
  const path = usePathname();
  const [items, setItems] = useState<Item[]>([]);
  const [i, setI] = useState(-1);
  const open = i >= 0;
  const close = useCallback(() => setI(-1), []);
  const go = useCallback((d: number) => setI((n) => (n + d + items.length) % items.length), [items.length]);

  // Gắn khả năng bấm / dùng bàn phím cho ảnh mỗi khi đổi trang
  useEffect(() => {
    const start = (img: HTMLImageElement) => {
      const scope = img.closest("section") ?? document.body;
      const group = Array.from(scope.querySelectorAll<HTMLImageElement>(ZOOM));
      setItems(group.map((g) => ({ src: original(g), alt: g.alt })));
      setI(Math.max(group.indexOf(img), 0));
    };
    const mark = () => document.querySelectorAll<HTMLImageElement>(ZOOM).forEach((img) => {
      if (img.dataset.zoom) return;
      img.dataset.zoom = "1"; img.tabIndex = 0; img.setAttribute("role", "button");
      img.setAttribute("aria-label", `Xem ảnh lớn${img.alt ? `: ${img.alt}` : ""}`);
    });
    mark();
    const mo = new MutationObserver(mark);
    mo.observe(document.querySelector("main") ?? document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });
    const onClick = (e: MouseEvent) => {
      const img = (e.target as Element).closest?.("img");
      if (img instanceof HTMLImageElement && img.matches(ZOOM)) { e.preventDefault(); start(img); }
    };
    const onKey = (e: KeyboardEvent) => {
      const t = e.target;
      if ((e.key === "Enter" || e.key === " ") && t instanceof HTMLImageElement && t.matches(ZOOM)) { e.preventDefault(); start(t); }
    };
    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onKey);
    return () => { mo.disconnect(); document.removeEventListener("click", onClick, true); document.removeEventListener("keydown", onKey); };
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", k); prev?.focus?.(); };
  }, [open, close, go]);

  if (!open || !items[i]) return null;
  const it = items[i];
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label="Xem ảnh" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <button className="lb-close" aria-label="Đóng" onClick={close} autoFocus><Close /></button>
      {items.length > 1 && <button className="lb-nav prev" aria-label="Ảnh trước" onClick={() => go(-1)}>‹</button>}
      {/* eslint-disable-next-line @next/next/no-img-element -- ảnh gốc kích thước tự do trong trình xem */}
      <img key={it.src} src={it.src} alt={it.alt} />
      {items.length > 1 && <button className="lb-nav next" aria-label="Ảnh tiếp theo" onClick={() => go(1)}>›</button>}
      <p className="lb-cap">{it.alt && <span>{it.alt}</span>}{items.length > 1 && <span>{i + 1} / {items.length}</span>}</p>
    </div>
  );
}
