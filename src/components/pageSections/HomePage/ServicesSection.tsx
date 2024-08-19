import assets from "@/assets";
import Container from "@/components/Container";
import SectionTitle from "@/components/ui/sectionTitle";
import ServiceCard from "@/components/ui/serviceCard";

const services = [
  {
    _id: 1,
    icon: assets.servicesImages.code,
    title: "uI design",
    description:
      "Crafting visually stunning, user-friendly interfaces that captivate and engage users effectively.",
  },
  {
    _id: 2,
    icon: assets.servicesImages.magnifying,
    title: "UX design",
    description:
      "Creating intuitive, seamless experiences that enhance user satisfaction and solve real-world problems efficiently.",
  },
  {
    _id: 3,
    icon: assets.servicesImages.www,
    title: "web development",
    description:
      "Building responsive, high-performance websites that deliver functionality and drive user engagement.",
  },
  {
    _id: 4,
    icon: assets.servicesImages.html,
    title: "HTML",
    description:
      "Building structured, clean HTML code for fast, responsive, and accessible web pages.",
  },
  {
    _id: 5,
    icon: assets.servicesImages.css,
    title: "CSS ",
    description:
      "Stylizing websites with clean, responsive designs for a visually appealing and cohesive user experience.",
  },
  {
    _id: 6,
    icon: assets.servicesImages.pen,
    title: "Prototyping",
    description:
      "Developing interactive prototypes to visualize, test, and refine designs before final implementation for optimal results.",
  },
];

const ServicesSection = () => {
  return (
    <Container className="my-[100px]">
      <div id="services" className="">
        <SectionTitle
          title="services"
          subTitle="Services I Provide"
          description=" Offering tailored UI/UX design and web development to enhance user
        experiences and elevate your digital presence."
        />

        {/* service cards sections  */}
        <div className="py-[48px] md:py-[82px] grid md:grid-cols-2 lg:grid-cols-3 gap-[48px] lg:gap-[70px]">
          {/* single card here  */}

          {services.map((item) => (
            <ServiceCard
              key={item._id}
              _id={item._id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ServicesSection;
