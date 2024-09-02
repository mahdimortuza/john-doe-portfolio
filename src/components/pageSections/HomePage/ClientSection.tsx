import assets from "@/assets";
import Container from "@/components/Container";
import { outfit } from "@/components/ui/fonts";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ClientSection = () => {
  return (
    <div id="client" className="bg-themeBlack">
      <Container>
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

          {/* marquee */}
          <div className="flex items-center w-full overflow-hidden">
            <div className="w-[2px] bg-[#C0C2CC] h-[80px]"></div>
            {/* moving marquee here */}
            <Marquee
              pauseOnHover
              className="w-full"
              gradient={false}
              speed={40}
            >
              <div className="flex items-center">
                <Image
                  className="w-auto h-[32px] ml-[40px] xl:ml-[95px] "
                  src={assets.clientLogos.google}
                  alt="Google logo"
                />
                <Image
                  className="w-auto h-[32px] ml-[40px] xl:ml-[95px]"
                  src={assets.clientLogos.upWork}
                  alt="UpWork logo"
                />
                <Image
                  className="w-auto h-[32px] ml-[40px] xl:ml-[95px]"
                  src={assets.clientLogos.linkedin}
                  alt="LinkedIn logo"
                />
                <Image
                  className="w-auto h-[32px] ml-[40px] xl:ml-[95px]"
                  src={assets.clientLogos.dribble}
                  alt="Dribble logo"
                />
                <Image
                  className="w-auto h-[32px] ml-[40px] xl:ml-[95px]"
                  src={assets.clientLogos.fiver}
                  alt="Fiverr logo"
                />

                {/* Add more images as needed */}
              </div>
            </Marquee>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ClientSection;
