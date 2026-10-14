import type { Metadata } from "next";
import Image from "next/image";
import { POSTS } from "@/data/news";
import { SITE } from "@/data/site";

export const metadata: Metadata = { title: "Tin tức và ưu đãi", description: "Sự kiện, khuyến mãi và hoạt động của BYD Thuận Minh Gia Lai." };

/* Mỗi bài là một khối tràn viền, xen kẽ nền tối / sáng, nội dung căn giữa. */
export default function Page() {
  return (
    <>
      <section className="story story-dark story-intro">
        <div className="wrap">
          <h1>Tin tức và ưu đãi</h1>
          <p>Sự kiện ra mắt, chương trình khuyến mãi và hoạt động mới nhất tại BYD Thuận Minh Gia Lai.</p>
        </div>
      </section>
      {POSTS.map((p, i) => (
        <section key={p.slug} id={p.slug} className={`story ${i % 2 ? "story-light" : "story-dark"}`}>
          <div className="wrap">
            <time dateTime={p.date}>{p.tag}, {p.d}</time>
            <h2>{p.t}</h2>
            {p.body.map((t) => <p key={t}>{t}</p>)}
            <div className="story-img">
              <Image src={p.img} alt={p.t} width={1200} height={1200} sizes="(max-width:800px) 100vw, 720px" />
            </div>
          </div>
        </section>
      ))}
      <section className={`story ${POSTS.length % 2 ? "story-light" : "story-dark"}`}>
        <div className="wrap">
          <h2>Theo dõi ưu đãi mới</h2>
          <p>Đại lý cập nhật chương trình mỗi tuần trên Facebook.</p>
          <div className="story-actions"><a className="btn btn-red" href={SITE.facebook} target="_blank" rel="noopener">Xem trên Facebook</a></div>
        </div>
      </section>
    </>
  );
}
