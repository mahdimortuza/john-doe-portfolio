import { beVietnamPro, dmSans } from "@/components/ui/fonts";

const BlogPageTitle = () => {
  return (
    <div className=" pt-[80px]">
      <h3
        className={`${beVietnamPro.className} font-vietnam text-[14px] md:text-[20px] font-medium capitalize text-themeBlue`}
      >
        blogs
      </h3>
      <h1
        className={`${beVietnamPro.className} mt-[4px] lg:mt-[10px] font-vietnam font-semibold text-themeBlack text-[28px] md:text-[54px] w-[15ch] md:w-[25ch]`}
      >
        Explore our latest insights and industry trends
      </h1>
      <p
        className={`${dmSans.className} mt-[0px] lg:mt-[15px] font-dmSans text-themeGray text-[14px] md:text-[18px] font-normal leading-[150%] lg:w-[60ch]`}
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomis
      </p>
    </div>
  );
};

export default BlogPageTitle;
