"use client";

import { Footer } from "flowbite-react";
import { usePathname } from "next/navigation";

export default function FooterMain() {
  const pathname = usePathname();
  const isHomePage = pathname === "/home" || pathname === "/";

  return (
    <Footer
      container
      className={`shadow-none rounded-none ${
        isHomePage ? "absolute bottom-0 bg-transparent border-none " : "border-t border-gray-200"
      }`}
    >
      <Footer.Copyright
        href="#"
        by="All Right Reserve® Dabuzzzz Style Studio"
        year={2024}
      />
      <Footer.LinkGroup className="flex gap-6">
        <Footer.Link href="#">Term & Conditions</Footer.Link>
        {/* <Footer.Link href="#">Cookies</Footer.Link> */}
        <Footer.Link href="#">Contact us</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
