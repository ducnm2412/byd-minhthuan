"use client";
import Link from "next/link";
import { useState } from "react";
import { CARS, type Car } from "@/data/cars";
import CarCard from "./CarCard";

const FILTERS = [["all", "Tất cả"], ["ev", "Điện thuần (EV)"], ["dmi", "Hybrid DM-i"], ["mpv", "MPV 7 chỗ"]] as const;
type Filter = (typeof FILTERS)[number][0];

export default function Cars() {
  const [filter, setFilter] = useState<Filter>("all");
  const match = (c: Car) => filter === "all" || c.cat.includes(filter as "ev");
  const withImg = CARS.filter((c) => c.img && match(c));
  const others = CARS.filter((c) => !c.img && match(c));

  return (
    <section className="section" id="dong-xe">
      <div className="wrap">
        <div className="sec-head">
          <h2>Dòng xe tại đại lý</h2>
          <p>Chọn theo nhu cầu: điện thuần cho đô thị, hybrid DM-i cho đường dài, MPV cho gia đình đông người.</p>
        </div>
        <div className="filters" role="tablist" aria-label="Lọc dòng xe">
          {FILTERS.map(([k, label]) => (
            <button key={k} role="tab" aria-selected={filter === k} className={`chip ${filter === k ? "active" : ""}`} onClick={() => setFilter(k)}>{label}</button>
          ))}
        </div>
        <div className="cars">
          {withImg.map((c) => <CarCard key={c.id} car={c} />)}
          {others.length > 0 && (
            <article className="car-card cta">
              <h4>Thêm {others.length} mẫu khác đang có tại đại lý</h4>
              <p>Ảnh thực tế đang cập nhật. Chạm để xem thông số hoặc đặt lịch xem xe trực tiếp.</p>
              <div className="models">
                {others.map((c) => <Link key={c.id} href={`/dong-xe/${c.id}`} className="chip" style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,.25)" }}>{c.name.replace("BYD ", "")}</Link>)}
              </div>
              <div style={{ marginTop: 22 }}><Link className="btn btn-red btn-sm" href="/lien-he">Hẹn xem xe tại showroom</Link></div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
