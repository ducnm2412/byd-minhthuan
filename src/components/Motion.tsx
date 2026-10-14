"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/* Phần tử được hiện dần khi cuộn tới; các phần tử cùng nhóm hiện so le. */
const REVEAL = [
  ".sec-head", ".why", ".car-card", ".n-card", ".panel", ".steps li", ".price-box", ".fin", ".calc-inputs", ".calc-out", ".t-card",
  ".about-img", ".about-copy", ".tech-list li", ".buy-card", ".detail-spec", ".detail-h", 
  ".tech .wrap > div", ".cta-copy", ".cta-img", ".book-card", ".compare-pick", ".table-scroll", ".map-embed iframe", ".stat",
  ".v2-head", ".v2-models .v2-h", ".v2-row-head", ".mr-card", ".v2-tech figure", ".v2-dealer > *", ".v2-pair figure", ".v2-four figure",
  ".v2-gallery > div", ".v2-post", ".cd-stats dl", ".cd-specs", ".cp", ".cd-poster .wrap > img", ".v2-banner .wrap",
  ".story h2", ".story .wrap > p", ".story-img",
].join(",");

export default function Motion() {
  const path = usePathname();

  // Mỗi lần đổi trang: gắn lại hiệu ứng hiện dần và đếm số
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("motion");

    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL));
    els.forEach((el) => {
      el.classList.add("rv");
      const sibs = el.parentElement ? Array.from(el.parentElement.children).filter((s) => s.matches(REVEAL)) : [];
      el.style.setProperty("--d", `${Math.min(sibs.indexOf(el), 6) * 90}ms`);
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -12% 0px" });
    els.forEach((el) => io.observe(el));

    const nums = Array.from(document.querySelectorAll<HTMLElement>(".stat b, .car-stats dd:not(.sm), .cd-stats dd"));
    const counter = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { countUp(e.target as HTMLElement); counter.unobserve(e.target); } });
    }, { threshold: 0.6 });
    nums.forEach((n) => counter.observe(n));

    return () => { io.disconnect(); counter.disconnect(); };
  }, [path]);

  return null;
}

/** Đếm từ 0 tới số đầu tiên trong text node đầu, giữ nguyên định dạng 1.847 / 18,2. */
function countUp(el: HTMLElement) {
  const node = Array.from(el.childNodes).find((n) => n.nodeType === 3 && /\d/.test(n.textContent ?? ""));
  if (!node) return;
  const text = node.textContent!;
  const m = text.match(/\d[\d.,]*/);
  if (!m || /[A-Za-z]/.test(text[m.index! + m[0].length] ?? "")) return; // bỏ qua địa chỉ như "662A"
  const raw = m[0], hasComma = raw.includes(","), target = parseFloat(raw.replace(/\./g, "").replace(",", "."));
  const dec = hasComma ? raw.split(",")[1].length : 0, t0 = performance.now(), dur = 1400;
  const step = (t: number) => {
    const p = Math.min((t - t0) / dur, 1), v = target * (1 - Math.pow(1 - p, 3));
    const s = v.toLocaleString("vi-VN", { minimumFractionDigits: dec, maximumFractionDigits: dec });
    node.textContent = text.replace(raw, p < 1 ? s : raw);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
