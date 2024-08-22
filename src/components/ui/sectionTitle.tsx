import { beVietnamPro, dmSans } from "./fonts";

type TTitle = {
  title: string;
  subTitle?: string;
  description?: string;
};

const SectionTitle = ({ title, subTitle, description }: TTitle) => {
  return (
    <div className="text-center">
      <h3
        className={`${beVietnamPro.className} font-vietnam text-[14px] md:text-[20px] font-medium capitalize text-themeBlue`}
      >
        {title}
      </h3>
      <h1
        className={`${beVietnamPro.className} mt-[4px] lg:mt-[10px] font-vietnam font-semibold capitalize text-themeBlack text-[28px] md:text-[54px] w-[15ch] md:w-[20ch] mx-auto`}
      >
        {subTitle}
      </h1>
      {description && (
        <p
          className={`${dmSans.className} mt-[0px] lg:mt-[15px] font-dmSans text-themeGray text-[14px] md:text-[18px] font-normal leading-[150%] mx-auto lg:w-[58ch] capitalize`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
