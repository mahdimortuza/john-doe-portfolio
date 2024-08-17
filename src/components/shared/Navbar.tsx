"use client";
import assets from "@/assets";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  // const options = {
  //   duration: 500,
  //   smooth: true,
  // };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // animateScroll.scrollToTop(options);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50  shadow-lg ">
      <div className="max-w-[1290px] px-[10px] mx-auto flex justify-between items-center">
        <Image
          className="cursor-pointer"
          onClick={scrollToTop}
          src={assets.logos.mainLogo}
          alt="logo"
        />
        <ul className="flex gap-[40px]">
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
          <button className=" text-white bg-themeBlue hover:bg-black text-[16px] font-[500] leading-[150%] rounded-full px-[24px] py-[12px]">
            Contact me
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
