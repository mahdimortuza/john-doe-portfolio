"use client";
import assets from "@/assets";
import Image from "next/image";
import { Link } from "react-scroll";
import Container from "../Container";
import { beVietnamPro, dmSans } from "../ui/fonts";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <div className="pt-[24px] xl:pt-[60px] pb-[20px] md:pb-[32px] bg-themeBlack">
      <Container>
        <div>
          <ul
            className={`${beVietnamPro.className} font-vietnam text-themeMenu hidden md:flex gap-[36px] items-center justify-center text-[#DCDEE5] text-[18px] font-medium `}
          >
            <Link to="home" smooth={true} className="cursor-pointer p-1">
              <li>Home</li>
            </Link>
            <Link to="about" smooth={true} className="cursor-pointer p-1">
              <li>About</li>
            </Link>
            <Link to="services" smooth={true} className="cursor-pointer p-1">
              <li>Services</li>
            </Link>
            <Link to="projects" smooth={true} className="cursor-pointer p-1">
              <li>Projects</li>
            </Link>
            <Link to="blogs" smooth={true} className="cursor-pointer p-1">
              <li>Blogs</li>
            </Link>
          </ul>

          <Separator className=" lg:mt-[24px]" />

          {/* footer foot  */}
          <div className="flex flex-col-reverse md:flex-row justify-center mx-auto items-center lg:gap-[150px] xl:gap-[240px] mt-[20px] lg:mt-[46px]">
            <p
              className={`${dmSans.className} font-dmSans text-[16px] font-normal text-themeMenu capitalize`}
            >
              2024 John Doe All Right Reserved
            </p>
            <Image
              className="cursor-pointer hidden lg:flex"
              src={assets.logos.footerLogo}
              alt="logo"
            />
            <div className="flex gap-[14px]">
              <p
                className={`${dmSans.className} font-dmSans text-[16px] font-normal text-themeMenu capitalize`}
              >
                Privacy Policy
              </p>
              <div className="h-[20px] w-[2px] bg-themeMenu"></div>
              <p
                className={`${dmSans.className} font-dmSans text-[16px] font-normal text-themeMenu capitalize`}
              >
                Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
