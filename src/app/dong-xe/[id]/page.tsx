import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CARS, fmtKm, type Car } from "@/data/cars";
import { STORIES, type Story } from "@/data/stories";
import ColorPicker from "@/components/ColorPicker";

export function generateStaticParams() { return CARS.map((c) => ({ id: c.id })); }

export async function generateMetadata({ params }: PageProps<"/dong-xe/[id]">): Promise<Metadata> {
  const { id } = await params;
  const c = CARS.find((x) => x.id === id);
  if (!c) return {};
  return {
    title: c.name,
    description: `${c.name} – ${c.type}. Lái thử và nhận báo giá tại BYD Thuận Minh Gia Lai.`,
    openGraph: { images: [STORIES[c.id]?.hero ?? c.img ?? "/images/hero.jpg"] },
  };
}

/* Bản rút gọn cho xe chưa có nội dung riêng: dựng từ thông số chung. */
function fallback(c: Car): Story {
  const ev = c.cat.includes("ev");
  const img = c.img ?? "/images/grille.jpg";
  return {
    hero: img,
    stats: [
      { v: `${fmtKm(c.range)} km`, l: ev ? "Quãng đường mỗi lần sạc đầy" : "Quãng đường tổng hợp xăng và điện" },
      { v: `${c.hp} hp`, l: "Công suất tối đa" },
      { v: `${fmtKm(c.length)} mm`, l: "Chiều dài tổng thể" },
    ],
    statNote: "Số liệu tham khảo, có thể thay đổi tùy phiên bản. Đại lý Thuận Minh Gia Lai sẽ xác nhận khi báo giá.",
    blocks: [
      ev
        ? { kind: "intro", title: "Thuần điện, pin Blade an toàn", img, text: "Sạc tại nhà qua đêm, không tốn xăng, ít hạng mục bảo dưỡng. Pin Blade LFP của BYD ổn định nhiệt tốt và bền theo thời gian." }
        : { kind: "intro", title: "Hybrid DM-i: xăng và điện, không lo trạm sạc", img, text: "Ưu tiên chạy điện trong phố, động cơ xăng hiệu suất cao hỗ trợ trên đường dài. Tiêu hao thấp mà không phụ thuộc trạm sạc." },
      { kind: "poster", title: ev ? "Pin Blade Battery an toàn hàng đầu" : "Công nghệ DM-i Super Hybrid", img: "/images/fb/041.jpg",
        text: "Nền tảng năng lượng mới của BYD, đi kèm chính sách bảo hành pin cao áp dài hạn theo BYD Việt Nam." },
    ],
    specs: [
      ["Kiểu xe", c.type], ["Hệ truyền động", c.power], ["Pin", c.battery], ["Công suất", `${c.hp} hp`],
      ["Quãng đường", `${fmtKm(c.range)} km`], ["Tiêu hao", c.fuel], ["Chiều dài", `${fmtKm(c.length)} mm`], ["Sạc", c.charge],
      ["Số chỗ", String(c.seats)], ["Dẫn động", c.drive],
    ],
    specNote: "Thông số tham khảo. Đại lý xác nhận theo phiên bản và màu xe thực tế khi báo giá.",
    banner: img,
  };
}

export default async function Page({ params }: PageProps<"/dong-xe/[id]">) {
  const { id } = await params;
  const c = CARS.find((x) => x.id === id);
  if (!c) notFound();
  const s = STORIES[c.id] ?? fallback(c);
  const title = c.name.toUpperCase().replace("DM-I", "DM-i");

  return (
    <div className="v2">
      <section className="cd-hero">
        <Image src={s.hero} alt={c.name} fill priority sizes="100vw" />
        <h1>{title}</h1>
      </section>

      <section className="cd-stats">
        <div className="wrap">
          <dl>{s.stats.map((x) => <div key={x.l}><dt>{x.l}</dt><dd>{x.v}</dd></div>)}</dl>
          <p className="cd-note">{s.statNote}</p>
        </div>
      </section>

      {s.blocks.map((b) => {
        const head = <header className="v2-head"><h2>{b.title}</h2><p>{b.text}</p></header>;
        if (b.kind === "intro") return (
          <section key={b.title} className="cd-block v2-grey">
            <div className="wrap">{head}</div>
            <div className="cd-full"><Image src={b.img} alt={b.title} width={1600} height={1000} sizes="100vw" /></div>
            <div className="v2-btns"><Link className="obtn" href={`/lai-thu?xe=${c.id}`}>Đăng ký lái thử</Link><a className="obtn" href="#thong-so">Thông số kỹ thuật</a></div>
          </section>
        );
        if (b.kind === "overlay") return (
          <section key={b.title} className="cd-overlay">
            <Image src={b.img} alt="" fill sizes="100vw" />
            <div className="wrap">{head}</div>
          </section>
        );
        if (b.kind === "plain") return (
          <section key={b.title} className="cd-block v2-white cd-plain">
            <div className="wrap">{head}</div>
            <div className="cd-full"><Image src={b.img} alt={b.title} width={1600} height={1000} sizes="100vw" /></div>
          </section>
        );
        return (
          <section key={b.title} className="cd-block v2-grey cd-poster">
            <div className="wrap">{head}<Image src={b.img} alt={b.title} width={900} height={1125} sizes="(max-width:600px) 90vw, 400px" /></div>
          </section>
        );
      })}

      {s.colors && (
        <section className="cd-block v2-grey">
          <div className="wrap"><header className="v2-head"><h2>Màu sắc</h2></header><ColorPicker colors={s.colors} car={c.name} /></div>
        </section>
      )}

      <section className="cd-block v2-grey" id="thong-so">
        <div className="wrap">
          <header className="v2-head"><h2>Thông số kỹ thuật</h2><p>{s.specNote}</p></header>
          <dl className="cd-specs">{s.specs.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        </div>
      </section>

      <section className="cd-banner">
        <Image src={s.banner} alt="" fill sizes="100vw" />
        <div className="wrap">
          <h2>2026 {title}</h2>
          <div className="v2-btns left">
            <Link className="obtn obtn-light" href={`/lai-thu?xe=${c.id}`}>Đăng ký lái thử</Link>
            <Link className="obtn obtn-light" href={`/bao-gia?xe=${c.id}`}>Nhận báo giá</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
