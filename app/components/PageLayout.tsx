"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Header from "@/app/components/Navigation";
import FooterMain from "@/app/components/Footer";

export default function PageLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/home" || pathname === "/";

  return (
    <div className={isHomePage ? "bg-[#F4F8F3]" : ""}>
      <Header />
      <div
        className={`flex flex-col custom-min-h mx-auto ${
          !isHomePage ? "lg:pt-28 pt-24" : ""
        }`}
      >
        <div>{children}</div>
      </div>
      <FooterMain />
    </div>
  );
}
