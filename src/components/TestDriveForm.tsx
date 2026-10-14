"use client";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import ModelSelect from "./ModelSelect";
import { toast, validPhone, useSelectListener, useQueryModel } from "./toastBus";

export default function TestDriveForm({ initialModel = "sealion5" }: { initialModel?: string }) {
  const [model, setModel] = useState(initialModel);
  useSelectListener("testdrive", useCallback((id: string) => setModel(id), []));
  useQueryModel(useCallback((id: string) => setModel(id), []));
  const [minDate, setMinDate] = useState<string>();
  // eslint-disable-next-line react-hooks/set-state-in-effect -- ngày chỉ tính được ở client (Next chặn new Date() khi prerender)
  useEffect(() => { const d = new Date(); d.setDate(d.getDate() + 1); setMinDate(d.toISOString().slice(0, 10)); }, []);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget; const name = f.elements.namedItem("name") as HTMLInputElement; const phone = f.elements.namedItem("phone") as HTMLInputElement;
    if (!name.value.trim()) { name.focus(); toast("Vui lòng nhập họ tên."); return; }
    if (!validPhone(phone.value)) { phone.focus(); toast("Số điện thoại chưa đúng định dạng."); return; }
    // TODO: gửi dữ liệu về API /api/lead (Zalo OA, Google Sheet, email...)
    toast("Đã nhận lịch lái thử. Tư vấn viên sẽ gọi lại cho bạn."); f.reset();
  }
  return (
    <section className="book" id="lai-thu">
      <div className="wrap">
        <form className="book-card" onSubmit={submit} noValidate>
          <h3>Đăng ký lái thử</h3>
          <p className="sub">Tư vấn viên gọi lại trong 15 phút (giờ hành chính) để xác nhận lịch.</p>
          <div className="book-grid">
            <div className="field"><label htmlFor="td-name">Họ và tên</label><input id="td-name" name="name" placeholder="Nguyễn Văn A" required /></div>
            <div className="field"><label htmlFor="td-phone">Số điện thoại</label><input id="td-phone" name="phone" type="tel" inputMode="tel" placeholder="09xx xxx xxx" required /></div>
            <div className="field"><label htmlFor="td-model">Dòng xe quan tâm</label><ModelSelect id="td-model" name="model" value={model} onChange={(e) => setModel(e.target.value)} /></div>
            <div className="field"><label htmlFor="td-date">Ngày muốn lái thử</label><input id="td-date" name="date" type="date" min={minDate} /></div>
            <button className="btn btn-red" type="submit">Gửi đăng ký</button>
          </div>
        </form>
      </div>
    </section>
  );
}
