import Image from "next/image";
import Link from "next/link";
import { fmtKm, type Car } from "@/data/cars";
import { Seat, Range, Bolt } from "./Icons";

export default function CarCard({ car: c }: { car: Car }) {
  return (
    <article className="car-card">
      <Link className="img" href={`/dong-xe/${c.id}`} aria-label={`Xem chi tiết ${c.name}`}>
        <Image src={c.img ?? "/images/grille.jpg"} alt={c.name} width={900} height={560} />
        {c.badge && <span className={`badge ${c.isNew ? "new" : ""}`}>{c.badge}</span>}
      </Link>
      <div className="car-body">
        <div><h4>{c.name}</h4><div className="type">{c.type}</div></div>
        <div className="specs"><span><Seat />{c.seats} chỗ</span><span><Range />{fmtKm(c.range)} km</span><span><Bolt />{c.power}</span></div>
        <div className="car-actions">
          <Link className="btn btn-outline btn-sm" href={`/dong-xe/${c.id}`}>Chi tiết</Link>
          <Link className="btn btn-red btn-sm" href={`/lai-thu?xe=${c.id}`}>Lái thử</Link>
        </div>
      </div>
    </article>
  );
}
