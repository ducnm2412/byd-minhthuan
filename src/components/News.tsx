import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/data/site";
import { POSTS } from "@/data/news";
export default function News() {
  return (
    <section className="section mist" id="tin-tuc">
      <div className="wrap">
        <div className="sec-head"><h2>Tin tức và ưu đãi</h2><p>Sự kiện ra mắt, chương trình khuyến mãi và hoạt động của đại lý.</p></div>
        <div className="news">
          {POSTS.map((p) => (
            <article className="n-card" key={p.slug}>
              <Image src={p.img} alt={p.t} width={800} height={450} />
              <div className="n-body">
                <span className="n-tag">{p.tag}</span><time dateTime={p.date}>{p.d}</time>
                <h4><Link href={`/tin-tuc#${p.slug}`}>{p.t}</Link></h4><p>{p.s}</p>
                <Link className="more" href={`/tin-tuc#${p.slug}`}>Xem chi tiết</Link>
              </div>
            </article>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 30 }}><a className="btn btn-dark" href={SITE.facebook} target="_blank" rel="noopener">Xem thêm trên Facebook</a></div>
      </div>
    </section>
  );
}
