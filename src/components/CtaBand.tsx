import Image from "next/image";
import { SITE } from "@/data/site";
import { Phone } from "./Icons";
export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div className="cta-copy">
          <h2>Gọi ngay để được tư vấn và đặt lịch lái thử</h2>
          <p>Tư vấn viên hỗ trợ từ 8:00 đến 20:00 mỗi ngày, kể cả cuối tuần.</p>
          <a className="num" href={SITE.phoneTel}><Phone />{SITE.phoneDisplay}</a>
        </div>
        <div className="cta-img"><Image src="/images/cta.jpg" alt="BYD M6 của Thuận Minh Gia Lai trong chuyến cắm trại" fill sizes="(max-width:800px) 100vw, 50vw" /></div>
      </div>
    </section>
  );
}
