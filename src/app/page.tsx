import Image from "next/image";
import Link from "next/link";
import HeroStudio from "@/components/HeroStudio";
import Showcase from "@/components/Showcase";
import TestDriveForm from "@/components/TestDriveForm";
import Stats from "@/components/Stats";
import Cars from "@/components/Cars";
import CtaBand from "@/components/CtaBand";
import { TECH, SHOWROOM, DELIVERY, GALLERY } from "@/data/home";
import { POSTS } from "@/data/news";
import { SITE } from "@/data/site";

export default function Page() {
  return (
    <div className="v2">
      <HeroStudio />
      <TestDriveForm />
      <Showcase />

      <section className="v2-sec v2-white">
        <div className="wrap">
          <header className="v2-head">
            <h2>Công nghệ năng lượng mới của BYD</h2>
            <p>Ba nền tảng có mặt trên mọi mẫu xe tại đại lý: pin Blade an toàn, hệ hybrid sạc ngoài DM-i và khoang lái thông minh cập nhật từ xa.</p>
          </header>
          <div className="v2-tech">
            {TECH.map((t) => (
              <figure key={t.t}>
                <Image src={t.img} alt={t.t} width={800} height={600} sizes="(max-width:800px) 100vw, 33vw" />
                <figcaption><b>{t.t}</b><span>{t.d}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Cars />

      <section className="v2-banner">
        <Image src="/images/fb/036.jpg" alt="" fill sizes="100vw" quality={90} />
        <div className="wrap">
          <h2>Lái thử trên chính cung đường bạn đi mỗi ngày</h2>
          <p>Đặt lịch, xe được đưa đến tận nhà hoặc cơ quan trong nội thành Pleiku. Tư vấn viên đi cùng để bạn thử đủ chế độ điện, hybrid và hỗ trợ lái.</p>
          <Link className="obtn obtn-light" href="/lai-thu">Đăng ký lái thử</Link>
        </div>
      </section>

      <section className="v2-sec v2-white">
        <div className="wrap">
          <div className="v2-dealer">
            <div>
              <h2 className="v2-h">Đại lý BYD tại Gia Lai</h2>
              <p>BYD Thuận Minh Gia Lai phân phối trọn bộ dòng xe điện và hybrid DM-i của BYD cho khách hàng Tây Nguyên. Showroom, xưởng dịch vụ và bãi lái thử đặt tại 662A Lê Duẩn, Pleiku. Lái thử tận nơi, báo giá trong ngày, hỗ trợ trả góp và bảo dưỡng chính hãng.</p>
              <Link className="obtn" href="/gioi-thieu">Về đại lý</Link>
            </div>
            <Image className="v2-dealer-img" src="/images/fb/076.jpg" alt="Tư vấn viên giới thiệu xe tại showroom BYD Thuận Minh" width={1200} height={800} sizes="(max-width:900px) 100vw, 55vw" />
          </div>
          <div className="v2-pair">
            {SHOWROOM.map((s) => (
              <figure key={s.img}><Image src={s.img} alt={s.cap} width={1000} height={760} sizes="(max-width:800px) 100vw, 50vw" /><figcaption>{s.cap}</figcaption></figure>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-sec v2-grey">
        <div className="wrap">
          <header className="v2-head">
            <h2>Khoảnh khắc bàn giao xe</h2>
            <p>Mỗi tuần, thêm những gia đình và doanh nghiệp ở Gia Lai nhận xe tại Thuận Minh.</p>
          </header>
          <div className="v2-four">
            {DELIVERY.map((d) => (
              <figure key={d.img}><Image src={d.img} alt={d.cap} width={600} height={600} sizes="(max-width:700px) 50vw, 25vw" /><figcaption>{d.cap}</figcaption></figure>
            ))}
          </div>
        </div>
      </section>


      <section className="v2-sec v2-white" id="thu-vien">
        <div className="wrap">
          <div className="v2-row-head">
            <h2 className="v2-h">Thư viện hình ảnh</h2>
            <a className="obtn" href={SITE.facebook} target="_blank" rel="noopener">Xem thêm trên Facebook</a>
          </div>
          <div className="v2-gallery">
            {GALLERY.map((g) => (
              <div key={g.img + g.alt} className={g.size ?? ""}><Image src={g.img} alt={g.alt} fill sizes="(max-width:700px) 50vw, 25vw" /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-sec v2-grey">
        <div className="wrap">
          <div className="v2-row-head">
            <h2 className="v2-h">Tin tức mới nhất</h2>
            <Link className="obtn" href="/tin-tuc">Xem thêm tin tức</Link>
          </div>
          <div className="v2-news">
            {POSTS.map((p) => (
              <Link key={p.slug} href={`/tin-tuc#${p.slug}`} className="v2-post">
                <Image src={p.img} alt="" width={800} height={450} sizes="(max-width:800px) 100vw, 33vw" />
                <div>
                  <time dateTime={p.date}>{p.d}</time>
                  <h3>{p.t}</h3>
                  <span className="arrow" aria-hidden>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      <section className="v2-sec v2-grey v2-service">
        <div className="wrap">
          <header className="v2-head">
            <h2>Dịch vụ hậu mãi tại Pleiku</h2>
            <p>Xưởng dịch vụ đặt ngay tại đại lý: bảo dưỡng định kỳ, sửa chữa, phụ tùng chính hãng, tư vấn lắp sạc tại nhà và hỗ trợ bảo hành theo chính sách BYD Việt Nam.</p>
          </header>
          <div className="v2-btns">
            <Link className="obtn" href="/lai-thu">Đăng ký lái thử</Link>
            <a className="obtn" href={SITE.phoneTel}>Gọi {SITE.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
