import { SITE } from "@/data/site";
import { Phone } from "./Icons";
export default function Fab() {
  return (
    <div className="fab">
      <a className="zalo" href={SITE.zalo} target="_blank" rel="noopener" aria-label="Chat Zalo">Zalo</a>
      <a className="call" href={SITE.phoneTel} aria-label="Gọi hotline"><Phone /></a>
    </div>
  );
}
