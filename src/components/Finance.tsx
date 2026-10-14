"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { fmtVND } from "@/data/cars";
import { Dong, Trend, Calendar, Approve } from "./Icons";

export default function Finance() {
  const [priceM, setPriceM] = useState(700);
  const [down, setDown] = useState(30);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(8.5);
  const out = useMemo(() => {
    const price = Math.max(priceM, 0) * 1e6;
    const downAmt = (price * down) / 100, loan = price - downAmt, n = years * 12, r = rate / 100 / 12;
    const monthly = (loan * r) / (1 - Math.pow(1 + r, -n)); // niên kim, dư nợ giảm dần
    return { downAmt, loan, monthly };
  }, [priceM, down, years, rate]);

  return (
    <section className="section" id="tra-gop">
      <div className="wrap">
        <div className="sec-head">
          <h2>Hỗ trợ trả góp</h2>
          <p>Chọn phương án trả trước và kỳ hạn, hệ thống ước tính khoản góp hằng tháng ngay lập tức.</p>
        </div>
        <div className="fin-cards">
          <div className="fin"><div className="ic"><Dong /></div><h5>Trả trước từ</h5><b>20%</b><small>giá trị xe</small></div>
          <div className="fin"><div className="ic"><Trend /></div><h5>Lãi suất ưu đãi</h5><b>từ 6,5%</b><small>/năm, cố định 12 tháng đầu</small></div>
          <div className="fin"><div className="ic"><Calendar /></div><h5>Kỳ hạn tới</h5><b>8 năm</b><small>linh hoạt tất toán sớm</small></div>
          <div className="fin"><div className="ic"><Approve /></div><h5>Duyệt hồ sơ</h5><b>24 giờ</b><small>chỉ cần CCCD và sao kê</small></div>
        </div>
        <div className="calc">
          <div className="calc-inputs">
            <div className="field"><label htmlFor="c-price">Giá xe dự kiến (triệu đồng)</label><input id="c-price" type="number" inputMode="numeric" min={100} step={10} value={priceM} onChange={(e) => setPriceM(+e.target.value)} /></div>
            <div className="field">
              <label htmlFor="c-down">Trả trước: <span>{down}%</span></label>
              <input id="c-down" type="range" min={20} max={80} step={5} value={down} onChange={(e) => setDown(+e.target.value)} />
              <div className="range-row"><span>20%</span><span>80%</span></div>
            </div>
            <div className="field">
              <label htmlFor="c-term">Kỳ hạn: <span>{years} năm</span></label>
              <input id="c-term" type="range" min={1} max={8} step={1} value={years} onChange={(e) => setYears(+e.target.value)} />
              <div className="range-row"><span>1 năm</span><span>8 năm</span></div>
            </div>
            <div className="field">
              <label htmlFor="c-rate">Lãi suất: <span>{String(rate).replace(".", ",")}%</span>/năm</label>
              <input id="c-rate" type="range" min={6} max={13} step={0.5} value={rate} onChange={(e) => setRate(+e.target.value)} />
              <div className="range-row"><span>6%</span><span>13%</span></div>
            </div>
          </div>
          <div className="calc-out">
            <span className="lbl">Khoản góp ước tính mỗi tháng</span>
            <div className="big"><span>{fmtVND(out.monthly)}</span><small>đ</small></div>
            <div className="mini">
              <div><b>{fmtVND(out.downAmt / 1e6)} tr</b><small>Trả trước</small></div>
              <div><b>{fmtVND(out.loan / 1e6)} tr</b><small>Số tiền vay</small></div>
            </div>
            <div style={{ marginTop: 20 }}><Link className="btn btn-red" href="/bao-gia">Nhận tư vấn hồ sơ</Link></div>
            <p style={{ marginTop: 14, fontSize: 12.5, color: "rgba(255,255,255,.5)" }}>Tính theo dư nợ giảm dần, chưa gồm phí lăn bánh và bảo hiểm. Mức thực tế tùy ngân hàng.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
