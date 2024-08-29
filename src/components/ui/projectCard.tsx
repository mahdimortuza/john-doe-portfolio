import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { beVietnamPro } from "./fonts";

export type TProject = {
  _id: string;
  image: string;
  title: string;
  category: string;
  link: string;
};

const ProjectCard = ({ image, title, link }: TProject) => {
  return (
    <div className="group cursor-pointer relative w-[312px] h-[348px] lg:w-[400px] lg:h-[446px] overflow-hidden rounded-[18px] shadow-lg">
      <div className="absolute inset-0 transform transition-transform duration-500 group-hover:scale-105">
        <Image src={image} alt="bg-img" fill={true} className="object-cover" />
      </div>

      <div className="project-inverted-corner"></div>

      <span
        className={`${beVietnamPro.className} title-bg font-vietnam  rounded-br-[20px] font-medium text-[27px] pl-[5px] py-[12px] pb-[19px] pr-[20px] pt-[5px] relative z-10 bg-themeBgColor capitalize items-center`}
        style={{
          boxShadow: "inset -5px 0 10px -2px rgba(0, 0, 0, 0.1)",
        }}
      >
        {title}
      </span>

      {/* project link button  */}
      <div className="project-inverted-corner-bottom"></div>

      <div className="absolute z-10 bottom-0 right-0 bg-white rounded-tl-[30px] p-[10px]">
        <a href={link} target="_blank">
          <ArrowUpRight className="bg-black p-[6px] rounded-full text-white w-[40px] h-[40px] md:w-[38px] md:h-[38px] group-hover:rotate-45 group-hover:bg-themeBlue transform transition-transform duration-100" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
