import Link from "next/link";
import Image from "next/image";
import { Check } from "./Icons";
const POINTS = [
  "Pin Blade LFP vượt bài thử đâm xuyên, không cháy nổ",
  "DM-i: quãng đường tổng hợp trên 1.000 km mỗi lần đổ đầy",
  "Sạc tại nhà bằng ổ dân dụng hoặc bộ sạc treo tường",
  "Hỗ trợ lái ADAS, màn hình xoay, cập nhật phần mềm từ xa",
];
export default function Tech() {
  return (
    <section className="section dark tech">
      <div className="wrap">
        <div>
          <h2>Công nghệ Blade Battery và DM-i Super Hybrid</h2>
          <p>Hai nền tảng làm nên tên tuổi BYD: pin Blade an toàn hàng đầu và hệ hybrid sạc ngoài cho phép chạy điện trong phố, chạy xăng đường dài mà không lo trạm sạc.</p>
          <ul className="checks">{POINTS.map((p) => <li key={p}><Check />{p}</li>)}</ul>
          <div style={{ marginTop: 28 }}><Link className="btn btn-red" href="/so-sanh">So sánh EV và DM-i</Link></div>
        </div>
        <div className="tech-visual">
          <Image src="/images/dmi.jpg" alt="Cổng sạc BYD DM-i Super Hybrid" width={900} height={1125} />
          <div className="float"><b>8 năm</b><small>bảo hành pin cao áp (tham khảo)</small></div>
        </div>
      </div>
    </section>
  );
}
