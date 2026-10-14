import Link from "next/link";
import { CARS, type Car } from "@/data/cars";
const EV = CARS.filter((c) => c.cat.includes("ev"));
const DMI = CARS.filter((c) => c.cat.includes("dmi"));
const Box = ({ title, desc, rows }: { title: string; desc: string; rows: Car[] }) => (
  <div className="price-box">
    <h4><i />{title}</h4>
    <p className="desc">{desc}</p>
    <div className="rows">{rows.map((c) => <div className="row" key={c.id}><span><Link href={`/dong-xe/${c.id}`}>{c.name}</Link><small>{c.type}</small></span><Link className="red" href={`/bao-gia?xe=${c.id}`}>Nhận báo giá</Link></div>)}</div>
  </div>
);
export default function PriceTable() {
  return (
    <section className="section dark" id="bang-gia">
      <div className="wrap">
        <div className="sec-head">
          <h2>Danh mục xe đang bán</h2>
          <p>Chọn một mẫu để nhận báo giá lăn bánh và ưu đãi hiện hành của đại lý qua Zalo trong ngày.</p>
        </div>
        <div className="price-grid">
          <Box title="Xe điện thuần (EV)" desc="Sạc tại nhà, chi phí vận hành thấp, phù hợp di chuyển nội tỉnh." rows={EV} />
          <Box title="Hybrid sạc ngoài (DM-i)" desc="Chạy điện trong phố, chạy xăng đường dài, không phụ thuộc trạm sạc." rows={DMI} />
        </div>
        <p className="price-note">Giá và ưu đãi thay đổi theo chương trình của BYD Việt Nam và đại lý.</p>
        <div style={{ textAlign: "center", marginTop: 20 }}><Link className="btn btn-red" href="/bao-gia">Nhận báo giá lăn bánh</Link></div>
      </div>
    </section>
  );
}
