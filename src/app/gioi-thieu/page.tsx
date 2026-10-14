import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Why from "@/components/Why";
import Tech from "@/components/Tech";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import { SITE } from "@/data/site";

export const metadata: Metadata = { title: "Giới thiệu đại lý", description: "BYD Thuận Minh Gia Lai – đại lý ô tô BYD tại 662A Lê Duẩn, Pleiku." };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ label: "Giới thiệu" }]} title="Đại lý BYD của người Gia Lai"
        lead="Thuận Minh Gia Lai chỉ bán một thương hiệu: BYD. Nhờ vậy, chúng tôi hiểu sâu từng dòng xe điện và hybrid DM-i để tư vấn đúng nhu cầu của bạn." />
      <section className="section">
        <div className="wrap about">
          <div className="about-img"><Image src="/images/showroom.jpg" alt="Showroom BYD Thuận Minh Gia Lai" width={1200} height={800} /></div>
          <div className="about-copy">
            <h2>Showroom, xưởng dịch vụ và bãi lái thử ở cùng một nơi</h2>
            <p>Tại {SITE.address}, bạn có thể xem xe, lái thử, làm hồ sơ trả góp và bảo dưỡng định kỳ mà không phải đi nhiều nơi.</p>
            <p>Khách hàng của chúng tôi là các gia đình ở Pleiku và các huyện lân cận, người muốn chuyển sang xe điện, và doanh nghiệp cần xe phục vụ công việc.</p>
            <div className="hero-actions"><Link className="btn btn-red" href="/lai-thu">Đặt lịch lái thử</Link><Link className="btn btn-outline" href="/lien-he">Xem đường đến showroom</Link></div>
          </div>
        </div>
      </section>
      <Why />
      <Stats />
      <Tech />
      <Testimonials />
      <CtaBand />
    </>
  );
}
