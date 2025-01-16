"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Navbar, Dropdown } from "flowbite-react";
import BookButton from "./BookButton";
import Logo from "@/app/assets/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleScreenSizeChange = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => setIsMediumScreen(e.matches);

    setIsMediumScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleScreenSizeChange);

    return () =>
      mediaQuery.removeEventListener("change", handleScreenSizeChange);
  }, []);

  const handleClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfR_mYH5BJj-KfgbxiFUzRSyaTaxp99qAOiWoVJubiqtOkuEw/viewform",
      "_blank"
    );
  };

  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  return (
    <Navbar
      fluid
      rounded
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 sm:justify-center justify-center
        ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}
        ${!scrolled && isMediumScreen ? "bg-white shadow-sm" : ""}
        ${isAboutPage && !scrolled && !isMediumScreen ? "text-slate-50" : ""}
        ${isAboutPage && !scrolled && isMediumScreen ? "text-gray-800" : ""}
      `}
    >
      <Navbar.Brand href="/home">
        <Image
          src={Logo}
          width={50}
          height={50}
          alt="DABUZZZZ Logo"
          className="cursor-pointer"
        />
      </Navbar.Brand>

      <div className="flex md:order-2 gap-4">
        <div className="lg:flex md:flex sm:hidden hidden">
          <BookButton />
        </div>
        <Navbar.Toggle className="md:bg-transparent sm:bg-white bg-white cursor-pointer" />
      </div>

      <Navbar.Collapse className="lg:bg-transparent md:bg-transparent sm:bg-white sm:text-center text-center md:leading-none leading-10 bg-white lg:p-0 lg:my-0 md:my-4 my-4 rounded-lg p-2">
        <Navbar.Link href="/home">
          <span
            className={`
              ${
                isAboutPage && !scrolled
                  ? isMediumScreen
                    ? "text-gray-800"
                    : "text-slate-50"
                  : "text-gray-800"
              }
             cursor-pointer`}
          >
            Home
          </span>
        </Navbar.Link>
        <Dropdown
            arrowIcon={true}
            inline
            label="Services"
            className="md:w-auto sm:w-full w-full"
          >
            <Dropdown.Item>
              <Navbar.Link href="/service">
                <span
                  className={`${
                    isAboutPage && !scrolled && !isMediumScreen
                      ? "text-gray-800"
                      : ""
                  } cursor-pointer`}
                >
                  What we provided
                </span>
              </Navbar.Link>
            </Dropdown.Item>
            {/* <Dropdown.Item>
              <Navbar.Link href="/service/servicesMenu">
                <span
                  className={`${
                    isAboutPage && !scrolled && !isMediumScreen
                      ? "text-gray-800"
                      : ""
                  } cursor-pointer`}
                >
                  Our Services
                </span>
              </Navbar.Link>
            </Dropdown.Item> */}
          </Dropdown>
        <Navbar.Link href="/gallery">
          <span
            className={`${
              isAboutPage && !scrolled && !isMediumScreen
                ? "text-slate-50"
                : "text-gray-800"
            } cursor-pointer`}
          >
            Gallery
          </span>
        </Navbar.Link>
        <div className="custom-dropdown w-full md:w-auto flex justify-center cursor-pointer">
          <Dropdown
            arrowIcon={true}
            inline
            label="About us"
            className="md:w-auto sm:w-full w-full"
          >
            <Dropdown.Item>
              <Navbar.Link href="/about">
                <span
                  className={`${
                    isAboutPage && !scrolled && !isMediumScreen
                      ? "text-gray-800"
                      : ""
                  } cursor-pointer`}
                >
                  About us
                </span>
              </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link href="/testimonials">
                <span
                  className={`${
                    isAboutPage && !scrolled && !isMediumScreen
                      ? "text-gray-800"
                      : ""
                  } cursor-pointer`}
                >
                  Reviews
                </span>
              </Navbar.Link>
            </Dropdown.Item>
          </Dropdown>
        </div>

        <Navbar.Link href="/contact">
          <span
            className={`${
              isAboutPage && !scrolled && !isMediumScreen
                ? "text-slate-50"
                : "text-gray-800"
            } cursor-pointer`}
          >
            Contact
          </span>
        </Navbar.Link>
        <Button
          onClick={handleClick}
          className="rounded-full bg-primary lg:hidden md:hidden sm:flex px-3"
        >
          Book now
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
