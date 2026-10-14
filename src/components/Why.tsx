import { Shield, Clock, Card, Wrench } from "./Icons";
const ITEMS = [
  { Icon: Shield, t: "Chuyên sâu một thương hiệu", d: "Chỉ bán BYD, nên tư vấn đúng dòng xe, đúng phiên bản cho nhu cầu gia đình hay công việc." },
  { Icon: Clock, t: "Lái thử tận nơi", d: "Đặt lịch, xe được đưa đến nhà hoặc cơ quan của bạn trong nội thành Pleiku." },
  { Icon: Card, t: "Trả góp linh hoạt", d: "Liên kết nhiều ngân hàng, hỗ trợ vay tới 80% giá trị xe, duyệt hồ sơ nhanh." },
  { Icon: Wrench, t: "Hậu mãi tại chỗ", d: "Xưởng dịch vụ ngay tại đại lý, bảo dưỡng định kỳ, cứu hộ và tư vấn sạc." },
];
export default function Why() {
  return (
    <section className="section" id="gioi-thieu">
      <div className="wrap">
        <div className="sec-head">
          <h2>Vì sao chọn Thuận Minh Gia Lai?</h2>
          <p>Đại lý chuyên về BYD, tập trung vào công nghệ xe năng lượng mới và trải nghiệm lái thực tế cho khách hàng Gia Lai và khu vực lân cận.</p>
        </div>
        <div className="why-grid">
          {ITEMS.map(({ Icon, t, d }) => (
            <div className="why" key={t}><div className="ic"><Icon /></div><h4>{t}</h4><p>{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
