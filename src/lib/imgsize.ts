import { readFileSync } from "node:fs";
import { join } from "node:path";

const cache = new Map<string, { w: number; h: number }>();

/** Kích thước gốc của ảnh JPEG/PNG trong /public (đọc header, chạy lúc build). */
export function imgSize(src: string): { w: number; h: number } {
  const hit = cache.get(src);
  if (hit) return hit;
  const buf = readFileSync(join(process.cwd(), "public", src));
  let size = { w: 1200, h: 800 };
  if (buf[0] === 0x89 && buf[1] === 0x50) {
    size = { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  } else {
    // JPEG: duyệt các marker tới khung SOF0..SOF15 (trừ DHT/JPG/DAC)
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) { i++; continue; }
      const m = buf[i + 1];
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
        size = { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
        break;
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }
  cache.set(src, size);
  return size;
}
