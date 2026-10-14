import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Cars from "@/components/Cars";
import PriceTable from "@/components/PriceTable";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Dòng xe BYD", description: "Danh sách xe BYD đang bán tại Thuận Minh Gia Lai: Sealion 5, Seal 5, Dolphin, M6, M9 và nhiều mẫu khác." };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ label: "Dòng xe" }]} title="Dòng xe BYD tại Gia Lai" lead="Xe điện thuần, hybrid DM-i và MPV 7 chỗ. Chọn một mẫu để xem thông số, ảnh và đặt lịch lái thử." />
      <Cars />
      <PriceTable />
      <CtaBand />
    </>
  );
}
