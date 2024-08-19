"use client";
import assets from "@/assets";
import Container from "@/components/Container";
import SectionTitle from "@/components/ui/sectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

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

const ProjectsSection = () => {
  return (
    <div id="projects" className="bg-themeBgColor">
      <Container className="my-[60px] md:py-[100px]">
        <SectionTitle title="Projects" subTitle="digital product showcase" />

        <Tabs defaultValue="All">
          {/* Tab buttons */}
          <TabsList>
            <TabsTrigger value="All">ALL</TabsTrigger>
            <TabsTrigger value="Landing Page">Landing Page</TabsTrigger>
            <TabsTrigger value="Web Design">Web Design</TabsTrigger>
            <TabsTrigger value="Dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="App Design">App Design</TabsTrigger>
          </TabsList>

          {/* Tab contents */}
          <div className="grid grid-cols-3 bg-red-500">
            {products.map((items) => (
              <TabsContent key={items._id} value={items.category}>
                <div className="relative">
                  <Image
                    src={items.image}
                    alt="img"
                    width={400}
                    height={400}
                    layout="fit"
                    objectFit="cover"
                  />
                  <h2 className="absolute top-1 bg-white p-2">{items.title}</h2>
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
