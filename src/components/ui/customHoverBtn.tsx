"use client";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";
import { Button } from "./button";

const CustomHoverBtn = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link to="contact" smooth={true} spy={true}>
      <Button className="flex gap-[10px] md:gap-[16px] bg-themeBlue pl-[20px] md:pl-[30px] pr-[6px] py-[18px] md:py-[24px] text-white text-[14px] md:text-[18px] font-medium leading-[133%] rounded-full hover:bg-black">
        <span>Start A Project</span>
        <ArrowUpRight className="bg-white p-[6px] rounded-full text-themeBlue w-[30px] h-[30px] md:w-[38px] md:h-[38px]" />
      </Button>
    </Link>
  );
};

export default CustomHoverBtn;

// <Button
//       className="flex gap-[10px] md:gap-[16px] bg-themeBlue pl-[20px] md:pl-[30px] pr-[6px] py-[18px] md:py-[24px] text-white text-[14px] md:text-[18px] font-medium leading-[133%] rounded-full hover:bg-black"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <span>{hovered ? "Hire Me Now" : "Start A Project"}</span>
//       <ArrowUpRight className="bg-white p-[6px] rounded-full text-themeBlue w-[30px] h-[30px] md:w-[38px] md:h-[38px]" />
//     </Button>
