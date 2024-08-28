import { Share2 } from "lucide-react";
import Image from "next/image";
import { dmSans, outfit } from "./fonts";

type TBlog = {
  _id: number;
  title: string;
  description: string;
  image: string;
  date: string;
};
const BlogCard = ({ _id, title, description, image, date }: TBlog) => {
  return (
    <div className="relative w-[350px] h-[360px] md:h-[420px] rounded-[26px] md:w-[400px] overflow-hidden shadow-lg group">
      {/* Image Container */}
      <div className="relative h-[200px] md:h-[260px] overflow-hidden rounded-bl-[26px] rounded-t-[18px]">
        <Image
          src={image}
          alt={title}
          fill={true}
          className="object-cover transform transition-transform rounded-t-[26px] rounded-bl-[26px] duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="blog-inverted-corner"></div>
      </div>

      {/* Text Content */}
      <div className="py-[26px] px-[30px] rounded-tr-[45px] bg-white absolute -bottom-[12px]">
        <div className="flex justify-between items-center">
          <span
            className={`${dmSans.className} font-dmSans text-[16px] text-[#707380] font-normal`}
          >
            {date}
          </span>
          <Share2 className="text-[#707380] w-[22px] h-[22px]" />
        </div>
        <h1
          className={`${outfit.className} w-[300px] md:w-[350px] font-outfit mt-[12px] text-[24px] font-medium w-100 `}
        >
          {title}
        </h1>
        <p className="mt-[10px] text-[#40424D] w-[300px] md:w-[350px] truncate">
          {description}
        </p>

        {/* <div className="absolute inset-0">
          <div className="absolute -bottom-1 z-20 w-full h-[25px] bg-white  rounded-tl-[52px] rounded-tr-full"></div>
        </div> */}

        {/* Pseudo-element for Negative Border Radius */}
        {/* <div className="absolute bottom-0 right-0 w-[52px] h-[52px] bg-themeBgColor rounded-tl-[52px]"></div> */}
      </div>
    </div>
  );
};

export default BlogCard;
