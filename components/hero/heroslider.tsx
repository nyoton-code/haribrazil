"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { heroSlides } from "@/data/Heroslides";
import SlideContent from "./slidecontent";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      speed={1300}
      loop
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      className="h-screen"
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <SlideContent key={slide.id} slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
