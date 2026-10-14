import { CarIcon } from "./Icons";
export default function Stats() {
  return (
    <section className="stats" aria-label="Số liệu">
      <div className="wrap">
        <div className="ic"><CarIcon /></div>
        <div className="stat"><b>18,2 triệu+</b><small>xe năng lượng mới BYD toàn cầu</small></div>
        <div className="stat"><b>9 dòng xe</b><small>EV và DM-i tại đại lý</small></div>
        <div className="stat"><b>662A Lê Duẩn</b><small>Showroom và xưởng dịch vụ, Pleiku</small></div>
        <div className="stat"><b>7 ngày/tuần</b><small>nhận lịch lái thử</small></div>
      </div>
    </section>
  );
}
