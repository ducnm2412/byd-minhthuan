export type Car = {
  id: string; name: string; type: string; cat: ("ev" | "dmi" | "mpv")[];
  img: string | null; badge?: string; isNew?: boolean;
  seats: number; power: string; range: number; fuel: string; hp: number;
  battery: string; length: number; charge: string; drive: string;
};

/* Thông số tham khảo – đại lý xác nhận theo phiên bản thực tế. */
export const CARS: Car[] = [
  { id:"sealion5", name:"BYD Sealion 5 DM-i", type:"SUV hybrid DM-i · 5 chỗ", cat:["dmi"], img:"/images/car-sealion5.jpg", badge:"Mới ra mắt", isNew:true, seats:5, power:"Hybrid DM-i", range:1847, fuel:"3,7 L/100 km", hp:177, battery:"18,3 kWh (tham khảo)", length:4735, charge:"AC sạc ngoài", drive:"Cầu trước" },
  { id:"seal5", name:"BYD Seal 5 DM-i", type:"Sedan hybrid DM-i · 5 chỗ", cat:["dmi"], img:"/images/car-seal5.jpg", badge:"Bán chạy", seats:5, power:"Hybrid DM-i", range:1714, fuel:"3,2 L/100 km", hp:189, battery:"18,3 kWh", length:4780, charge:"AC sạc ngoài", drive:"Cầu trước" },
  { id:"dolphin", name:"BYD Dolphin", type:"Hatchback điện · 5 chỗ", cat:["ev"], img:"/images/car-dolphin.jpg", badge:"Đô thị", seats:5, power:"Điện thuần", range:427, fuel:"0 L – thuần điện", hp:204, battery:"60,5 kWh Blade", length:4290, charge:"DC 88 kW", drive:"Cầu trước" },
  { id:"m6", name:"BYD M6", type:"MPV điện · 7 chỗ", cat:["ev","mpv"], img:"/images/car-m6.jpg", badge:"Gia đình", seats:7, power:"Điện thuần", range:530, fuel:"0 L – thuần điện", hp:204, battery:"71,8 kWh Blade", length:4710, charge:"DC 115 kW", drive:"Cầu trước" },
  { id:"m9", name:"BYD M9 DM-i", type:"MPV cao cấp hybrid · 7 chỗ", cat:["dmi","mpv"], img:"/images/car-m9.jpg", badge:"Cao cấp", seats:7, power:"Hybrid DM-i", range:1100, fuel:"5,6 L/100 km", hp:218, battery:"25 kWh (tham khảo)", length:5145, charge:"DC sạc nhanh", drive:"Cầu trước" },
  { id:"atto2", name:"BYD Atto 2", type:"SUV điện đô thị · 5 chỗ", cat:["ev"], img:null, seats:5, power:"Điện thuần", range:380, fuel:"0 L – thuần điện", hp:177, battery:"45,1 kWh Blade", length:4310, charge:"DC 65 kW", drive:"Cầu trước" },
  { id:"sealion6", name:"BYD Sealion 6 DM-i", type:"SUV hybrid DM-i · 5 chỗ", cat:["dmi"], img:null, seats:5, power:"Hybrid DM-i", range:1092, fuel:"4,8 L/100 km", hp:218, battery:"18,3 kWh", length:4775, charge:"AC sạc ngoài", drive:"Cầu trước" },
  { id:"sealion8", name:"BYD Sealion 8 DM-i", type:"SUV hybrid DM-i · 7 chỗ", cat:["dmi","mpv"], img:null, seats:7, power:"Hybrid DM-i", range:1100, fuel:"5,5 L/100 km", hp:435, battery:"35,6 kWh", length:4890, charge:"DC sạc nhanh", drive:"Hai cầu AWD" },
  { id:"seal", name:"BYD Seal", type:"Sedan điện thể thao · 5 chỗ", cat:["ev"], img:null, seats:5, power:"Điện thuần", range:650, fuel:"0 L – thuần điện", hp:313, battery:"82,5 kWh Blade", length:4800, charge:"DC 150 kW", drive:"Cầu sau" },
];

export const fmtVND = (n: number) => Math.round(n).toLocaleString("vi-VN");
export const fmtKm = (n: number) => n.toLocaleString("vi-VN");
