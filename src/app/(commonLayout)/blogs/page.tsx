import Container from "@/components/Container";
import BlogPageTitle from "@/components/pageSections/BlogPage/blogPageTitle";
import NewsletterSection from "@/components/pageSections/HomePage/NewsletterSection";

const BlogsPage = () => {
  return (
    <div>
      <Container className={`lg:mt-[100px]`}>
        <BlogPageTitle />
      </Container>
      <NewsletterSection />
    </div>
  );
};

export default BlogsPage;
