import assets from "@/assets";
import Image from "next/image";
import Container from "../Container";
import { beVietnamPro, dmSans } from "../ui/fonts";

const Footer = () => {
  return (
    <div className="pt-[60px] pb-[32px] bg-themeBlack">
      <Container>
        <div>
          <ul
            className={`${beVietnamPro.className} font-vietnam text-themeMenu flex gap-[40px] items-center justify-center`}
          >
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blogs</li>
          </ul>

          {/* footer foot  */}
          <div className="flex justify-between  items-center mt-[46px]">
            <p
              className={`${dmSans.className} font-dmSans text-[16px] font-normal text-themeMenu capitalize`}
            >
              2024 John Doe All Right Reserved
            </p>
            <Image
              className="cursor-pointer"
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
