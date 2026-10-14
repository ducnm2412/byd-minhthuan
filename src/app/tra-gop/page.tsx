import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Finance from "@/components/Finance";
import QuoteContact from "@/components/QuoteContact";

export const metadata: Metadata = { title: "Tư vấn trả góp", description: "Tính khoản trả góp xe BYD, vay tới 80% giá trị xe qua ngân hàng liên kết." };

const STEPS = [
  ["Chọn xe và khoản trả trước", "Dùng bảng tính bên trên để thử các mức trả trước và kỳ hạn phù hợp."],
  ["Gửi thông tin cho tư vấn viên", "Chúng tôi gọi lại, giới thiệu ngân hàng có lãi suất phù hợp với hồ sơ của bạn."],
  ["Nộp hồ sơ vay", "CCCD, giấy tờ cư trú và chứng minh thu nhập. Doanh nghiệp cần thêm giấy phép kinh doanh."],
  ["Ngân hàng duyệt, nhận xe", "Sau khi được duyệt, đại lý hoàn tất đăng ký, biển số và bàn giao xe."],
];

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ label: "Trả góp" }]} title="Mua xe BYD trả góp" lead="Vay tới 80% giá trị xe. Số liệu bên dưới là ước tính; lãi suất thực tế do ngân hàng duyệt." />
      <Finance />
      <section className="section">
        <div className="wrap">
          <div className="sec-head"><h2>Quy trình vay mua xe</h2><p>Bốn bước, thường hoàn tất trong vài ngày làm việc.</p></div>
          <ol className="steps">
            {STEPS.map(([t, d], i) => <li key={t}><span className="n">{i + 1}</span><h4>{t}</h4><p>{d}</p></li>)}
          </ol>
        </div>
      </section>
      <QuoteContact />
    </>
  );
}
