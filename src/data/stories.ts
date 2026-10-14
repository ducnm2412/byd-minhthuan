/* Nội dung trang chi tiết dạng kể chuyện. Xe chưa có story dùng bản rút gọn sinh từ data/cars.ts. */

export type Block =
  | { kind: "intro"; title: string; text: string; img: string }       // nền xám, chữ + ảnh rộng + 2 nút
  | { kind: "overlay"; title: string; text: string; img: string }     // ảnh tràn viền, chữ đè phía trên
  | { kind: "plain"; title: string; text: string; img: string }       // chữ trên nền trắng, ảnh tràn viền bên dưới
  | { kind: "poster"; title: string; text: string; img: string };     // nền xám, poster dọc ở giữa

export type Story = {
  hero: string;
  stats: { v: string; l: string }[];
  statNote: string;
  blocks: Block[];
  colors?: { name: string; hex: string; img: string }[];
  specs: [string, string][];
  specNote: string;
  banner: string;
};

export const STORIES: Record<string, Story> = {
  sealion5: {
    hero: "/images/fb/036.jpg",
    stats: [
      { v: "3,7 L/100 km*", l: "Mức tiêu hao nhiên liệu (NEDC)" },
      { v: "1.847 km", l: "Quãng đường tổng hợp xăng và điện" },
      { v: "4.735 mm", l: "Chiều dài tổng thể" },
    ],
    statNote: "* Số liệu theo công bố của BYD Việt Nam, có thể thay đổi tùy phiên bản và điều kiện vận hành. Đại lý Thuận Minh Gia Lai sẽ xác nhận khi báo giá.",
    blocks: [
      { kind: "intro", title: "Hybrid DM-i: xăng và điện, không lo trạm sạc", img: "/images/fb/014.jpg",
        text: "Hệ truyền động DM-i Super Hybrid cho phép chạy thuần điện trong phố và tự động chuyển sang xăng trên đường dài. Một lần đổ đầy, một lần sạc đầy, đi từ Pleiku đến Sài Gòn mà không cần tìm trạm." },
      { kind: "overlay", title: "Khoang lái hướng người lái", img: "/images/fb/037.jpg",
        text: "Màn hình trung tâm xoay, bảng đồng hồ kỹ thuật số và vô lăng tích hợp điều khiển hỗ trợ lái, tất cả bố trí để tầm mắt không rời khỏi mặt đường." },
      { kind: "plain", title: "Nội thất hoàn thiện tinh tế", img: "/images/fb/039.jpg",
        text: "Ghế công thái học bọc da vegan chỉnh điện, bề mặt mềm ở mọi điểm chạm, ánh sáng viền và cửa sổ trời toàn cảnh cho hàng ghế sau." },
      { kind: "overlay", title: "Không gian hành lý tối ưu", img: "/images/fb/038.jpg",
        text: "Khoang hành lý mở rộng tới 1.410 lít khi gập hàng ghế sau, sàn phẳng và ngưỡng thấp cho những chuyến cắm trại cuối tuần của gia đình." },
      { kind: "poster", title: "Hỗ trợ lái ADAS", img: "/images/fb/034.jpg",
        text: "Ga tự động thích ứng, giữ làn, cảnh báo điểm mù, hỗ trợ đỗ xe và trợ lý ảo tiếng Việt. Các tính năng được cập nhật qua phần mềm từ xa." },
      { kind: "poster", title: "Pin Blade Battery an toàn hàng đầu", img: "/images/fb/041.jpg",
        text: "Pin Blade dạng thanh dẹt vượt qua bài thử đâm xuyên không bốc cháy, kiểm soát nhiệt vượt trội và đi kèm chính sách bảo hành pin cao áp dài hạn." },
    ],
    colors: [
      { name: "Xám Atlantis", hex: "#6E8296", img: "/images/fb/027.jpg" },
      { name: "Đen Cosmos", hex: "#1E1F22", img: "/images/fb/028.jpg" },
      { name: "Xám Ceramic", hex: "#9A9B9D", img: "/images/fb/029.jpg" },
      { name: "Trắng Arctic", hex: "#EDEEF0", img: "/images/fb/030.jpg" },
    ],
    specs: [
      ["Hệ truyền động", "1.5L xăng + mô-tơ điện, DM-i"], ["Công suất tổng", "177 hp"],
      ["Pin", "Blade LFP 18,3 kWh"], ["Quãng đường thuần điện", "Đang cập nhật"],
      ["Kích thước (D×R×C)", "4.735 × 1.860 × 1.710 mm"], ["Chiều dài cơ sở", "2.712 mm"],
      ["Số chỗ", "5"], ["Khoang hành lý", "Đến 1.410 L"],
      ["Dẫn động", "Cầu trước"], ["Bảo hành pin", "8 năm (tham khảo)"],
    ],
    specNote: "Thông số tham khảo theo tài liệu BYD Việt Nam. Đại lý xác nhận theo phiên bản và màu xe thực tế khi báo giá.",
    banner: "/images/fb/004.jpg",
  },
};
