"use client";
import Image from "next/image";
import Slider from "react-slick";
// import { ENUMS } from "@/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SlidersWrapper, SliderImageContainer, SliderImage } from "./styles";

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 100,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const Sliderr = () => {
  return (
    <SlidersWrapper>
      <Slider {...settings}>
        {[
          "ReactJs",
          "ReduxJs",
          "Nextjs",
          "NodeJs",
          "NestJs",
          "ExpressJs",
          "MongoDB",
          "MySql",
          "Redis",
          "Mongoose",
          "Prisma",
          "Docker",
          "Kubernetes",
        ].map((item, index) => (
          <SliderImageContainer key={index}>{item}</SliderImageContainer>
        ))}
      </Slider>
    </SlidersWrapper>
  );
};

export default Sliderr;
