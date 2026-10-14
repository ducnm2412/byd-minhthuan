import Link from "next/link";
import { SITE } from "@/data/site";
import { Facebook, Chat, Pin } from "./Icons";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-row">
          <ul className="ftr-links">
            <li><Link href="/lien-he">Liên hệ</Link></li>
            <li><Link href="/dong-xe">Sản phẩm</Link></li>
            <li><Link href="/lai-thu">Đăng ký lái thử</Link></li>
            <li><Link href="/bao-gia">Nhận báo giá</Link></li>
            <li><Link href="/tra-gop">Tư vấn trả góp</Link></li>
            <li><Link href="/so-sanh">So sánh xe</Link></li>
          </ul>
          <div className="ftr-social">
            <span>Theo dõi BYD Thuận Minh</span>
            <a href={SITE.facebook} target="_blank" rel="noopener" aria-label="Facebook"><Facebook /></a>
            <a href={SITE.zalo} target="_blank" rel="noopener" aria-label="Zalo"><Chat /></a>
            <a href={SITE.maps} target="_blank" rel="noopener" aria-label="Google Maps"><Pin /></a>
          </div>
        </div>
        <p className="ftr-addr">{SITE.name} · {SITE.address} · Hotline / Zalo <a href={SITE.phoneTel}>{SITE.phoneDisplay}</a> · Mở cửa 8:00 – 18:00 hằng ngày</p>
        <p className="ftr-copy">© 2026 Bản quyền thuộc về {SITE.name}. BYD và logo BYD là thương hiệu của BYD Company Ltd.</p>
      </div>
    </footer>
  );
}
