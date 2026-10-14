import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <span className="tag"><i />Đại lý BYD tại Pleiku, Gia Lai</span>
          <h1>Năng lượng mới cho mỗi hành trình Tây Nguyên</h1>
          <p className="lead">Thuận Minh Gia Lai phân phối trọn bộ dòng xe điện và hybrid DM-i của BYD. Lái thử tại showroom hoặc tận nhà, nhận báo giá trong ngày, hỗ trợ trả góp tới 80%.</p>
          <div className="hero-actions">
            <Link className="btn btn-red" href="/lai-thu">Đặt lịch lái thử</Link>
            <Link className="btn btn-ghost" href="/dong-xe">Xem dòng xe</Link>
          </div>
        </div>
        <div className="hero-visual">
          <Image className="car" src="/images/hero.jpg" alt="BYD Sealion 5 DM-i màu trắng tại Pleiku" width={1400} height={1050} priority />
          <div className="spec-strip" aria-label="Thông số nổi bật BYD Sealion 5 DM-i">
            <div><b>1.847 km</b><small>Quãng đường tổng hợp</small></div>
            <div><b>3,7 L</b><small>/100 km xăng</small></div>
            <div><b>DM-i</b><small>Super Hybrid</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}
