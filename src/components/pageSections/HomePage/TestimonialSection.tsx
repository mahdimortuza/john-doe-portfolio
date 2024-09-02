"use client";
import assets from "@/assets";
import Container from "@/components/Container";
import SectionTitle from "@/components/ui/sectionTitle";
import SliderItem from "@/components/ui/sliderItem";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const reviews = [
  {
    _id: "1",
    title: "John Smith",
    position: "Manager",
    image: assets.reviewImages.image1,
    description:
      "Working with him was a game-changer for our project. Their exceptional UI/UX design skills and attention to detail brought our vision to life. The final product exceeded our expectations, delivering both aesthetics and functionality.",
    rating: 5,
  },
  {
    _id: "2",
    title: "Smith Doe",
    position: "CEO",
    image: assets.reviewImages.image2,
    description:
      "Working with him was a game-changer for our project. Their exceptional UI/UX design skills and attention to detail brought our vision to life. The final product exceeded our expectations, delivering both aesthetics and functionality.",
    rating: 5,
  },
  {
    _id: "3",
    title: "Mark Tony",
    position: "Manager",
    image: assets.reviewImages.image3,
    description:
      "Working with him was a game-changer for our project. Their exceptional UI/UX design skills and attention to detail brought our vision to life. The final product exceeded our expectations, delivering both aesthetics and functionality.",
    rating: 5,
  },
  {
    _id: "4",
    title: "David Smith",
    position: "CTO",
    image: assets.reviewImages.image4,
    description:
      "Working with him was a game-changer for our project. Their exceptional UI/UX design skills and attention to detail brought our vision to life. The final product exceeded our expectations, delivering both aesthetics and functionality.",
    rating: 4.5,
  },
  {
    _id: "5",
    title: "Mari Doe",
    position: "HR",
    image: assets.reviewImages.image5,
    description:
      "Working with him was a game-changer for our project. Their exceptional UI/UX design skills and attention to detail brought our vision to life. The final product exceeded our expectations, delivering both aesthetics and functionality.",
    rating: 5,
  },
  {
    _id: "6",
    title: "John Doe",
    position: "CEO",
    image: assets.reviewImages.image6,
    description:
      "Working with him was a game-changer for our project. Their exceptional UI/UX design skills and attention to detail brought our vision to life. The final product exceeded our expectations, delivering both aesthetics and functionality.",
    rating: 4,
  },
];

const TestimonialSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Container className="py-[60px] md:py-[100px]">
      <SectionTitle title="Testimonial" subTitle="What My Customers Say" />

      <div className="w-full xl:w-[1000px] mx-auto mt-[0px] relative">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {reviews.map((item) => (
              <div className="embla__slide" key={item._id}>
                <SliderItem
                  _id={item._id}
                  title={item.title}
                  position={item.position}
                  image={item.image}
                  description={item.description}
                  rating={item.rating}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            className="embla__prev hidden absolute top-[50%] -left-[50px] xl:flex justify-center items-center h-10 w-10 rounded-full bg-black text-white hover:text-white hover:bg-themeBlue"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="embla__next hidden absolute top-[50%] -right-[50px] z-20 xl:flex justify-center items-center h-10 w-10 rounded-full bg-black text-white hover:text-white hover:bg-themeBlue"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="embla__dots flex justify-center mx-auto space-x-2 mt-[32px]">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`${
                index === selectedIndex ? "text-themeBlue" : "text-[#DAE1FF]"
              }`}
              onClick={() => scrollTo(index)}
            >
              <div
                className={`${
                  index === selectedIndex
                    ? "w-[24px] h-[8px] bg-themeBlue"
                    : "w-[8px] h-[8px] bg-[#DAE1FF]"
                } rounded-full transition-all duration-700 ease-in-out`}
              >
                <Dot className="w-full h-full" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TestimonialSection;
