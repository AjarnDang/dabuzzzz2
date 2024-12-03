import DabuzzzText from "@/app/components/DabuzzzText";
import React from "react";
import { facilities } from "@/app/mockData/facilities";
import Socials from "@/app/components/Socials";

export default function Contact() {
  return (
    <div className="lg:mb-16 mb-8 flex-grow py-4 lg:px-60 px-4">
      <section className="text-center lg:mb-16 mb-8">
        <i className="text-primary opacity-50 font-medium text-4xl">
          Get in touch with
        </i>
        <div className="lg:text-[6rem] text-[5rem] lg:leading-[8rem] leading-[5rem] text-primary">
          <DabuzzzText />
        </div>
      </section>

      <section className="lg:mb-16 mb-12 lg:pr-0 pr-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.3502649129787!2d102.82685467473935!3d16.45779258427942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228bc495fbe2f3%3A0x3c532946901ddbb2!2sDABUZZZZ!5e0!3m2!1sth!2sth!4v1731492729381!5m2!1sth!2sth"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="shadow-theme border rounded-2xl w-full md:h-[450px] h-[300px]"
        ></iframe>
      </section>

      <section>
        <div className="grid lg:grid-cols-2 grid-cols-auto">
          <div className="grid grid-cols-4 md:gap-8 sm:gap-4 gap-3">
            <div className="md:col-span-1 col-span-2 font-semibold">Tel.</div>
            <a
              href="tel:+66833456555"
              className="md:col-span-3 col-span-2 text-primary font-semibold"
            >
              +66 083 3456 555
            </a>

            <div className="md:col-span-1 col-span-2 font-semibold">Open</div>
            <div className="md:col-span-3 col-span-2">
              <p>MONDAY to SUNDAY</p>
              <p>at 10:00 - 19:00</p>
            </div>

            <div className="md:col-span-1 col-span-2 font-semibold">
              Facilities
            </div>
            <div className="md:col-span-3 col-span-2">
              {facilities.map((item, index) => (
                <div key={index}>{item.text}</div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-semibold">Follow us</div>
            <Socials />
          </div>
        </div>
      </section>
    </div>
  );
}
