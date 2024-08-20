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
    <div className="relative w-[312px] md:w-[400px] overflow-hidden rounded-[18px] shadow-lg group">
      {/* Image Container */}
      <div className="relative h-[200px] md:h-[260px] overflow-hidden rounded-t-[18px]">
        <Image
          src={image}
          alt={title}
          fill={true}
          className="object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{date}</span>
          <Share2 />
        </div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800">{title}</h1>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
