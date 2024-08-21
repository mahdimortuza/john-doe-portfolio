import AboutSection from "@/components/pageSections/HomePage/AboutSection";
import BlogsSection from "@/components/pageSections/HomePage/BlogsSection";
import ClientSection from "@/components/pageSections/HomePage/ClientSection";
import ContactSection from "@/components/pageSections/HomePage/ContactSection";
import HeroSection from "@/components/pageSections/HomePage/HeroSection";
import NewsletterSection from "@/components/pageSections/HomePage/NewsletterSection";
import ProjectsSection from "@/components/pageSections/HomePage/ProjectsSection";
import TestimonialSection from "@/components/pageSections/HomePage/TestimonialSection";

export default function Home() {
  return (
    <div>
      {/* <TestSection /> */}
      <HeroSection />
      <AboutSection />
      <ClientSection />
      {/* <ServicesSection /> */}
      <ProjectsSection />
      {/* <TestSection /> */}

      <TestimonialSection />
      <ContactSection />
      <BlogsSection />
      <NewsletterSection />
    </div>
  );
}
