"use client";
import Image from "next/image";
import { useCallback, useState, type FormEvent } from "react";
import { SITE } from "@/data/site";
import ModelSelect from "./ModelSelect";
import { Pin, Phone, Facebook } from "./Icons";
import { toast, validPhone, useSelectListener, useQueryModel } from "./toastBus";

export default function QuoteContact() {
  const [model, setModel] = useState("sealion5");
  useSelectListener("quote", useCallback((id: string) => setModel(id), []));
  useQueryModel(useCallback((id: string) => setModel(id), []));
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget; const name = f.elements.namedItem("name") as HTMLInputElement; const phone = f.elements.namedItem("phone") as HTMLInputElement;
    if (!name.value.trim()) { name.focus(); toast("Vui lòng nhập họ tên."); return; }
    if (!validPhone(phone.value)) { phone.focus(); toast("Số điện thoại chưa đúng định dạng."); return; }
    // TODO: POST /api/lead
    toast("Đã gửi yêu cầu. Báo giá sẽ được gửi qua Zalo trong ngày."); f.reset();
  }
  return (
    <section className="section" id="bao-gia">
      <div className="wrap forms">
        <form className="panel" onSubmit={submit} noValidate>
          <h3>Nhận báo giá lăn bánh</h3>
          <p className="sub">Báo giá đầy đủ phí trước bạ, biển số, bảo hiểm và ưu đãi hiện hành tại Gia Lai.</p>
          <div className="form-grid">
            <div className="field"><label htmlFor="q-name">Họ và tên</label><input id="q-name" name="name" placeholder="Nguyễn Văn A" required /></div>
            <div className="field"><label htmlFor="q-phone">Số điện thoại / Zalo</label><input id="q-phone" name="phone" type="tel" inputMode="tel" placeholder="09xx xxx xxx" required /></div>
            <div className="field"><label htmlFor="q-model">Dòng xe</label><ModelSelect id="q-model" name="model" value={model} onChange={(e) => setModel(e.target.value)} /></div>
            <div className="field"><label htmlFor="q-pay">Hình thức thanh toán</label><select id="q-pay" name="pay" defaultValue="Trả thẳng"><option>Trả thẳng</option><option>Trả góp qua ngân hàng</option><option>Chưa quyết định</option></select></div>
            <div className="field full"><label htmlFor="q-note">Ghi chú</label><textarea id="q-note" name="note" rows={3} placeholder="Màu xe, thời điểm dự kiến nhận xe, câu hỏi khác..." /></div>
            <div className="full"><button className="btn btn-red" type="submit">Gửi yêu cầu báo giá</button></div>
          </div>
        </form>

        <div className="panel" id="lien-he">
          <h3>Liên hệ và chỉ đường</h3>
          <p className="sub">Showroom, xưởng dịch vụ và bãi lái thử cùng một địa chỉ.</p>
          <ul className="contact-list">
            <li><div className="ic"><Pin /></div><div><b>Địa chỉ</b><span>{SITE.address}</span></div></li>
            <li><div className="ic"><Phone /></div><div><b>Hotline / Zalo</b><span><a href={SITE.phoneTel}>{SITE.phoneDisplay}</a></span></div></li>
            <li><div className="ic"><Facebook /></div><div><b>Facebook</b><span><a href={SITE.facebook} target="_blank" rel="noopener">fb.com/bydthuanminhgialai</a></span></div></li>
          </ul>
          <a className="map-card" href={SITE.maps} target="_blank" rel="noopener">
            <Image src="/images/showroom.jpg" alt="Showroom BYD Thuận Minh Gia Lai" fill sizes="(max-width:900px) 100vw, 40vw" />
            <div className="m-body"><div><b>Mở trên Google Maps</b><small>Chỉ đường đến 662A Lê Duẩn, Pleiku</small></div><span className="btn btn-white btn-sm">Chỉ đường</span></div>
          </a>
          <div className="hours">
            <span>Thứ 2 – Thứ 7</span><span>8:00 – 18:00</span>
            <span>Chủ nhật</span><span>8:00 – 17:00</span>
            <span>Xưởng dịch vụ</span><span>Thứ 2 – Thứ 7, 7:30 – 17:30</span>
          </div>
        </div>
      </div>
    </section>
  );
}
