import assets from "@/assets";
import Container from "@/components/Container";
import CustomHoverBtn from "@/components/ui/customHoverBtn";
import { beVietnamPro, dmSans, outfit } from "@/components/ui/fonts";
import { Plus } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div id="home" className="bg-red-500">
      <Container
        className={`my-10 mt-[96px] ${beVietnamPro.variable} font-vietnam`}
      >
        <div className="py-[80px] flex flex-col lg:flex-row gap-[35px] items-center">
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[10px]">
              <h1 className=" text-[36px] md:text-[60px] leading-[120%]">
                <span className="font-normal">I’m john,</span>{" "}
                <span className="font-semibold">I provide</span>
              </h1>
              <div className="flex gap-[8px] items-center">
                <Image
                  className=" h-[34px] w-[68px] md:h-[68px] md:w-[140px] rounded-full"
                  src={assets.heroImages.descriptionObj}
                  alt="description-image"
                />
                <h1 className="text-[36px] md:text-[60px] leading-[120%] font-semibold">
                  UI/UX & web
                </h1>
              </div>
              <h1 className="text-[36px] md:text-[60px] leading-[120%] font-semibold">
                development services{" "}
              </h1>
            </div>
            <p
              className={`${dmSans.variable} font-dmSans text-[18px] font-medium leading-[150%] text-themeGray text-center md:text-left md:w-[45ch]`}
            >
              Designing sleek, user-centric websites that engage and convert. I
              blend creativity with technology to create intuitive digital
              experiences that elevate your brand and drive results.
            </p>

            <div className="flex gap-[20px] md:gap-[32px] items-center">
              <CustomHoverBtn />

              <span className="text-[16px] md:text-[18px] font-medium text-themeBlue underline hover:text-black cursor-pointer">
                Explore Projects
              </span>
            </div>
          </div>

          {/* second div  */}
          <div className="relative">
            <Image
              className="w-[490px] h-[515px] object-cover rounded-ss-[107px] rounded-se-[28px] rounded-es-[28px]"
              src={assets.heroImages.profileImg}
              alt="hero-image"
            />

            <div className="flex justify-between absolute -bottom-[35px] -left-[10px] md:-left-[35px] ">
              {/* left side content  */}
              <div className="flex flex-col items-center gap-[14px] px-[26px] py-[20px] rounded-[8px] backdrop-blur-md bg-black/25">
                <p
                  className={`${outfit.variable} text-[14px] text-center font-outfit capitalize text-white`}
                >
                  treated by 300+ worldwide <br /> brand & customers
                </p>

                {/* customer images */}
                <div className="flex">
                  <Image
                    className=" h-[30px] w-[30px] rounded-full object-cover border-[2px]  border-white"
                    src={assets.customerImages.image1}
                    alt="hero-image"
                  />
                  <Image
                    className="-ml-[12px] h-[30px] w-[30px] rounded-full object-cover border-[2px]  border-white"
                    src={assets.customerImages.image2}
                    alt="hero-image"
                  />
                  <Image
                    className="-ml-[12px] h-[30px] w-[30px] rounded-full object-cover border-[2px]  border-white"
                    src={assets.customerImages.image3}
                    alt="hero-image"
                  />
                  <Image
                    className="-ml-[12px] h-[30px] w-[30px] rounded-full object-cover border-[2px]  border-white"
                    src={assets.customerImages.image4}
                    alt="hero-image"
                  />
                  <Plus className="-ml-[12px] h-[30px] w-[30px] rounded-full object-cover border-[2px] bg-black text-white p-[5px] border-white" />
                </div>
              </div>
            </div>

            {/* statistics number  */}
            <div className="flex flex-col gap-[22px] md:gap-[30px] absolute -right-[5px] xl:-right-[80px] pl-[8px] md:pl-[28px] pt-[10px] md:pt-[38px] bottom-0 bg-white rounded-ss-[25px] md:rounded-ss-[40px]">
              <div className="flex flex-col gap-[0px]">
                <h2 className=" text-[22px] md:text-[32px] font-semibold">
                  355+
                </h2>
                <p
                  className={`${dmSans.variable} text-[11px] md:text-[16px] font-dmSans text-themeGray font-normal`}
                >
                  Completed Projects
                </p>
              </div>

              <div className="flex flex-col gap-[0px]">
                <h2 className=" text-[22px] md:text-[32px] font-semibold">
                  355+
                </h2>
                <p
                  className={`${dmSans.variable} text-[11px] md:text-[16px] font-dmSans text-themeGray font-normal`}
                >
                  Completed Projects
                </p>
              </div>

              <div className="flex flex-col gap-[0px]">
                <h2 className=" text-[22px] md:text-[32px] font-semibold">
                  355+
                </h2>
                <p
                  className={`${dmSans.variable} text-[11px] md:text-[16px] font-dmSans text-themeGray font-normal`}
                >
                  Completed Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
