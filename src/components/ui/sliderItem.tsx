import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import { beVietnamPro, dmSans } from "./fonts";

export type TReview = {
  _id: number;
  title: string;
  position: string;
  image: string;
  description: string;
  rating: number;
};
const SliderItem = ({
  title,
  position,
  image,
  description,
  rating,
}: TReview) => {
  return (
    <div className="mt-[30px] md:mt-[58px] pt-[32px] md:pt-[45px] pb-[55px] lg:pb-[75px] bg-themeBgColor rounded-[24px] lg:rounded-[30px] flex flex-col items-center justify-center">
      {/* [736px] */}
      <Image
        src={image}
        alt="image"
        className="w-[48px] h-[48px] rounded-full object-cover"
      />
      <h1
        className={`${beVietnamPro.className} font-vietnam mt-[8px] md:mt-[12px] text-center text-[18px] md:text-[24px] font-medium leading-[133%] capitalize text-black`}
      >
        {title}
      </h1>
      <h2
        className={`${dmSans.className} font-dmSans text-center text-[#575A66] text-[16px] md:text-[22px] font-normal leading-[150%]`}
      >
        {position}
      </h2>
      <p
        className={`${dmSans.className} font-dmSans mt-[16px] text-center text-themeGray px-[44px] lg:px-[60px] text-[16px] md:text-[22px] italic font-normal leading-[150%]`}
      >
        {description}
      </p>
      <div className="mt-[16px]">
        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
      </div>
    </div>
  );
};

export default SliderItem;
