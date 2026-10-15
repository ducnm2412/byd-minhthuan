"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* Showcase tối có đèn chiếu: đổi màu Sealion 5 bằng dải ảnh nhỏ bên dưới. */
const COLORS = [
  { id: "atlantis", name: "Xám Atlantis", img: "/images/cut/atlantis.png", w: 1824, h: 862 },
  { id: "arctic", name: "Trắng Arctic", img: "/images/cut/arctic.png", w: 1828, h: 860 },
  { id: "cosmos", name: "Đen Cosmos", img: "/images/cut/cosmos.png", w: 2176, h: 1008 },
  { id: "ceramic", name: "Xám Ceramic", img: "/images/cut/ceramic.png", w: 1828, h: 860 },
];
const SPECS = ["Động cơ 1.5L + mô-tơ điện", "Công suất tổng 177 hp", "Pin Blade LFP 18,3 kWh", "Khoang hành lý đến 1.410 L", "Bảo hành pin 8 năm"];

export default function Showcase() {
  const [i, setI] = useState(0);
  const c = COLORS[i];
  const go = (d: number) => setI((n) => (n + d + COLORS.length) % COLORS.length);
  return (
    <section className="sc" aria-label="Sealion 5 DM-i theo màu">
      <div className="sc-frame">
        <div className="sc-info" key={`i-${c.id}`}>
          <h2>BYD SEALION 5 <br />DM-i</h2>
        </div>

        <div className="sc-stage">
          <div className="sc-car" key={c.id}>
            <Image src={c.img} alt={`BYD Sealion 5 DM-i màu ${c.name}`} width={c.w} height={c.h} sizes="(max-width:900px) 90vw, 640px" quality={90} />
          </div>
          <Link className="sc-explore" href="/dong-xe/sealion5">Khám phá</Link>
        </div>

        <div className="sc-specs">
          <h3>Thông số</h3>
          <ol>{SPECS.map((s, k) => <li key={s} className={k === 0 || k === SPECS.length - 1 ? "dim" : ""}>{s}</li>)}</ol>
        </div>

        <div className="sc-bottom">
          <span className="sc-note">{c.name} · {i + 1}/{COLORS.length}</span>
          <div className="sc-thumbs" role="radiogroup" aria-label="Chọn màu xe">
            <button className="sc-arrow" aria-label="Màu trước" onClick={() => go(-1)}>‹</button>
            {COLORS.map((x, k) => (
              <button key={x.id} role="radio" aria-checked={k === i} aria-label={x.name} className={k === i ? "on" : ""} onClick={() => setI(k)}>
                <Image src={x.img} alt="" width={x.w} height={x.h} sizes="96px" />
              </button>
            ))}
            <button className="sc-arrow" aria-label="Màu tiếp theo" onClick={() => go(1)}>›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
