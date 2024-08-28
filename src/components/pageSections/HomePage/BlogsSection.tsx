import assets from "@/assets";
import Container from "@/components/Container";
import BlogCard from "@/components/ui/blogCard";
import { beVietnamPro } from "@/components/ui/fonts";
import SectionTitle from "@/components/ui/sectionTitle";
import { Separator } from "@/components/ui/separator";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    _id: 1,
    title: "Expert Tips for Creating Stunning User Interfaces",
    description:
      "A well-designed user interface (UI) is crucial for delivering a seamless and enjoyable user experience. Whether you're building a website, mobile app, or software application, the UI is often the first thing users interact with, setting the tone for their entire experience. In this article, we'll explore the key principles and best practices for creating stunning user interfaces that not only look great but also function efficiently. A well-designed user interface (UI) is crucial for delivering a seamless and enjoyable user experience. Whether you're building a website, mobile app, or software application, the UI is often the first thing users interact with, setting the tone for their entire experience. In this article, we'll explore the key principles and best practices for creating stunning user interfaces that not only look great but also function efficiently. A well-designed user interface (UI) is crucial for delivering a seamless and enjoyable user experience. Whether you're building a website, mobile app, or software application, the UI is often the first thing users interact with, setting the tone for their entire experience. In this article, we'll explore the key principles and best practices for creating stunning user interfaces that not only look great but also function efficiently. A well-designed user interface (UI) is crucial for delivering a seamless and enjoyable user experience. Whether you're building a website, mobile app, or software application, the UI is often the first thing users interact with, setting the tone for their entire experience. In this article, we'll explore the key principles and best practices for creating stunning user interfaces that not only look great but also function efficiently.",
    image: assets.blogImages.image1,
    date: "05/08/2024",
  },
  {
    _id: 2,
    title: "Top UI/UX Design Trends to Watch in 2024",
    description:
      "As we move further into 2024, the world of UI/UX design continues to evolve rapidly. Staying ahead of the curve is essential for designers looking to create cutting-edge interfaces and exceptional user experiences. Here are the top UI/UX design trends to watch in 2024.",
    image: assets.blogImages.image2,
    date: "05/08/2024",
  },
  {
    _id: 3,
    title: "Charta Development Journey: From Beginner to Expert",
    description:
      "Web development is a dynamic and rewarding field, offering endless opportunities for creativity and innovation. Whether you're just starting or looking to refine your skills, this guide will walk you through the journey from a beginner to an expert web developer.",
    image: assets.blogImages.image3,
    date: "05/08/2024",
  },
  {
    _id: 4,
    title: "Expert Tips for Creating Stunning User Interfaces",
    description:
      "20 essential tips for creating impactful and user-friendly UI designs...",
    image: assets.blogImages.image1,
    date: "05/08/2024",
  },
  {
    _id: 5,
    title: "Top UI/UX Design Trends to Watch in 2024",
    description: "15 the latest trends shaping UI/UX design in 2024....",
    image: assets.blogImages.image2,
    date: "05/08/2024",
  },
  {
    _id: 6,
    title: "Charta Development Journey: From Beginner to Expert",
    description:
      "Guide to mastering web development from beginner to expert level.....",
    image: assets.blogImages.image3,
    date: "05/08/2024",
  },
];

const BlogsSection = () => {
  return (
    <div className="py-[60px] md:py-[100px]">
      <Container className="">
        <div id="blogs">
          <SectionTitle
            title="blogs"
            subTitle="latest blogs and articles"
            description="Explore insights and trends in UI/UX design and web development through our latest blogs and articles."
          />

          {/* Blog posts */}
          <div className="mt-[45px] lg:mt-[80px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[20px] gap-y-[40px] justify-items-center">
            {blogs.slice(0, 3).map((item) => (
              <BlogCard
                key={item._id}
                _id={item._id}
                title={item.title}
                description={item.description}
                image={item.image}
                date={item.date}
              />
            ))}
          </div>

          <Separator className="mt-[68px]" />
          <div className="flex justify-end mt-[15px]">
            <Link
              href="/blogs"
              className={`${beVietnamPro.className} font-vietnam text-[#1A1A1A] text-[18px] font-normal flex gap-[10px] items-center justify-center w-[140px]`}
            >
              <span>View Blogs</span>
              <MoveRight />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogsSection;
