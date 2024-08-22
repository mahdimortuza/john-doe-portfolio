import assets from "@/assets";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { beVietnamPro, dmSans } from "@/components/ui/fonts";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className=" bg-themeBgColor">
      <Container className="">
        <div
          id="about"
          className="py-[58px] lg:py-[120px] flex xl:items-end flex-col-reverse items-center lg:flex-row gap-[30px] md:gap-[75px]"
        >
          <div className="relative">
            <Image
              src={assets.aboutImages.profilePicture}
              alt="profile-image"
              className="clip-path-wave w-[380px] h-[240px] md:w-[650px] md:h-[510px] object-cover rounded-[18px]"
            />
          </div>

          {/* right side content  */}
          <div className="flex flex-col gap-0 xl:gap-[26px] relative">
            {/* elegant section header  */}
            <div className="xl:absolute md:-left-[240px] -top-[110px] md:bg-themeBgColor xl:pl-[40px] lg:pb-[15px] lg:rounded-bl-[50px]">
              <h3
                className={`${beVietnamPro.className} font-vietnam text-center md:text-left text-[14px] md:text-[20px] font-medium capitalize text-themeBlue`}
              >
                about
              </h3>

              <h1
                className={`${beVietnamPro.className} mt-[0px] text-center md:text-left font-vietnam font-medium capitalize text-themeBlack text-[24px] md:text-[58px]`}
              >
                7 years of
              </h1>
            </div>

            <h1
              className={`${beVietnamPro.className} font-vietnam text-center md:text-left text-[32px] md:text-[65px] font-medium`}
            >
              Experience
            </h1>
            <p
              className={`${dmSans.className} font-dmSans mt-[8px] md:mt-[0px] text-themeGray text-[14px] md:text-[18px] leading-[150%] text-center md:text-left md:capitalize md:w-[45ch]`}
            >
              With over 7 years of experience, I specialize in crafting UI/UX
              designs and developing websites that are visually compelling,
              user-friendly, and optimized to achieve business goals.
            </p>

            {/* bullet ul elements  */}

            <ul
              className={`${beVietnamPro.className} font-vietnam mt-[16px] lg:mt-[16px] mx-auto md:ml-0 custom-list list-disc pl-5 text-themeGray text-[14px] md:text-[18px] leading-[150%] capitalize`}
            >
              <li className="mt-[0px]">
                Intuitive, user-centered interface design
              </li>
              <li className="mt-[8px]">
                Responsive, high-performance web development
              </li>
              <li className="mt-[8px]">
                Streamlined solutions for complex challenges
              </li>
            </ul>
            <Button
              className={`${beVietnamPro.className} font-vietnam w-[200px] mx-auto mt-[16px] lg::mt-0 lg:ml-0 px-[26px] py-[20px] text-[18px] rounded-full bg-inherit hover:bg-inherit text-themeBlue border-2 border-themeBlue flex gap-[10px] group hover:text-black hover:border-black`}
            >
              <span className="group-hover:text-black">Download CV</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  className="group-hover:fill-black"
                >
                  <g clipPath="url(#clip0_2057_1123)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.3655 3.06342C14.0666 3.06342 13.78 3.18213 13.5687 3.39344C13.3574 3.60474 13.2387 3.89134 13.2387 4.19018V6.4437H6.47813C5.88046 6.4437 5.30727 6.68112 4.88465 7.10374C4.46203 7.52636 4.22461 8.09955 4.22461 8.69722V23.3451C4.22461 23.9428 4.46203 24.516 4.88465 24.9386C5.30727 25.3612 5.88046 25.5986 6.47813 25.5986H22.2528C22.8505 25.5986 23.4236 25.3612 23.8463 24.9386C24.2689 24.516 24.5063 23.9428 24.5063 23.3451V8.69722C24.5063 8.09955 24.2689 7.52636 23.8463 7.10374C23.4236 6.68112 22.8505 6.4437 22.2528 6.4437H15.4922V4.19018C15.4922 3.89134 15.3735 3.60474 15.1622 3.39344C14.9509 3.18213 14.6643 3.06342 14.3655 3.06342ZM15.4922 6.4437V16.3907L17.5519 14.331C17.7632 14.1196 18.0498 14.0008 18.3487 14.0007C18.6476 14.0005 18.9343 14.1192 19.1457 14.3305C19.3572 14.5417 19.476 14.8283 19.4761 15.1272C19.4762 15.4261 19.3576 15.7128 19.1463 15.9243L15.3604 19.7091C15.0963 19.9729 14.7382 20.1211 14.3649 20.1211C13.9916 20.1211 13.6335 19.9729 13.3694 19.7091L9.58461 15.9243C9.48 15.8196 9.39703 15.6953 9.34044 15.5586C9.28385 15.4218 9.25475 15.2752 9.2548 15.1272C9.25486 14.9792 9.28406 14.8327 9.34074 14.696C9.39743 14.5593 9.48049 14.4351 9.58517 14.3305C9.68986 14.2258 9.81413 14.1429 9.95088 14.0863C10.0876 14.0297 10.2342 14.0006 10.3822 14.0007C10.5302 14.0007 10.6767 14.0299 10.8134 14.0866C10.9502 14.1433 11.0744 14.2263 11.179 14.331L13.2387 16.3907V6.4437H15.4922Z"
                      className="fill-[#4A6CFF] group-hover:fill-black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2057_1123">
                      <rect
                        width="27.0423"
                        height="27.0423"
                        fill="white"
                        transform="translate(0.84375 0.809875)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
