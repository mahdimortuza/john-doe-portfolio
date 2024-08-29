"use client";
import assets from "@/assets";
import { Separator } from "@/components/ui/separator";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // animateScroll.scrollToTop(options);
  // Function to handle the scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full py-[24px] bg-white z-50 backdrop-blur-3xl transition-shadow duration-300 ${
        shadow ? "shadow" : "shadow-none"
      }`}
    >
      <div className="max-w-[1290px] px-[10px] mx-auto flex justify-between items-center">
        <a href="/">
          <Image
            className="cursor-pointer"
            src={assets.logos.mainLogo}
            alt="logo"
          />
        </a>
        <ul className="hidden md:flex gap-[40px]">
          <Link to="home" smooth={true} activeClass="active" spy={true}>
            <li className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer">
              Home
            </li>
          </Link>

          <Link to="about" smooth={true} activeClass="active" spy={true}>
            <li className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer">
              About
            </li>
          </Link>

          <Link to="services" smooth={true} activeClass="active" spy={true}>
            <li className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer">
              Services
            </li>
          </Link>

          <Link to="projects" smooth={true} activeClass="active" spy={true}>
            <li className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer">
              Projects
            </li>
          </Link>

          <Link to="blogs" smooth={true} activeClass="active" spy={true}>
            <li className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer">
              Blogs
            </li>
          </Link>
        </ul>

        <Link to="contact" smooth={true}>
          <button className="hidden md:block text-white bg-themeBlue hover:bg-black text-[16px] font-[500] leading-[150%] rounded-full px-[24px] py-[12px]">
            Contact me
          </button>
        </Link>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <X /> : <AlignJustify />}
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div
        className={
          nav
            ? "fixed md:hidden left-0 top-0 pl-[10px] w-[60%] bg-white h-[100vh] ease-in-out duration-500 z-50"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
        }
      >
        <Image
          className="cursor-pointer my-[24px] "
          onClick={scrollToTop}
          src={assets.logos.mainLogo}
          alt="logo"
        />

        <Separator />

        <ul className="mt-5">
          <Link to="home" smooth={true} activeClass="active" spy={true}>
            <li
              onClick={handleNav}
              className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer"
            >
              Home
            </li>
          </Link>

          <Link to="about" smooth={true} activeClass="active" spy={true}>
            <li
              onClick={handleNav}
              className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer"
            >
              About
            </li>
          </Link>

          <Link to="services" smooth={true} activeClass="active" spy={true}>
            <li
              onClick={handleNav}
              className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer"
            >
              Services
            </li>
          </Link>

          <Link to="projects" smooth={true} activeClass="active" spy={true}>
            <li
              onClick={handleNav}
              className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer"
            >
              Projects
            </li>
          </Link>

          <Link
            onClick={handleNav}
            to="blogs"
            smooth={true}
            activeClass="active"
            spy={true}
          >
            <li className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer">
              Blogs
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
