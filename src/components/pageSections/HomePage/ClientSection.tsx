import assets from "@/assets";
import Container from "@/components/Container";
import { outfit } from "@/components/ui/fonts";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ClientSection = () => {
  return (
    <div id="client" className=" bg-themeBlack">
      <Container className="">
        <div className="py-[32px] flex flex-col md:flex-row md:items-center gap-[20px] lg:gap-[70px]">
          <div
            className={`${outfit.className} font-outfit font-semibold capitalize text-white`}
          >
            <h2 className="text-[18px] md:text-[24px] leading-[116%]">
              meet my
            </h2>
            <h1 className="text-[24px] md:text-[32px] leading-[116%] w-[10ch]">
              recent clients
            </h1>
          </div>

          {/* marque  */}
          <div className="flex items-center">
            <div className="w-[2px] bg-[#C0C2CC] h-[80px]"></div>
            {/* moving marque here */}
            <Marquee
              pauseOnHover
              className="w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1000px]"
            >
              <Image
                className="ml-[40px]"
                src={assets.clientLogos.google}
                alt="logo"
              />
              <Image
                className="ml-[40px]"
                src={assets.clientLogos.upWork}
                alt="logo"
              />
              <Image
                className="ml-[40px]"
                src={assets.clientLogos.linkedin}
                alt="logo"
              />
              <Image
                className="ml-[40px]"
                src={assets.clientLogos.dribble}
                alt="logo"
              />
              <Image
                className="ml-[40px]"
                src={assets.clientLogos.fiver}
                alt="logo"
              />
              <Image
                className="ml-[40px]"
                src={assets.clientLogos.linkedin}
                alt="logo"
              />
            </Marquee>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ClientSection;
