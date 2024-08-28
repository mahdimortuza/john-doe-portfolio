import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Share2 } from "lucide-react";
import Image from "next/image";
import { beVietnamPro, dmSans, outfit } from "./fonts";

type TBlog = {
  _id: number;
  title: string;
  description: string;
  image: string;
  date: string;
};
const BlogCard = ({ title, description, image, date }: TBlog) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* blog card contents start here. It helps to open the dialog to show blog  */}
        <div className="cursor-pointer relative w-[350px] h-[360px] md:h-[420px] rounded-[26px] md:w-[400px] overflow-hidden shadow-lg group">
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
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-[500px] overflow-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            <Image
              src={image}
              alt={title}
              className="w-[50%] h-auto rounded-md mt-[30px] mx-auto"
            />
            <div
              className={`${beVietnamPro.className} font-vietnam mt-[16px] text-themeGray text-[15px] text-left`}
            >
              {description}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BlogCard;
