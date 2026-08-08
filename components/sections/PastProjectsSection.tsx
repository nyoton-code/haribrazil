"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

interface ProjectItem {
  src: string;
  category: string;
  title: string;
}

const projects: ProjectItem[] = [
  {
    src: "/images/transformations/result-01.png",
    category: "STYLISTS",
    title: "Not-so-new",
  },
  {
    src: "/images/transformations/result-02.jpg",
    category: "STYLISTS",
    title: "Softening",
  },
  {
    src: "/images/transformations/result-03.jpg",
    category: "STYLISTS",
    title: "Curl Joy",
  },
  {
    src: "/images/transformations/result-05.jpg",
    category: "STYLISTS",
    title: "Round-up",
  },
  {
    src: "/images/transformations/result-06.jpg",
    category: "STYLISTS",
    title: "Gloss Line",
  },
  {
    src: "/images/transformations/result-07.jpg",
    category: "STYLISTS",
    title: "Undone",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function PastProjectsSection() {
  const shouldReduceMotion = useReducedMotion();
  const swiperRef = useRef<SwiperRef | null>(null);

  const slides = useMemo(
    () =>
      projects.map((item, index) => (
        <SwiperSlide
          key={`${item.title}-${index}`}
          className="h-auto! w-[86vw]! sm:w-[380px]! md:w-[430px]!"
        >
          <motion.article
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.05, ease }}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="group relative"
          >
            <Link
              href="#"
              aria-label={`View ${item.title}`}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <div className="relative h-[320px] w-full overflow-hidden sm:h-[380px] md:h-[430px]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 86vw, (max-width: 1200px) 40vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={{ objectPosition: "center center" }}
                />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold leading-tight text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-white/60">
                  {item.category}
                </p>
              </div>
            </Link>
          </motion.article>
        </SwiperSlide>
      )),
    [shouldReduceMotion],
  );

  useEffect(() => {
    const instance = swiperRef.current?.swiper;
    if (!instance?.autoplay) return;
    if (shouldReduceMotion) {
      instance.autoplay.stop();
      return;
    }
    instance.autoplay.start();
  }, [shouldReduceMotion]);

  return (
    <section className="bg-black px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1600px]">
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="mb-10 text-[clamp(2.8rem,7vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-white md:mb-14"
        >
          Our Past Projects
        </motion.h2>

        <div className="overflow-hidden">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            spaceBetween={40}
            speed={6000}
            loop
            allowTouchMove={true}
            freeMode={{ enabled: true, momentum: false }}
            autoplay={
              shouldReduceMotion
                ? false
                : {
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }
            }
            breakpoints={{
              0: { spaceBetween: 20 },
              640: { spaceBetween: 28 },
              768: { spaceBetween: 40 },
            }}
            className="overflow-visible! pb-2 [&_.swiper-wrapper]:transition-timing-function-linear!"
            onTouchStart={() => swiperRef.current?.swiper?.autoplay?.stop()}
            onTouchEnd={() => swiperRef.current?.swiper?.autoplay?.start()}
          >
            {slides}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
