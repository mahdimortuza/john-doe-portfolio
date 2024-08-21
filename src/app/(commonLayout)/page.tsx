import AboutSection from "@/components/pageSections/HomePage/AboutSection";
import ClientSection from "@/components/pageSections/HomePage/ClientSection";
import HeroSection from "@/components/pageSections/HomePage/HeroSection";
import ProjectsSection from "@/components/pageSections/HomePage/ProjectsSection";
import ServicesSection from "@/components/pageSections/HomePage/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ClientSection />
      <ServicesSection />
      <ProjectsSection />
      {/*  <TestimonialSection />
      <ContactSection />
      <BlogsSection />
      <NewsletterSection /> */}
    </main>
  );
}
