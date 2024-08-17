import Container from "@/components/Container";
import AboutSection from "@/components/pageSections/HomePage/AboutSection";
import ClientSection from "@/components/pageSections/HomePage/ClientSection";
import HeroSection from "@/components/pageSections/HomePage/HeroSection";
import ProjectsSection from "@/components/pageSections/HomePage/ProjectsSection";
import ServicesSection from "@/components/pageSections/HomePage/ServicesSection";
import TestimonialSection from "@/components/pageSections/HomePage/TestimonialSection";

export default function Home() {
  return (
    <Container>
      <HeroSection />
      <AboutSection />
      <ClientSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialSection />
    </Container>
  );
}
