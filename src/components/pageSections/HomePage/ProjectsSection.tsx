"use client";
import assets from "@/assets";
import Container from "@/components/Container";
import ProjectCard from "@/components/ui/projectCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SectionTitle from "@/components/ui/sectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const products = [
  {
    _id: "1",
    title: "sass landing page",
    category: "Landing Page",
    image: assets.projectsImages.sassLandingPage,
    link: "https://www.google.com",
  },
  {
    _id: "2",
    title: "education platform",
    category: "Web Design",
    image: assets.projectsImages.eduCationPlatform,
    link: "https://www.google.com",
  },
  {
    _id: "3",
    title: "litigation app",
    category: "App Design",
    image: assets.projectsImages.mobileApp,
    link: "https://www.google.com",
  },
  {
    _id: "4",
    title: "furniture website",
    category: "Landing Page",
    image: assets.projectsImages.furnitureLandingPage,
    link: "https://www.google.com",
  },
  {
    _id: "5",
    title: "dog walking app",
    category: "Mobile App",
    image: assets.projectsImages.dogWalkingApp,
    link: "https://www.google.com",
  },
  {
    _id: "6",
    title: "coffee landing page",
    category: "Landing Page",
    image: assets.projectsImages.coffeeLandingPage,
    link: "https://www.google.com",
  },
  {
    _id: "7",
    title: "dashboard design",
    category: "Dashboard",
    image: assets.projectsImages.dashboard1,
    link: "https://www.google.com",
  },
  {
    _id: "8",
    title: "dashboard design",
    category: "Dashboard",
    image: assets.projectsImages.dashboard2,
    link: "https://www.google.com",
  },
  {
    _id: "9",
    title: "coffee landing page",
    category: "Web Design",
    image: assets.projectsImages.webDesign,
    link: "https://www.google.com",
  },
  {
    _id: "10",
    title: "coffee landing page",
    category: "Web Design",
    image: assets.projectsImages.sassLandingPage,
    link: "https://www.google.com",
  },
  {
    _id: "11",
    title: "sass landing page",
    category: "All",
    image: assets.projectsImages.sassLandingPage,
    link: "https://www.google.com",
  },
  {
    _id: "12",
    title: "education platform",
    category: "All",
    image: assets.projectsImages.eduCationPlatform,
    link: "https://www.google.com",
  },
  {
    _id: "13",
    title: "litigation mobile",
    category: "All",
    image: assets.projectsImages.mobileApp,
    link: "https://www.google.com",
  },
  {
    _id: "14",
    title: "furniture website",
    category: "All",
    image: assets.projectsImages.furnitureLandingPage,
    link: "https://www.google.com",
  },
  {
    _id: "15",
    title: "dog walking app",
    category: "All",
    image: assets.projectsImages.dogWalkingApp,
    link: "https://www.google.com",
  },
  {
    _id: "16",
    title: "coffee landing page",
    category: "All",
    image: assets.projectsImages.coffeeLandingPage,
    link: "https://www.google.com",
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
    <div className="bg-themeBgColor py-[60px] md:py-[100px]">
      <Container className="">
        <div id="projects">
          <SectionTitle title="Projects" subTitle="digital product showcase" />

          <Tabs
            defaultValue="All"
            className="flex flex-col items-center w-full gap-[10px] md:gap-[50px] mt-[10px] md:mt-[16px]"
          >
            <TabsList className=" ">
              <ScrollArea className="w-[360px] md:w-full whitespace-nowrap rounded-md ">
                {categories.map((item) => (
                  <TabsTrigger
                    key={item.name}
                    value={item.value}
                    className="rounded-full text-black border-[1px] mx-[4px] md:mx-[8px] border-themeGray text-[12px] md:text-[18px] font-normal capitalize px-[16px] py-[7px] md:px-[26px] md:py-[10px] whitespace-nowrap"
                  >
                    {item.name}
                  </TabsTrigger>
                ))}
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </TabsList>

            <div className="grid grid-cols-1 mt-[32px] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-[36px] gap-y-[40px] lg:gap-y-[90px] w-full justify-items-center items-center">
              {products.map((item) => (
                <TabsContent key={item._id} value={item.category} className="">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                  >
                    <ProjectCard
                      _id={item._id}
                      category={item.category}
                      image={item.image}
                      title={item.title}
                      link={item.link}
                    />
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsSection;
