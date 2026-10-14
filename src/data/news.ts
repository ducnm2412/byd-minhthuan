export type Post = { slug: string; img: string; tag: string; date: string; d: string; t: string; s: string; body: string[] };

/* Nội dung tóm tắt từ poster của đại lý – cần đại lý xác nhận điều kiện chương trình trước khi đăng chính thức. */
export const POSTS: Post[] = [
  { slug: "sealion-5-dm-i-first-meet", img: "/images/news1.jpg", tag: "Sự kiện", date: "2026-10-10", d: "10/10/2026",
    t: "Sealion 5 DM-i First Meet: ra mắt tại Pleiku, đặc quyền sở hữu 100 triệu",
    s: "Khách tham dự được lái thử sớm, nhận ưu đãi cọc và quà tặng khi đặt xe trong ngày sự kiện.",
    body: [
      "BYD Thuận Minh Gia Lai tổ chức sự kiện BYD Experience Tour – Sealion 5 First Meet vào ngày 10/10/2026, từ 8:30 đến 11:00.",
      "Khách tham dự được xem xe trực tiếp, lái thử Sealion 5 DM-i và nghe tư vấn về công nghệ Super Hybrid DM-i cùng pin Blade.",
      "Tổng giá trị ưu đãi lên tới 100 triệu đồng, đã bao gồm khoản phí đặt cọc của khách hàng. Chi tiết từng phần ưu đãi, vui lòng liên hệ hotline để được xác nhận.",
    ] },
  { slug: "uu-dai-trung-thu-2026", img: "/images/news2.jpg", tag: "Ưu đãi", date: "2026-09-20", d: "20/09/2026",
    t: "Ưu đãi Trung Thu 2026 cho khách đặt cọc trong tháng",
    s: "Tặng gói phụ kiện và hỗ trợ phí trước bạ cho các dòng Dolphin, Atto 2, Seal 5 và M6.",
    body: [
      "Nhân dịp Trung Thu 2026, đại lý dành ưu đãi đặc biệt cho khách hàng đặt cọc mua xe tại BYD Thuận Minh Gia Lai.",
      "Chương trình áp dụng cho các dòng Dolphin, Atto 2, Seal 5 DM-i và M6, gồm gói phụ kiện và hỗ trợ phí trước bạ.",
      "Số lượng ưu đãi có hạn. Gọi 093 161 26 79 để giữ suất và nhận báo giá lăn bánh.",
    ] },
  { slug: "cuoi-tuan-ghe-showroom", img: "/images/news3.jpg", tag: "Showroom", date: "2026-09-06", d: "06/09/2026",
    t: "Cuối tuần ghé showroom: lái thử, tham quan và tư vấn sạc tại nhà",
    s: "Không gian trưng bày đủ dòng xe, khu vui chơi cho trẻ, cà phê miễn phí cho gia đình.",
    body: [
      "Cuối tuần này, cả gia đình có thể ghé showroom BYD Thuận Minh tại 662A Lê Duẩn, TP. Pleiku.",
      "Tại đây bạn được tham quan đầy đủ các dòng xe đang bán, lái thử, thưởng thức cà phê và nghe tư vấn lắp đặt sạc tại nhà.",
      "Muốn có xe sẵn để lái thử khi đến, hãy đặt lịch trước để tư vấn viên chuẩn bị.",
    ] },
];
