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
      "20 essential tips for creating impactful and user-friendly UI designs...",
    image: assets.blogImages.image1,
    date: "05/08/2024",
  },
  {
    _id: 2,
    title: "Top UI/UX Design Trends to Watch in 2024",
    description: "15 the latest trends shaping UI/UX design in 2024....",
    image: assets.blogImages.image2,
    date: "05/08/2024",
  },
  {
    _id: 3,
    title: "Charta Development Journey: From Beginner to Expert",
    description:
      "Guide to mastering web development from beginner to expert level.....",
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
    <div id="blogs" className="">
      <Container className="py-[100px]">
        <SectionTitle
          title="blogs"
          subTitle="latest blogs and articles"
          description="Explore insights and trends in UI/UX design and web development through our latest blogs and articles."
        />

        {/* blog posts  */}

        <div className="mt-[45px] lg:mt-[80px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center">
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
            href="/"
            className={`${beVietnamPro.className} font-vietnam text-[#1A1A1A] text-[18px] font-normal flex gap-[10px] items-center justify-center w-[140px]`}
          >
            <span>View Blogs</span>
            <MoveRight />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default BlogsSection;
