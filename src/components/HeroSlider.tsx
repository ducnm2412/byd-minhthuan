"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = { img: string; title: string; sub: string; href: string };

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (n: number) => setI((n + slides.length) % slides.length);

  useEffect(() => {
    if (paused || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setI((n) => (n + 1) % slides.length), 6000);
    return () => clearTimeout(t);
  }, [i, paused, slides.length]);

  return (
    <section className="hs" aria-roledescription="carousel" aria-label="Dòng xe nổi bật" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, k) => (
        <div key={s.title} className={`hs-slide ${k === i ? "on" : ""}`} aria-hidden={k !== i} role="group" aria-roledescription="slide" aria-label={`${k + 1} / ${slides.length}`}>
          <Image src={s.img} alt="" fill priority={k === 0} sizes="100vw" />
          <div className="wrap hs-copy">
            <h2>{s.title}</h2>
            <p>{s.sub}</p>
            <Link className="obtn obtn-light" href={s.href} tabIndex={k === i ? 0 : -1}>Tìm hiểu thêm</Link>
          </div>
        </div>
      ))}
      <button className="hs-arrow prev" aria-label="Xe trước" onClick={() => go(i - 1)}>‹</button>
      <button className="hs-arrow next" aria-label="Xe tiếp theo" onClick={() => go(i + 1)}>›</button>
      <div className="hs-dots">
        {slides.map((s, k) => <button key={s.title} aria-label={`Xem ${s.title}`} aria-current={k === i} onClick={() => go(k)} />)}
      </div>
    </section>
  );
}
