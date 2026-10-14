import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteContact from "@/components/QuoteContact";
import { SITE } from "@/data/site";

export const metadata: Metadata = { title: "Liên hệ", description: `Địa chỉ ${SITE.address}. Hotline / Zalo ${SITE.phoneDisplay}.` };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ label: "Liên hệ" }]} title="Liên hệ và chỉ đường" lead={`${SITE.address}. Hotline / Zalo ${SITE.phoneDisplay}.`} />
      <section className="map-embed">
        <div className="wrap">
          <iframe title="Bản đồ BYD Thuận Minh Gia Lai" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent("BYD Thuận Minh Gia Lai, 662A Lê Duẩn, Pleiku")}&output=embed`} />
        </div>
      </section>
      <QuoteContact />
    </>
  );
}
