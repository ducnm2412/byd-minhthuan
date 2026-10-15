import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Lexend_Exa, Saira_Semi_Condensed } from "next/font/google";
import "./globals.css";
import "./pages.css";
import "./v2.css";
import "./studio.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import Toast from "@/components/Toast";
import Motion from "@/components/Motion";
import Lightbox from "@/components/Lightbox";

const display = Saira_Semi_Condensed({ subsets: ["latin", "vietnamese"], weight: ["600", "700", "800"], display: "swap", variable: "--font-display" });
const wide = Lexend_Exa({ subsets: ["latin", "vietnamese"], weight: ["700", "800"], display: "swap", variable: "--font-wide" });
const font = Be_Vietnam_Pro({ subsets: ["latin", "vietnamese"], weight: ["400", "500", "600", "700", "800"], display: "swap", variable: "--font-bvp" });

export const metadata: Metadata = {
  title: { default: "BYD Thuận Minh Gia Lai – Đại lý ô tô BYD tại Pleiku", template: "%s | BYD Thuận Minh Gia Lai" },
  description: "Đại lý BYD Thuận Minh Gia Lai: kinh doanh ô tô BYD, tư vấn mua xe, đăng ký lái thử, hỗ trợ trả góp, bảo dưỡng hậu mãi. 662A Lê Duẩn, Pleiku, Gia Lai. Hotline 093 161 26 79.",
  openGraph: { title: "BYD Thuận Minh Gia Lai", description: "Đại lý ô tô BYD tại Pleiku, Gia Lai. Lái thử, báo giá, trả góp.", images: ["/images/hero.jpg"], locale: "vi_VN", type: "website" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0F0F10" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${font.variable} ${display.variable} ${wide.variable}`}>
      <body>
        <Nav />
        <main id="top">{children}</main>
        <Footer />
        <Fab />
        <Toast />
        <Motion />
        <Lightbox />
      </body>
    </html>
  );
}
