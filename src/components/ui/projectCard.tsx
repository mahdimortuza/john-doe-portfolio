import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { beVietnamPro } from "./fonts";

export type TProject = {
  _id: string;
  image: string;
  title: string;
  category: string;
};

const ProjectCard = ({ _id, image, title, category }: TProject) => {
  return (
    <div className="relative w-[312px] h-[348px] lg:w-[400px] lg:h-[446px] overflow-hidden rounded-[18px] shadow-lg">
      <div className="absolute inset-0 transform transition-transform duration-500 hover:scale-105">
        <Image src={image} alt="bg-img" fill={true} className="object-cover" />
      </div>
      <span
        className={`${beVietnamPro.className} title-bg font-vietnam -top-1 rounded-br-[20px] text-[26px] pl-[5px] pb-[24px] pr-[40px] relative z-10 bg-themeBgColor capitalize`}
        style={{
          boxShadow: "inset -5px 0 10px -2px rgba(0, 0, 0, 0.3)",
        }}
      >
        {title}
      </span>

      {/* project link button  */}
      <div className="absolute z-10 bottom-0 right-0 bg-white rounded-tl-[30px] p-[15px]">
        <Link href={_id}>
          <ArrowUpRight className="bg-black p-[6px] rounded-full text-white w-[40px] h-[40px] md:w-[38px] md:h-[38px]" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
