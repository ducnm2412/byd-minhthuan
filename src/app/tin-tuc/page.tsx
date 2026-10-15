import type { Metadata } from "next";
import Image from "next/image";
import { POSTS } from "@/data/news";
import { SITE } from "@/data/site";

export const metadata: Metadata = { title: "Tin tức và ưu đãi", description: "Sự kiện, khuyến mãi và hoạt động của BYD Thuận Minh Gia Lai." };

/* Danh sách bài: ảnh bên trái, nội dung bên phải. */
export default function Page() {
  return (
    <>
      <section className="story story-dark story-intro">
        <div className="wrap">
          <h1>Tin tức và ưu đãi</h1>
          <p>Sự kiện ra mắt, chương trình khuyến mãi và hoạt động mới nhất tại BYD Thuận Minh Gia Lai.</p>
        </div>
      </section>
      <section className="nl">
        <div className="wrap">
          {POSTS.map((p) => (
            <article key={p.slug} id={p.slug} className="nl-item">
              <div className="nl-img">
                <Image src={p.img} alt={p.t} fill sizes="(max-width:800px) 100vw, 480px" />
              </div>
              <div className="nl-body">
                <time dateTime={p.date}>{p.tag}, {p.d}</time>
                <h2>{p.t}</h2>
                {p.body.map((t) => <p key={t}>{t}</p>)}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className={"story story-dark"}>
        <div className="wrap">
          <h2>Theo dõi ưu đãi mới</h2>
          <p>Đại lý cập nhật chương trình mỗi tuần trên Facebook.</p>
          <div className="story-actions"><a className="btn btn-red" href={SITE.facebook} target="_blank" rel="noopener">Xem trên Facebook</a></div>
        </div>
      </section>
    </>
  );
}
