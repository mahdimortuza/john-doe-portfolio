import { Share2 } from "lucide-react";
import Image from "next/image";

type TBlog = {
  _id: number;
  title: string;
  description: string;
  image: string;
  date: string;
};
const BlogCard = ({ _id, title, description, image, date }: TBlog) => {
  return (
    <div className="relative w-[312px] rounded-[26px] md:w-[400px] overflow-hidden shadow-lg group">
      {/* Image Container */}
      <div className="relative h-[200px] md:h-[260px] overflow-hidden rounded-bl-[26px] rounded-t-[18px]">
        <Image
          src={image}
          alt={title}
          fill={true}
          className="object-cover transform transition-transform rounded-t-[26px] rounded-bl-[26px] duration-500 ease-in-out group-hover:scale-105"
        />

        <div className="absolute inset-0">
          <div className="absolute -bottom-1 z-20 w-full h-[25px] bg-white  rounded-tl-[52px] rounded-tr-full"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="p-4 rounded-tr-[26px] relative">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{date}</span>
          <Share2 />
        </div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800">{title}</h1>
        <p className="mt-1 text-gray-600">{description}</p>

        {/* Pseudo-element for Negative Border Radius */}
        {/* <div className="absolute bottom-0 right-0 w-[52px] h-[52px] bg-themeBgColor rounded-tl-[52px]"></div> */}
      </div>
    </div>
  );
};

export default BlogCard;
