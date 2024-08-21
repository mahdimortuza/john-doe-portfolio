import Container from "@/components/Container";
import { beVietnamPro, dmSans } from "@/components/ui/fonts";
import { ArrowUpRight } from "lucide-react";
import { IoMdMail } from "react-icons/io";

const NewsletterSection = () => {
  return (
    <div className="pt-[100px] bg-themeBlack">
      <Container>
        <div className="text-center">
          <h1
            className={`${beVietnamPro.className} font-vietnam text-[28px] md:text-[45px] font-semibold capitalize text-white`}
          >
            subscribe to my <span className="text-themeBlue">newsletter</span>
          </h1>
          <p
            className={`${dmSans.className} font-dmSans text-themeBgColor text-[14px] md:text-[18px] font-normal mx-auto mt-[18px] lg:w-[60ch]`}
          >
            Stay updated with our newsletter for the latest trends, tips, and
            insights in UI/UX design and web development.
          </p>

          {/* email subscription input */}
          <div className="relative w-[350px] md:w-[625px] mt-[45px] mx-auto">
            <IoMdMail className="absolute left-3 top-[32px] transform -translate-y-1/2 text-gray-500" />
            <input
              placeholder="hello@yourmail.com"
              className={`${dmSans.className} font-dmSans mt-[10px] text-[16px] font-normal px-[18px] py-[10px] pl-[40px] bg-themeBgColor rounded-[100px] w-full`}
            />
            {/* <IoMdMail className="absolute left-3 top-[32px] transform -translate-y-1/2 text-gray-500" /> */}
            <ArrowUpRight className="absolute right-1 top-[32px] transform -translate-y-1/2 bg-themeBlue p-[6px] rounded-full text-white w-[30px] h-[30px] md:w-[38px] md:h-[38px]" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsletterSection;
