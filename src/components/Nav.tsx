"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/data/site";
import { Phone, Menu, Close } from "./Icons";

const LINKS = [
  ["/", "Trang chủ"], ["/gioi-thieu", "Giới thiệu"], ["/dong-xe", "Sản phẩm"], ["/so-sanh", "So sánh"],
  ["/tin-tuc", "Tin tức"], ["/lai-thu", "Đăng ký lái thử"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const isActive = (href: string) => (href === "/" ? path === "/" : !href.startsWith("/#") && path.startsWith(href));
  return (
    <header className="hdr">
      <div className="hdr-top"><div className="wrap"><a href="https://www.byd.com/vn" target="_blank" rel="noopener">BYD Việt Nam</a></div></div>
      <div className="hdr-main">
        <div className="wrap">
          <Link className="hdr-logo" href="/" aria-label={SITE.name}><Image src="/images/logo.png" alt={SITE.name} width={809} height={70} priority /></Link>
          <nav aria-label="Chính" className={open ? "open" : ""}>
            <ul>
              {LINKS.map(([href, label]) => (
                <li key={href}><Link href={href} className={isActive(href) ? "active" : ""} aria-current={isActive(href) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link></li>
              ))}
            </ul>
          </nav>
          <a className="hdr-call" href={SITE.phoneTel} aria-label={`Gọi ${SITE.phoneDisplay}`}><Phone /></a>
          <button className="hdr-menu" aria-label={open ? "Đóng menu" : "Mở menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>{open ? <Close /> : <Menu />}</button>
        </div>
      </div>
    </header>
  );
}
