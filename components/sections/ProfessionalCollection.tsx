"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

interface Product {
  src: string;
  category: string;
  title: string;
}

const products: Product[] = [
  {
    src: "/images/products/tanino-shampoo.png",
    category: "TANINO TECHNIQUE",
    title: "HYDRATING SHAMPOO",
  },
  {
    src: "/images/products/tanino-protein.png",
    category: "TANINO TECHNIQUE",
    title: "BRAZILIAN PROTEIN",
  },
  {
    src: "/images/products/caviar-shampoo.jpg",
    category: "BLACK CAVIAR",
    title: "Caviar Shampoo",
  },
  {
    src: "/images/products/caviar-protein.jpg",
    category: "BLACK CAVIAR",
    title: "Caviar Protein",
  },
  // Add more products here as needed.
];

const ease = [0.22, 1, 0.36, 1] as const;

const overlayVariants = {
  rest: { opacity: 0, scale: 0.96 },
  hover: { opacity: 1, scale: 1 },
};

export default function ProfessionalCollection() {
  const shouldReduceMotion = useReducedMotion();
  const [, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section
      id="professional-collection"
      aria-labelledby="professional-collection-heading"
      className="overflow-hidden bg-[#faf9f7] py-12 text-black sm:py-14 md:py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-black/60">
              HAIR BRASIL / COLLECTION PROFESSIONNELLE
            </p>
            <h2
              id="professional-collection-heading"
              className="text-[clamp(2.8rem,5vw,4.8rem)] font-light leading-[0.92] tracking-[-0.03em] text-black"
            >
              <span className="block">LE RITUEL</span>
              <span className="font-serif italic">
                À L’ORIGINE DU RÉSULTAT.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-black/70 sm:text-base">
            Des formules professionnelles pour sublimer les cheveux, au salon
            comme à la maison.
          </p>
        </motion.div>

        <div className="relative">
          {/* Stacked nav arrows, overlaid on the left edge of the slider */}
          <div className="absolute left-0 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2 pl-1 sm:-left-3 md:-left-5">
            <button
              ref={prevRef}
              type="button"
              aria-label="Produit précédent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white/90 text-black shadow-sm backdrop-blur transition-all duration-300 hover:border-black/30 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>
            <button
              ref={nextRef}
              type="button"
              aria-label="Produit suivant"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white/90 text-black shadow-sm backdrop-blur transition-all duration-300 hover:border-black/30 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            onBeforeInit={(swiper: SwiperInstance) => {
              // @ts-expect-error - swiper types expect navigation to already hold these
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error - swiper types expect navigation to already hold these
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            slidesPerView={1}
            spaceBetween={24}
            speed={700}
            loop
            autoplay={
              shouldReduceMotion
                ? false
                : { delay: 5500, disableOnInteraction: false }
            }
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 40 },
            }}
            className="px-1"
          >
            {products.map((item) => (
              <SwiperSlide key={item.title}>
                <motion.article
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  whileFocus="hover"
                  className="group flex flex-col gap-4 border-t border-black/10 pt-4 sm:gap-5 sm:pt-5"
                >
                  <div className="relative flex min-h-80 items-center justify-center overflow-hidden border border-black/10 bg-[#fcfbf8] px-4 py-6 transition-colors duration-500 group-hover:bg-neutral-300/60 sm:min-h-105 sm:px-6 md:min-h-125 md:px-8">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 45vw"
                      className="object-contain transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-30"
                      style={{ objectPosition: "center" }}
                    />

                    {/* Description + discover button pop out centered over the image on hover */}
                    <motion.div
                      variants={overlayVariants}
                      transition={{ duration: 0.4, ease }}
                      className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center group-hover:pointer-events-auto"
                    >
                      {/* <p className="max-w-xs text-sm leading-6 text-black/80">
                        {item.description}
                      </p> */}

                      <Link
                        href={item.category === "BLACK CAVIAR" ? "/caviar" : "/tanino"}
                        className="group/link inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-black transition-colors duration-300 hover:text-black/70"
                      >
                        DÉCOUVRIR LE PRODUIT
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </Link>
                    </motion.div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {/* Name and category always visible */}
                    <h3 className="text-[1.1rem] font-medium uppercase tracking-[0.16em] text-black sm:text-[1.25rem]">
                      {item.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-black/45">
                      {item.category}
                    </p>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* The only button that stays at the end of the section */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="flex justify-end border-t border-black/10 pt-5"
        >
          <Link
            href="#"
            className="group flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.3em] text-black transition-opacity hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf9f6]"
          >
            Voir tous les produits
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
