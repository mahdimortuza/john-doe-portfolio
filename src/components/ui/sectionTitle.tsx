import { beVietnamPro, dmSans } from "./fonts";

type TTitle = {
  title: string;
  subTitle: string;
  description: string;
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
        className={`${beVietnamPro.className} font-vietnam font-semibold capitalize text-themeBlack text-[28px] md:text-[54px]`}
      >
        {subTitle}
      </h1>
      {description ? (
        <p
          className={`${dmSans.className} font-dmSans text-themeGray text-[14px] md:text-[18px] font-normal leading-[150%] mx-auto lg:w-[58ch] capitalize`}
        >
          {description}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default SectionTitle;
