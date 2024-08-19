import Container from "@/components/Container";
import SectionTitle from "@/components/ui/sectionTitle";

const ServicesSection = () => {
  return (
    <Container className="my-10">
      <div id="services" className="">
        <SectionTitle
          title="services"
          subTitle="Services I Provide"
          description=" Offering tailored UI/UX design and web development to enhance user
        experiences and elevate your digital presence."
        />
      </div>
    </Container>
  );
};

export default ServicesSection;
