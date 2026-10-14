import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteContact from "@/components/QuoteContact";
import PriceTable from "@/components/PriceTable";

export const metadata: Metadata = { title: "Nhận báo giá", description: "Nhận báo giá lăn bánh xe BYD tại Gia Lai qua Zalo trong ngày." };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ label: "Nhận báo giá" }]} title="Nhận báo giá lăn bánh" lead="Báo giá gồm phí trước bạ, biển số, bảo hiểm và ưu đãi đang áp dụng. Gửi qua Zalo trong ngày." />
      <QuoteContact />
      <PriceTable />
    </>
  );
}
