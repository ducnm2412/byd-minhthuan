"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* Hero kiểu "studio": panel trắng bên trái, xe tách nền đè lên nền tối bên phải; tab đổi mẫu xe tại chỗ. */
type Model = { id: string; name: string; desc: string; stats: [string, string, string][]; cut: [string, number, number] };
const MODELS: Model[] = [
  { id: "sealion5", name: "Sealion 5", desc: "SUV hybrid DM-i 5 chỗ. Chạy điện trong phố, đi xa không lo trạm sạc.",
    stats: [["1.847", "km", "Quãng đường tổng hợp"], ["3,7", "L", "Mỗi 100 km"], ["177", "hp", "Công suất"]],
    cut: ["/images/hero/sealion5.png", 1824, 862] },
  { id: "seal5", name: "Seal 5", desc: "Sedan hybrid DM-i 5 chỗ, tiết kiệm nhiên liệu hàng đầu phân khúc.",
    stats: [["1.714", "km", "Quãng đường tổng hợp"], ["3,2", "L", "Mỗi 100 km"], ["189", "hp", "Công suất"]], cut: ["/images/hero/seal5.png", 1665, 808] },
  { id: "m9", name: "M9", desc: "MPV cao cấp hybrid 7 chỗ, khoang hạng thương gia cho cả gia đình.",
    stats: [["1.100", "km", "Quãng đường tổng hợp"], ["5,6", "L", "Mỗi 100 km"], ["218", "hp", "Công suất"]], cut: ["/images/hero/m9.png", 1643, 787] },
  { id: "m6", name: "M6", desc: "MPV điện 7 chỗ rộng rãi, pin Blade an toàn, sạc nhanh DC.",
    stats: [["530", "km", "Quãng đường"], ["71,8", "kWh", "Pin Blade"], ["204", "hp", "Công suất"]], cut: ["/images/hero/m6.png", 1847, 815] },
  { id: "dolphin", name: "Dolphin", desc: "Hatchback điện đô thị nhỏ gọn, linh hoạt, chi phí vận hành thấp.",
    stats: [["427", "km", "Quãng đường"], ["60,5", "kWh", "Pin Blade"], ["204", "hp", "Công suất"]], cut: ["/images/hero/dolphin.png", 1764, 918] },
];

export default function HeroStudio() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const m = MODELS[i];
  const go = (k: number, d: "next" | "prev" = k > i ? "next" : "prev") => {
    const n = (k + MODELS.length) % MODELS.length;
    if (n === i) return;
    setDir(d); setPrev(i); setI(n);
  };

  /* Xe cũ trượt ra cùng lúc xe mới trượt vào; xong thì gỡ lớp "out". */
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), 900);
    return () => clearTimeout(t);
  }, [prev]);

  /* Tự trượt sang xe tiếp theo mỗi 5 giây; dừng khi rê chuột / chạm vào hero. */
  useEffect(() => {
    if (paused || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => { setDir("next"); setPrev(i); setI((i + 1) % MODELS.length); }, 5000);
    return () => clearTimeout(t);
  }, [i, paused]);
  return (
    <section className={`hst hst-${dir}`} aria-label={`BYD ${m.name}`} aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; setPaused(true); }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - (touchX.current ?? e.changedTouches[0].clientX);
        if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1), dx < 0 ? "next" : "prev");
        touchX.current = null;
      }}>
      <div className="hst-left">
        <div className="hst-copy" key={`c-${m.id}`}>
          <h1>BYD {m.name}</h1>
          <p>{m.desc}</p>
        </div>
        <dl className="hst-stats" key={`s-${m.id}`}>
          {m.stats.map(([v, u, l]) => <div key={l}><dd>{v}<small>{u}</small></dd><dt>{l}</dt></div>)}
        </dl>
      </div>

      <div className="hst-right">
        <div className="hst-tabs" role="tablist" aria-label="Mẫu xe">
          {MODELS.map((x, k) => (
            <button key={x.id} type="button" role="tab" aria-selected={k === i} className={k === i ? "on" : ""} onClick={() => go(k)}>{x.name}</button>
          ))}
        </div>
        <div className="hst-floor" aria-hidden />
        <div className="hst-dots" aria-hidden>
          {MODELS.map((x, k) => <span key={x.id} className={k === i ? "on" : ""} />)}
        </div>
      </div>

      <div className="hst-car">
        {MODELS.map((x, k) => (
          <div key={x.id} className={`hst-slide${k === i ? " on" : k === prev ? " out" : ""}`} aria-hidden={k !== i}>
            <Image src={x.cut[0]} alt={k === i ? `BYD ${x.name}` : ""} width={x.cut[1]} height={x.cut[2]} priority={k === 0} loading={k === 0 ? undefined : "eager"} quality={90} sizes="(max-width:900px) 92vw, 760px" />
            <Image className="hst-reflect" src={x.cut[0]} alt="" width={x.cut[1]} height={x.cut[2]} loading="eager" quality={90} sizes="(max-width:900px) 92vw, 760px" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  );
}
