import assets from "@/assets";
import Container from "@/components/Container";
import Image from "next/image";

import CustomHoverBtn from "@/components/ui/customHoverBtn";
import { Be_Vietnam_Pro, DM_Sans } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  variable: "--font-be-vietnam-pro",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const HeroSection = () => {
  return (
    <Container
      className={`my-10 mt-[96px] ${beVietnamPro.variable} font-vietnam`}
    >
      <div id="home" className="py-[80px] flex justify-between items-center">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[60px] leading-[120%]">
              <span className="font-normal">I’m john,</span>{" "}
              <span className="font-semibold">I provide</span>
            </h1>
            <div className="flex gap-[8px] items-center">
              <Image
                className=" h-[68px] w-[140px] rounded-full"
                src={assets.heroImages.descriptionObj}
                alt="description-image"
              />
              <h1 className="text-[60px] leading-[120%] font-semibold">
                UI/UX & web
              </h1>
            </div>
            <h1 className="text-[60px] leading-[120%] font-semibold">
              development services{" "}
            </h1>
          </div>
          <p
            className={`${dmSans.variable} font-dmSans text-[18px] font-medium leading-[150%] text-themeGray w-[45ch]`}
          >
            Designing sleek, user-centric websites that engage and convert. I
            blend creativity with technology to create intuitive digital
            experiences that elevate your brand and drive results.
          </p>

          <div className="flex gap-[32px] items-center">
            <CustomHoverBtn />

            <span className="text-[18px] font-medium text-themeBlue underline hover:text-black cursor-pointer">
              Explore Projects
            </span>
          </div>
        </div>

        {/* second div  */}
        <div>
          <Image
            className="w-[490px] h-[515px] object-cover"
            src={assets.heroImages.profileImg}
            alt="hero-image"
          />
        </div>

        {/* 
        <Image src={assets.customerImages.image1} alt="hero-image" />
          <Image src={assets.customerImages.image2} alt="hero-image" />
          <Image src={assets.customerImages.image3} alt="hero-image" />
          <Image src={assets.customerImages.image4} alt="hero-image" /> */}
      </div>
    </Container>
  );
};

export default HeroSection;
