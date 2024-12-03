"use client";

import Image from "next/image";
import Testimonial_Image from "@/app/assets/Testimonials_Image.jpg";
import { reviews } from "@/app/mockData/reviews";
import { Rating } from "flowbite-react";
import { UserOutlined } from "@ant-design/icons";
import DabuzzzText from "@/app/components/DabuzzzText";
import React from "react";

export default function Testimonials() {
  return (
    <div className="lg:mb-16 mb-8 flex-grow py-4 lg:px-60 px-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
        <div>
          <Image
            src={Testimonial_Image}
            width={0}
            height={0}
            alt="Testimonials Image"
            className="w-full lg:h-auto min-h-48 object-cover object-top rounded-3xl"
          />
        </div>
        <div>
          <section className="mb-12">
            <i className="text-primary opacity-50 font-medium text-4xl" data-aos="fade-up">
              What they say about
            </i>
            <div className="lg:text-[6rem] text-[5rem] lg:leading-[6rem] leading-[5rem] text-primary" data-aos="fade-up">
              <DabuzzzText />
            </div>
          </section>
          <section className="h-[40rem] min-h-96 overflow-y-scroll" data-aos="fade-up">
            {reviews.map((item, index) => (
              <figure
                key={index}
                className="max-w-screen-md bg-[#EFEFEF] rounded-2xl p-6 mb-6"
              >
                <figcaption className="mb-6 flex items-center space-x-3">
                  <UserOutlined
                    className="rounded-full p-1 border border-gray-800"
                    sizes="large"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                    <span className="font-semibold text-xl">
                      {item.username}
                    </span>
                  </div>
                </figcaption>

                <p>“{item.comment}”</p>

                <div className="mt-4 flex items-center">
                  <Rating size="md">
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                  </Rating>
                </div>
              </figure>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
