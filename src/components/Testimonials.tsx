const ITEMS = [
  { q: "Đi M6 chở cả nhà bảy người lên Măng Đen, sạc một lần ở nhà là đủ cả chuyến. Nhân viên giao xe tận nơi và hướng dẫn rất kỹ.", n: "Anh Hùng", s: "Pleiku · BYD M6" },
  { q: "Mình lo đường tỉnh xa trạm sạc nên chọn Seal 5 DM-i. Chạy Pleiku đi Quy Nhơn về vẫn còn hơn nửa bình, tiền xăng giảm hẳn.", n: "Chị Thảo", s: "Chư Sê · BYD Seal 5 DM-i" },
  { q: "Công ty lấy ba chiếc Dolphin làm xe công tác. Thủ tục trả góp làm trong một buổi, hậu mãi gọi là có người hỗ trợ ngay.", n: "Anh Long", s: "Doanh nghiệp · BYD Dolphin" },
];
export default function Testimonials() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-head"><h2>Khách hàng nói gì</h2><p>Trải nghiệm của những gia đình và doanh nghiệp đã nhận xe tại Thuận Minh Gia Lai.</p></div>
        <div className="testi">
          {ITEMS.map((t) => (
            <div className="t-card" key={t.n}>
              <div className="stars" aria-label="5 sao">★★★★★</div>
              <p>{t.q}</p>
              <div className="who"><div className="av">{t.n.split(" ").pop()?.[0]}</div><div><b>{t.n}</b><small>{t.s}</small></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
