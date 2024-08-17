"use client";
import assets from "@/assets";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";
import Container from "../Container";

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
    <Container className="my-[24px]">
      <nav className="flex justify-between items-center fixed">
        <Image
          className="cursor-pointer"
          onClick={scrollToTop}
          src={assets.logos.mainLogo}
          alt="logo"
        />
        <ul className="flex gap-[40px]">
          <Link
            to="home"
            smooth={true}
            activeClass="active"
            spy={true}
            className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer"
          >
            Home
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
      </nav>
    </Container>
  );
};

export default Navbar;
