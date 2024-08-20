"use client";
import assets from "@/assets";
import Container from "@/components/Container";
import { beVietnamPro } from "@/components/ui/fonts";
import SectionTitle from "@/components/ui/sectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    _id: "1",
    title: "saaS landing page",
    category: "Landing Page",
    image: assets.projectsImages.sassLandingPage,
  },
  {
    _id: "2",
    title: "education platform",
    category: "Web Design",
    image: assets.projectsImages.eduCationPlatform,
  },
  {
    _id: "3",
    title: "litigation mobile app",
    category: "App Design",
    image: assets.projectsImages.mobileApp,
  },
  {
    _id: "4",
    title: "furniture landing page",
    category: "Landing Page",
    image: assets.projectsImages.furnitureLandingPage,
  },
  {
    _id: "5",
    title: "dog walking app",
    category: "Mobile App",
    image: assets.projectsImages.dogWalkingApp,
  },
  {
    _id: "6",
    title: "coffee landing page",
    category: "Landing Page",
    image: assets.projectsImages.coffeeLandingPage,
  },
  {
    _id: "7",
    title: "dashboard design",
    category: "Dashboard",
    image: assets.projectsImages.dashboard1,
  },
  {
    _id: "8",
    title: "dashboard design",
    category: "Dashboard",
    image: assets.projectsImages.dashboard2,
  },
  {
    _id: "9",
    title: "coffee landing page",
    category: "Web Design",
    image: assets.projectsImages.webDesign,
  },
  {
    _id: "10",
    title: "coffee landing page",
    category: "Web Design",
    image: assets.projectsImages.sassLandingPage,
  },
  {
    _id: "11",
    title: "sass landing page",
    category: "All",
    image: assets.projectsImages.sassLandingPage,
  },
  {
    _id: "12",
    title: "education platform",
    category: "All",
    image: assets.projectsImages.eduCationPlatform,
  },
  {
    _id: "13",
    title: "litigation mobile app",
    category: "All",
    image: assets.projectsImages.mobileApp,
  },
  {
    _id: "14",
    title: "furniture landing page",
    category: "All",
    image: assets.projectsImages.furnitureLandingPage,
  },
  {
    _id: "15",
    title: "dog walking app",
    category: "All",
    image: assets.projectsImages.dogWalkingApp,
  },
  {
    _id: "16",
    title: "coffee landing page",
    category: "All",
    image: assets.projectsImages.coffeeLandingPage,
  },
];

const categories = [
  {
    name: "All",
    value: "All",
  },
  {
    name: "Landing Page",
    value: "Landing Page",
  },
  {
    name: "Web Design",
    value: "Web Design",
  },
  {
    name: "Dashboard",
    value: "Dashboard",
  },
  {
    name: "App Design",
    value: "App Design",
  },
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="bg-themeBgColor">
      <Container className="my-[60px] md:py-[100px]">
        <SectionTitle title="Projects" subTitle="digital product showcase" />

        <Tabs
          defaultValue="All"
          className="flex flex-col items-center gap-[90px] mt-[16px]"
        >
          {/* Tab buttons */}
          <TabsList>
            {categories.map((item) => (
              <TabsTrigger
                key={item.name}
                value={item.value}
                className="rounded-full text-black  border-[1px] ml-[8px] md:ml-[16px] border-themeGray text-[12px] md:text-[18px] font-normal capitalize px-[16px] py-[7px] md:px-[26px] md:py-[10px]"
              >
                {item.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab contents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-[36px] gap-y-[40px] lg:gap-y-[90px]">
            {products.map((items) => (
              <TabsContent key={items._id} value={items.category} className="">
                <div className="relative w-[312px] h-[348px] lg:w-[400px] lg:h-[446px] overflow-hidden rounded-[18px] shadow-lg">
                  <div className="absolute inset-0 transform transition-transform duration-500 hover:scale-105">
                    <Image
                      src={items.image}
                      alt="bg-img"
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                  <h1
                    className={`${beVietnamPro.className} font-vietnam text-[26px] pb-[24px] pr-[40px] relative z-10 bg-themeBgColor w-[320px]`}
                  >
                    {items.title}
                  </h1>

                  {/* project link button  */}
                  <div className=" absolute z-10 bottom-0 right-0 bg-white p-[8px]">
                    <Link href={items._id}>
                      <ArrowUpRight className="bg-black p-[6px] rounded-full text-white w-[30px] h-[30px] md:w-[38px] md:h-[38px]" />
                    </Link>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </Container>
    </div>
  );
};

export default ProjectsSection;
