"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Model = { id: string; name: string; sub: string; img: string };

/* Dải thẻ xe cuộn ngang, nút ‹ › cuộn đúng một thẻ. */
export default function ModelRail({ models }: { models: Model[] }) {
  const rail = useRef<HTMLDivElement>(null);
  const step = (dir: number) => {
    const el = rail.current; if (!el) return;
    const card = el.querySelector<HTMLElement>(".mr-card");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 400) + 20), behavior: "smooth" });
  };
  return (
    <>
      <div className="mr" ref={rail}>
        {models.map((m) => (
          <article className="mr-card" key={m.id}>
            <h3>{m.name}</h3>
            <p>{m.sub}</p>
            <Link href={`/dong-xe/${m.id}`} className="mr-img" tabIndex={-1} aria-hidden><Image src={m.img} alt="" width={900} height={560} sizes="(max-width:700px) 80vw, 45vw" /></Link>
            <Link className="obtn" href={`/dong-xe/${m.id}`}>Tìm hiểu thêm<span className="sr-only"> về {m.name}</span></Link>
          </article>
        ))}
      </div>
      <div className="mr-nav wrap">
        <button className="round" aria-label="Xe trước" onClick={() => step(-1)}>‹</button>
        <button className="round" aria-label="Xe tiếp theo" onClick={() => step(1)}>›</button>
      </div>
    </>
  );
}
