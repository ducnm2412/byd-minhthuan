# BYD Thuận Minh Gia Lai

Website đại lý BYD Thuận Minh Gia Lai (662A Lê Duẩn, Pleiku). Next.js 16 (App Router) + React 19.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Cấu trúc thư mục

```
src/
  app/                 Các trang (App Router)
    page.tsx           Trang chủ
    gioi-thieu/  dong-xe/[id]/  so-sanh/  tin-tuc/  lai-thu/
    bao-gia/  tra-gop/  lien-he/  dich-vu/   (không có trên menu, vẫn truy cập được)
    globals.css        Biến màu, layout chung, các khối cơ bản
    pages.css          Trang con (page hero, story, tin tức…)
    v2.css             Các section trang chủ
    studio.css         Hero studio + Showcase đổi màu
  components/          Component giao diện (HeroStudio, Showcase, Nav, Footer…)
  data/                Nội dung: xe (cars.ts), trang chủ, tin tức, thông tin đại lý (site.ts)
  lib/                 Tiện ích (đọc kích thước ảnh)
public/images/
  hero/                Ảnh xe tách nền cho hero (thay ảnh: giữ nguyên tên file)
  cut/                 4 màu Sealion 5 cho Showcase
  fb/                  Ảnh thư viện lấy từ Facebook đại lý
  *.jpg                Ảnh thẻ xe, banner, tin tức
assets/                KHÔNG được deploy
  facebook-raw/        Ảnh gốc tải từ Facebook
  anh-can-lam-net/     Bản sao các ảnh còn mờ, cần làm nét rồi chép đè vào public/
docs/reference/        Ảnh mẫu thiết kế, bản chụp tham khảo
```

Sửa số điện thoại, địa chỉ, link Facebook/Zalo/Maps tại `src/data/site.ts`.
