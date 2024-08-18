"use client";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";

const CustomHoverBtn = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <Button
      className="flex gap-[16px] bg-themeBlue pl-[30px] pr-[6px] py-[24px] text-white text-[18px] font-medium leading-[133%] rounded-full hover:bg-black"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{hovered ? "Hire Me Now" : "Start A Project"}</span>
      <ArrowUpRight className="bg-white p-[6px] rounded-full text-themeBlue w-[38px] h-[38px]" />
    </Button>
  );
};

export default CustomHoverBtn;
