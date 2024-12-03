import React from "react";
import Image from "next/image";
import DabuzzzText from "@/app/components/DabuzzzText";
import HeroService from "@/app/assets/Hero_Service_Page.png";
import ImgG1 from "@/app/assets/Image_Group_1.png";
import ImgG2 from "@/app/assets/Image_Group_2.png";
import ImgG3 from "@/app/assets/Image_Group_3.png";
import FooterServiceBg from "@/app/assets/Footer_Service_Page.png";
import { Button } from "flowbite-react";

export default function Service() {
  return (
    <div>
      <div className="flex-grow py-4 lg:px-60 px-4">
        <section className="lg:mb-16 mb-10">
          <Image
            src={HeroService}
            width={0}
            height={0}
            className="w-full lg:h-auto min-h-72 object-cover object-center rounded-3xl"
            alt="Hero Service Image"
          />
        </section>
        <section className="lg:mb-16 mb-10 text-center flex justify-center w-full">
          <div>
            <h1 className="lg:text-[6rem] text-[5rem] lg:leading-[8rem] leading-[5rem] text-primary xl:flex lg:block block justify-center font-bold italic items-end">
              <DabuzzzText />
              <div className="xl:flex lg:block md:hidden hidden">
                ’s Services
              </div>
            </h1>
            <i className="lg:hidden md:block block text-primary opacity-50 font-medium text-4xl">
              Services
            </i>
            <p className="mt-4 lg:mx-24">
              At Dabuzzzz Style Studio, we offer a full range of barber services
              tailored to every style and need. From precision men’s haircuts
              and signature hair setups to bold hair coloring for a fresh look,
              our team is here to deliver a top-notch experience. Plus, enjoy
              the convenience of on-site car parking, making your visit easy and
              stress-free. Step in, relax, and leave with a style that’s
              uniquely you!
            </p>
          </div>
        </section>
      </div>

      <div className="flex-grow">
        <div className="highlight bg-[#E4F5E9] lg:px-60 px-4 py-24">
          <section className="lg:mb-28 mb-12">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
              <div>
                <Image
                  src={ImgG1}
                  width={0}
                  height={0}
                  alt="Image Group 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center">
                <div>
                  <h1 className="text-4xl font-semibold mb-5">Hair Styles</h1>
                  <p>
                    Our skilled barbers specialize in men’s haircuts, delivering
                    precision cuts that suit your style and personality. Whether
                    you’re after a classic look or something trendy, our team
                    ensures every detail is perfected for a look that lasts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="lg:mb-28 lg:block hidden mb-12">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
              <div className="flex items-center">
                <div className="text-right">
                  <h1 className="text-4xl font-semibold mb-5">
                    Hair Dye, Curling and Straighten
                  </h1>
                  <p>
                    From subtle highlights to full-color transformations, our
                    expert colorists are here to create a shade that complements
                    your skin tone and style. We use high-quality products to
                    keep your hair looking vibrant and healthy.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src={ImgG2}
                  width={0}
                  height={0}
                  alt="Image Group 1"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          <section className="lg:mb-28 lg:hidden block mb-12">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
              <div>
                <Image
                  src={ImgG2}
                  width={0}
                  height={0}
                  alt="Image Group 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center">
                <div>
                  <h1 className="text-4xl font-semibold mb-5">
                    Hair Dye, Curling and Straighten
                  </h1>
                  <p>
                    From subtle highlights to full-color transformations, our
                    expert colorists are here to create a shade that complements
                    your skin tone and style. We use high-quality products to
                    keep your hair looking vibrant and healthy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-16">
              <div className="md:col-span-2">
                <Image
                  src={ImgG3}
                  width={0}
                  height={0}
                  alt="Image Group 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center">
                <div>
                  <h1 className="text-4xl font-semibold mb-5">
                    Great Facilities
                  </h1>
                  <p>
                    We’re committed to making your experience comfortable and
                    convenient. Enjoy easy car parking on-site for hassle-free
                    access, relax in our air-conditioned studio that keeps you
                    cool and comfortable, and unwind in our welcoming waiting
                    area designed for your convenience. Every detail is crafted
                    to finish.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="click-bait relative w-full min-h-80 lg:h-96">
        <Image
          src={FooterServiceBg}
          alt="Footer Service Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="-z-10"
        />

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold mb-2">
              The premium services we offer at Dabuzzzz Style Studio.
            </h1>
            <p>Let us help you find your style and make it unforgettable!</p>
            <div className="w-full flex justify-center mt-8">
              <Button className="rounded-full bg-primary px-4">Book now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
