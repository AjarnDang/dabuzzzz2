"use client";

import DabuzzzText from "@/app/components/DabuzzzText";
import BookButton from "../components/BookButton";

export default function Home() {
  return (
    <div className="relative min-h-screen flex-grow py-4 lg:px-60 px-4">
      <div className="absolute-box text-center">
        <h1 className="text-2xl font-semibold" data-aos="fade-down">
          HAIR STUDIO & BARBER
        </h1>
        <h1
          className="lg:text-[10rem] text-[5rem] lg:leading-[12rem] text-primary"
          data-aos="fade-up"
        >
          <DabuzzzText />
        </h1>
        <div className="w-full flex justify-center mt-4" data-aos="fade-up">
          <BookButton />
        </div>
      </div>
    </div>
  );
}
