"use client";
import Container from "@/components/Container";
import { beVietnamPro, dmSans } from "@/components/ui/fonts";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhone, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";

type TInputs = {
  example: string;
  exampleRequired: string;
};
const ContactSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<TInputs>();
  const onSubmit: SubmitHandler<TInputs> = (data) => console.log(data);

  const [value, setValue] = useState();
  return (
    <div id="contact" className="py-[60px] md:py-[100px] bg-themeBgColor">
      <Container className=" ">
        <div className=" flex flex-col xl:flex-row gap-[40px] items-center justify-center xl:gap-0">
          {/* left side contents here */}
          <div className="mt-[0px]">
            <h3
              className={`${beVietnamPro.className} font-vietnam text-[14px] md:text-[20px] font-medium capitalize text-themeBlue`}
            >
              contact
            </h3>
            <h1
              className={`${beVietnamPro.className} mt-[9px] font-vietnam font-semibold capitalize text-themeBlack text-[28px] md:text-[45px] w-[18ch] md:w-[20ch]`}
            >
              Want to Make Something Amazing?
            </h1>
            <p
              className={`${dmSans.className} mt-[8px] md:mt-[18px] font-dmSans text-themeGray text-[14px] md:text-[18px] font-normal leading-[150%] lg:w-[38ch]`}
            >
              Get in touch to discuss your project. I&apos;m here to help bring
              your digital vision to life.
            </p>

            {/* const number and email  */}
            <div className="mt-[30px] md:mt-[54px] flex flex-col gap-[16px] md:gap-[54px]">
              <div className="flex flex-col gap-[14px]">
                <div className="flex gap-[16px]">
                  <FaPhone className="h-[24px] w-[24px] text-black" />
                  <span className="text-[20px] font-medium text-themeGray">
                    +1 (835) 123 456
                  </span>
                </div>

                <div className="flex gap-[16px] text-themeGray">
                  <IoMdMail className="h-[24px] w-[24px] text-black" />
                  <span className="text-[20px] font-medium text-themeGray">
                    hello@johndoe.com
                  </span>
                </div>
              </div>

              {/* social media icons  */}
              <div>
                <h2
                  className={`${beVietnamPro.className} font-vietnam text-[#09090A] capitalize text-[26px] font-semibold`}
                >
                  follow me
                </h2>

                <div className="flex gap-[18px]">
                  <a href="www.facebook.com">
                    <FaFacebookSquare className="h-[24px] w-[24px] text-black hover:text-themeBlue" />
                  </a>

                  <a href="www.instagram.com">
                    <PiInstagramLogoFill className="h-[24px] w-[24px] text-black hover:text-themeBlue" />
                  </a>
                  <a href="www.linkedin.com">
                    <IoLogoLinkedin className="h-[24px] w-[24px] text-black hover:text-themeBlue" />
                  </a>
                  <a href="www.twitter.com">
                    <FaSquareXTwitter className="h-[24px] w-[24px] text-black hover:text-themeBlue" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right side contents here */}
          <div className="bg-white px-[10px] lg:px-[54px] py-[20px] lg:py-[70px] rounded-[15px]">
            <h2
              className={`${beVietnamPro.className} font-vietnam text-[18px] lg:text-[26px] font-semibold capitalize`}
            >
              contact me
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-[24px] lg:mt-[36px] flex flex-col gap-[16px] lg:gap-[22px]"
            >
              <div>
                <h3
                  className={`${beVietnamPro.className} font-vietnam text-[#2E2F33] text-[18px] font-medium capitalize`}
                >
                  Name
                </h3>
                <div className="relative">
                  <IoPersonSharp className="absolute left-3 top-[32px] transform -translate-y-1/2 text-gray-500" />
                  <input
                    placeholder="Name"
                    className={`${dmSans.className} font-dmSans mt-[10px] text-[16px] font-normal px-[18px] py-[10px] pl-[40px] bg-themeBgColor rounded-[8px] w-[350px] md:w-[510px]`}
                    {...register("example")}
                  />
                </div>
              </div>

              <div>
                <h3
                  className={`${beVietnamPro.className} font-vietnam text-[#2E2F33] text-[18px] font-medium capitalize`}
                >
                  Email
                </h3>
                <div className="relative">
                  <IoMdMail className="absolute left-3 top-[32px] transform -translate-y-1/2 text-gray-500" />
                  <input
                    placeholder="Email"
                    className={`${dmSans.className} font-dmSans mt-[10px] text-[16px] font-normal px-[18px] py-[10px] pl-[40px] bg-themeBgColor rounded-[8px] w-[350px] md:w-[510px]`}
                    {...register("example")}
                  />
                </div>
              </div>

              {/* phone number selector  */}
              <div>
                <h3
                  className={`${beVietnamPro.className} font-vietnam text-[#2E2F33] text-[18px] font-medium capitalize`}
                >
                  phone number
                </h3>

                <PhoneInputWithCountry
                  name="phoneInputWithCountrySelect"
                  placeholder="+883 34507-23405"
                  defaultCountry="US"
                  control={control}
                  rules={{ required: true }}
                  className={`${dmSans.className} font-dmSans mt-[10px] text-[16px] font-normal w-[350px] md:w-[510px]`}
                />
              </div>

              <div>
                <h3
                  className={`${beVietnamPro.className} font-vietnam text-[#2E2F33] text-[18px] font-medium capitalize`}
                >
                  Your Message
                </h3>
                <div className="">
                  <textarea
                    placeholder="Type here"
                    className={`${dmSans.className} font-dmSans mt-[10px] text-[16px] font-normal px-[18px] py-[18px]  bg-themeBgColor rounded-[8px] w-[350px] md:w-[510px]`}
                    rows={4}
                    {...register("example")}
                  />
                </div>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className={`${beVietnamPro.className} font-vietnam text-white text-[18px] font-medium bg-themeBlue py-[10px] rounded-[10px] hover:bg-themeBlack transition duration-500`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
