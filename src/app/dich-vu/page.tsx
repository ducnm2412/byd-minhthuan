import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Wrench, Shield, Clock, Bolt } from "@/components/Icons";

export const metadata: Metadata = { title: "Dịch vụ hậu mãi", description: "Bảo dưỡng định kỳ, bảo hành, cứu hộ và tư vấn sạc cho xe BYD tại Gia Lai." };

const ITEMS = [
  { Icon: Wrench, t: "Bảo dưỡng định kỳ", d: "Kiểm tra hệ thống điện, pin, phanh và lốp theo lịch của hãng, ngay tại xưởng của đại lý." },
  { Icon: Shield, t: "Bảo hành chính hãng", d: "Tiếp nhận bảo hành xe và pin Blade theo chính sách BYD Việt Nam. Thời hạn cụ thể theo từng dòng xe." },
  { Icon: Bolt, t: "Tư vấn sạc tại nhà", d: "Khảo sát điện nhà, tư vấn vị trí và công suất bộ sạc phù hợp với xe của bạn." },
  { Icon: Clock, t: "Cứu hộ, hỗ trợ đường dài", d: "Gọi hotline khi xe gặp sự cố, tư vấn viên hướng dẫn và điều phối hỗ trợ." },
];

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ label: "Dịch vụ hậu mãi" }]} title="Bảo dưỡng và hậu mãi" lead="Xưởng dịch vụ mở từ Thứ 2 đến Thứ 7, 7:30 – 17:30. Đặt lịch trước để không phải chờ." />
      <section className="section">
        <div className="wrap">
          <div className="why-grid">
            {ITEMS.map(({ Icon, t, d }) => <div className="why" key={t}><div className="ic"><Icon /></div><h4>{t}</h4><p>{d}</p></div>)}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}><Link className="btn btn-red" href="/lien-he">Đặt lịch bảo dưỡng</Link></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
