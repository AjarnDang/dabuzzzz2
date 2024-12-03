import DabuzzzText from "@/app/components/DabuzzzText";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex-grow py-4 lg:px-60 px-4">
      <div className="absolute-box text-center">
        <h1 className="text-2xl font-semibold">HAIR STUDIO & BARBER</h1>
        <h1 className="lg:text-[10rem] text-[5rem] lg:leading-[12rem] text-primary">
          <DabuzzzText />
        </h1>
        <div className="w-full flex justify-center mt-4">
          <Button className="rounded-full bg-primary px-4">Book now</Button>
        </div>
      </div>
    </div>
  );
}
