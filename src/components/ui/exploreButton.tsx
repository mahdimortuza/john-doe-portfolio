"use client";
import { Link } from "react-scroll";

const ExploreButton = () => {
  return (
    <Link to="projects" smooth={true} spy={true}>
      <span className="text-[16px] md:text-[18px] font-medium text-themeBlue underline hover:text-black cursor-pointer">
        Explore Projects
      </span>
    </Link>
  );
};

export default ExploreButton;
