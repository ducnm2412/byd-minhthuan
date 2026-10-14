/* Nội dung trang chủ (ảnh thật từ fanpage đại lý trong /public). */

export const SLIDES = [
  { img: "/images/fb/036.jpg", title: "BYD SEALION 5 DM-i", sub: "Chuẩn mực SUV cỡ C thế hệ mới", href: "/dong-xe/sealion5" },
  { img: "/images/fb/021.jpg", title: "BYD M9 DM-i", sub: "MPV thông minh cỡ lớn hàng đầu phân khúc", href: "/dong-xe/m9" },
  { img: "/images/fb/074.jpg", title: "BYD DOLPHIN", sub: "Hatchback điện cho phố thị", href: "/dong-xe/dolphin" },
];

export const MODELS = [
  { id: "sealion5", name: "BYD SEALION 5 DM-i", sub: "Chuẩn mực C-SUV thế hệ mới", img: "/images/car-sealion5.jpg" },
  { id: "m9", name: "BYD M9", sub: "MPV thông minh cỡ lớn hàng đầu phân khúc", img: "/images/car-m9.jpg" },
  { id: "seal5", name: "BYD SEAL 5 DM-i", sub: "Sedan hybrid tiết kiệm cho gia đình", img: "/images/car-seal5.jpg" },
  { id: "dolphin", name: "BYD DOLPHIN", sub: "Hatchback điện linh hoạt trong phố", img: "/images/car-dolphin.jpg" },
  { id: "m6", name: "BYD M6", sub: "MPV điện 7 chỗ cho gia đình đông người", img: "/images/car-m6.jpg" },
];

export const TECH = [
  { img: "/images/fb/041.jpg", t: "DM-i Super Hybrid", d: "Chạy điện trong phố, chạy xăng đường dài. Trên 1.000 km mỗi lần đổ đầy và sạc đầy." },
  { img: "/images/fb/037.jpg", t: "Khoang lái thông minh", d: "Màn hình xoay, trợ lý giọng nói tiếng Việt, kết nối điện thoại không dây." },
  { img: "/images/fb/040.jpg", t: "Hỗ trợ lái ADAS", d: "Ga tự động thích ứng, giữ làn, cảnh báo điểm mù và phanh khẩn cấp tự động." },
];

export const SHOWROOM = [
  { img: "/images/fb/047.jpg", cap: "Khu trưng bày đủ dòng xe, tư vấn 1:1" },
  { img: "/images/fb/077.jpg", cap: "Khu tiếp khách và chờ dịch vụ" },
];

export const DELIVERY = [
  { img: "/images/fb/067.jpg", cap: "Bàn giao BYD Dolphin cho khách hàng tại Pleiku" },
  { img: "/images/fb/068.jpg", cap: "Gia đình nhận xe tại showroom 662A Lê Duẩn" },
  { img: "/images/fb/049.jpg", cap: "Khách hàng trải nghiệm nội thất trước khi nhận xe" },
  { img: "/images/fb/021.jpg", cap: "BYD M9 trong ngày ra mắt tại Gia Lai" },
];

/* Lưới thư viện: wide = chiếm 2 cột, big = 2×2 */
export const GALLERY: { img: string; alt: string; size?: "big" | "wide" }[] = [
  { img: "/images/fb/020.jpg", alt: "BYD trưng bày tại Trung tâm Hội nghị Quốc gia", size: "big" },
  { img: "/images/fb/063.jpg", alt: "BYD Sealion 5 trên đường đất đỏ Tây Nguyên" },
  { img: "/images/fb/022.jpg", alt: "BYD M9 tại sự kiện trải nghiệm" },
  { img: "/images/fb/064.jpg", alt: "Trao quà cho người dân bằng BYD Seal", size: "wide" },
  { img: "/images/fb/062.jpg", alt: "Chương trình thiện nguyện cùng BYD Thuận Minh" },
  { img: "/images/fb/066.jpg", alt: "Các em nhỏ tại chương trình trung thu" },
  { img: "/images/fb/052.jpg", alt: "Lễ bàn giao 30 xe điện BYD Dolphin", size: "wide" },
  { img: "/images/fb/077.jpg", alt: "Khách hàng tại showroom Thuận Minh" },
  { img: "/images/fb/047.jpg", alt: "Khu tiếp khách showroom" },
  { img: "/images/fb/023.jpg", alt: "BYD M9 tại sân trưng bày" },
  { img: "/images/fb/050.jpg", alt: "Bàn giao xe BYD Dolphin cho Vinasun" },
];
