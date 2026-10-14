"use client";
import Image from "next/image";
import { useState } from "react";

type Color = { name: string; hex: string; img: string };

export default function ColorPicker({ colors, car }: { colors: Color[]; car: string }) {
  const [i, setI] = useState(0);
  const c = colors[i];
  return (
    <div className="cp">
      <div className="cp-img">
        {colors.map((x, k) => <Image key={x.img} src={x.img} alt={`${car} màu ${x.name}`} width={1200} height={1200} sizes="(max-width:800px) 100vw, 640px" className={k === i ? "on" : ""} aria-hidden={k !== i} />)}
      </div>
      <div className="cp-swatches" role="radiogroup" aria-label="Chọn màu xe">
        {colors.map((x, k) => (
          <button key={x.name} role="radio" aria-checked={k === i} aria-label={x.name} style={{ background: x.hex }} onClick={() => setI(k)} />
        ))}
      </div>
      <p className="cp-name" aria-live="polite">{c.name}</p>
    </div>
  );
}
