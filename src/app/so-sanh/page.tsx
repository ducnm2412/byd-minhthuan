import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Compare from "@/components/Compare";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "So sánh xe", description: "So sánh thông số kỹ thuật hai dòng xe BYD." };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ label: "So sánh xe" }]} title="So sánh hai dòng xe" lead="Chọn hai mẫu để xem khác biệt về giá, quãng đường, công suất và kích thước." />
      <Compare />
      <CtaBand />
    </>
  );
}
