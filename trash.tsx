import assets from "@/assets";
import { CarouselPrevious } from "@/components/ui/carousel";

const reviews = [
  {
    _id: 1,
    title: "john smith",
    position: "Manager",
    image: assets.reviewImages.image1,
    description:
      "Working with him was a game-changer for our project. Their exceptional UI/UX design skills and attention to detail brought our vision to life. The final product exceeded our expectations, delivering both aesthetics and functionality.",
    rating: 5,
  },
  {
    _id: 2,
    title: "Smith doe",
    position: "CEO",
    image: assets.reviewImages.image2,
    description:
      "Working with him was a game-changer for our project. Their exceptional UI/UX design skills and attention to detail brought our vision to life. The final product exceeded our expectations, delivering both aesthetics and functionality.",
    rating: 5,
  },
  {
    _id: 3,
    title: "mark tony",
    position: "Manager",
    image: assets.reviewImages.image3,
    description:
      "Working with him was a game-changer for our project. Their exceptional UI/UX design skills and attention to detail brought our vision to life. The final product exceeded our expectations, delivering both aesthetics and functionality.",
    rating: 5,
  },
  {
    _id: 4,
    title: "david smith",
    position: "CTO",
    image: assets.reviewImages.image4,
    description:
      "Working with him was a game-changer for our project. Their exceptional UI/UX design skills and attention to detail brought our vision to life. The final product exceeded our expectations, delivering both aesthetics and functionality.",
    rating: 4.5,
  },
  {
    _id: 4,
    title: "mari doe",
    position: "HR",
    image: assets.reviewImages.image5,
    description:
      "Working with him was a game-changer for our project. Their exceptional UI/UX design skills and attention to detail brought our vision to life. The final product exceeded our expectations, delivering both aesthetics and functionality.",
    rating: 5,
  },
  {
    _id: 6,
    title: "John doe",
    position: "ceo",
    image: assets.reviewImages.image6,
    description:
      "Working with him was a game-changer for our project. Their exceptional UI/UX design skills and attention to detail brought our vision to life. The final product exceeded our expectations, delivering both aesthetics and functionality.",
    rating: 4,
  },
];

const TestimonialSection = () => {
  return (
    <Container className="py-[60px] md:py-[100px]">
      <SectionTitle title="testimonial" subTitle="what my customer says" />

      {/* slider starts here  */}
      {/* [738px] */}
      <div className="w-full xl:w-[1000px] mx-auto mt-[0px]">
        <Carousel className="" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {reviews.map((item) => (
              <CarouselItem key={item._id}>
                <SliderItem
                  _id={item._id}
                  title={item.title}
                  position={item.position}
                  image={item.image}
                  description={item.description}
                  rating={item.rating}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Container>
  );
};

export default TestimonialSection;
