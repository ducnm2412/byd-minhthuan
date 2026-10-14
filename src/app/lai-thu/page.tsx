import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TestDriveForm from "@/components/TestDriveForm";
import Why from "@/components/Why";

export const metadata: Metadata = { title: "Đăng ký lái thử", description: "Đặt lịch lái thử xe BYD tại showroom hoặc tận nhà ở Pleiku." };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ label: "Lái thử" }]} title="Đăng ký lái thử" lead="Lái thử tại showroom hoặc tại nhà, cơ quan trong nội thành Pleiku. Miễn phí, không ràng buộc mua xe." />
      <TestDriveForm />
      <Why />
    </>
  );
}
