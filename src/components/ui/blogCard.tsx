import Image from "next/image";

type TBlog = {
  _id: number;
  title: string;
  description: string;
  image: string;
  date: string;
};
const BlogCard = ({ _id, title, description, image, date }: TBlog) => {
  return (
    <div>
      <Image src={image} alt={title} className="h-[260px] w-[400px]" />
      <span>{date}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default BlogCard;
