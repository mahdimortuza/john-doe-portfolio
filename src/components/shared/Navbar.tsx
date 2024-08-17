"use client";
import assets from "@/assets";
import Image from "next/image";
import { Link } from "react-scroll";
import Container from "../Container";

const Navbar = () => {
  return (
    <Container className="my-[24px]">
      <nav className="flex justify-between items-center">
        <Image src={assets.logos.mainLogo} alt="logo" />
        <ul className="flex gap-[40px]">
          <Link to="home" smooth={true} className="card">
            <li className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer">
              <h3>Home</h3>
            </li>
          </Link>

          <Link to="about" smooth={true} className="card">
            <li className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer">
              <h3>About</h3>
            </li>
          </Link>

          <Link to="services" smooth={true} className="card">
            <li className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer">
              <h3>Services</h3>
            </li>
          </Link>

          <Link to="projects" smooth={true} className="card">
            <li className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer">
              <h3>Projects</h3>
            </li>
          </Link>

          <Link to="blogs" smooth={true} className="card">
            <li className="text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer">
              <h3>Blogs</h3>
            </li>
          </Link>
        </ul>
        <button className=" text-white bg-themeBlue hover:bg-black text-[16px] font-[500] leading-[150%] rounded-full px-[24px] py-[12px]">
          Contact me
        </button>
      </nav>
    </Container>
  );
};

export default Navbar;
