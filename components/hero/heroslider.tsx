"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import { heroSlides } from "@/data/Heroslides";
import SlideContent from "./slidecontent";

import "swiper/css";
import "swiper/css/effect-creative";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectCreative]}
      effect="creative"
      creativeEffect={{
        prev: {
          translate: ["-100%", 0, 0],
          opacity: 0.8,
        },
        next: {
          translate: ["100%", 0, 0],
          opacity: 0.8,
        },
      }}
      speed={1400}
      loop
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      className="h-screen"
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <SlideContent slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
