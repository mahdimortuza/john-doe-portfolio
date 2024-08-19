import Image from "next/image";
import { beVietnamPro, dmSans } from "./fonts";

export type TServices = {
  _id: number;
  icon: string;
  title: string;
  description: string;
};
const ServiceCard = ({ _id, icon, title, description }: TServices) => {
  return (
    <div className="w-[370px] text-center hover:bg-themeHoverBackground transition duration-500 group cursor-pointer">
      <Image
        src={icon}
        alt="icon"
        className="flex justify-center w-[82px] h-[82px] rounded-[10px] mx-auto p-[12px] bg-themeLightBlue transition duration-500 group-hover:bg-themeBlue"
      />
      <h3
        className={`${beVietnamPro.className} mt-[24px] md:mt-[36px] font-vietnam text-[20px] md:text-[26px] font-medium capitalize text-themeBlack`}
      >
        {title}
      </h3>
      <p
        className={`${dmSans.className} mt-[8px] md:mt-[18px] font-dmSans text-[14px] md:text-[18px] font-normal capitalize text-themeGray`}
      >
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
