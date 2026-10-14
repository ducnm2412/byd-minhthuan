"use client";
import { useCallback, useState } from "react";
import { CARS, fmtKm, type Car } from "@/data/cars";
import ModelSelect from "./ModelSelect";
import { useSelectListener, useQueryModel } from "./toastBus";

type Row = { label: string; get: (c: Car) => string; win: (a: Car, b: Car) => -1 | 0 | 1 };
const cmpNum = (f: (c: Car) => number, higherBetter = true) => (a: Car, b: Car): -1 | 0 | 1 => {
  const x = f(a), y = f(b); if (x === y) return -1; return (x > y) === higherBetter ? 0 : 1;
};
const ROWS: Row[] = [
  { label: "Hệ truyền động", get: (c) => c.power, win: () => -1 },
  { label: "Số chỗ", get: (c) => `${c.seats} chỗ`, win: cmpNum((c) => c.seats) },
  { label: "Quãng đường tổng hợp", get: (c) => `${fmtKm(c.range)} km`, win: cmpNum((c) => c.range) },
  { label: "Tiêu hao nhiên liệu", get: (c) => c.fuel, win: () => -1 },
  { label: "Công suất", get: (c) => `${c.hp} hp`, win: cmpNum((c) => c.hp) },
  { label: "Pin", get: (c) => c.battery, win: () => -1 },
  { label: "Chiều dài xe", get: (c) => `${fmtKm(c.length)} mm`, win: cmpNum((c) => c.length) },
  { label: "Sạc", get: (c) => c.charge, win: () => -1 },
  { label: "Dẫn động", get: (c) => c.drive, win: () => -1 },
];

export default function Compare() {
  const [a, setA] = useState("sealion5");
  const [b, setB] = useState("dolphin");
  useSelectListener("compareA", useCallback((id: string) => setA(id), []));
  useQueryModel(useCallback((id: string) => setA(id), []));
  const A = CARS.find((c) => c.id === a)!, B = CARS.find((c) => c.id === b)!;
  return (
    <section className="compare" id="so-sanh">
      <div className="wrap">
        <div className="sec-head">
          <h2>Thông số kỹ thuật và so sánh xe</h2>
          <p>Chọn hai mẫu để đặt cạnh nhau. Chỉ số nổi trội hơn được đánh dấu đỏ.</p>
        </div>
        <div className="compare-pick">
          <div className="field"><label htmlFor="cmp-a">Xe thứ nhất</label><ModelSelect id="cmp-a" value={a} onChange={(e) => setA(e.target.value)} /></div>
          <div className="vs" aria-hidden="true">VS</div>
          <div className="field"><label htmlFor="cmp-b">Xe thứ hai</label><ModelSelect id="cmp-b" value={b} onChange={(e) => setB(e.target.value)} /></div>
        </div>
        <div className="table-scroll">
          <table className="cmp-table">
            <thead><tr><th>Thông số</th><th>{A.name}</th><th>{B.name}</th></tr></thead>
            <tbody>
              {ROWS.map((r) => { const w = r.win(A, B); return (
                <tr key={r.label}><td>{r.label}</td><td className={w === 0 ? "win" : ""}>{r.get(A)}</td><td className={w === 1 ? "win" : ""}>{r.get(B)}</td></tr>
              ); })}
            </tbody>
          </table>
        </div>
        <p className="cmp-note">Thông số tham khảo theo tài liệu BYD Việt Nam, đại lý sẽ xác nhận theo phiên bản thực tế.</p>
      </div>
    </section>
  );
}
