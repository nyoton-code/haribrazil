"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TransformationItem {
  type: "image" | "video";
  src: string;
  category: string;
  title: string;
  aspect?: string;
  priority?: boolean;
}

const transformations: TransformationItem[] = [
  {
    type: "image",
    src: "/images/transformations/result-01.png",
    category: "COLOR",
    title: "Signature transformation",
    aspect: "aspect-[3/4]",
    priority: true,
  },
  {
    type: "image",
    src: "/images/transformations/result-05.jpg",
    category: "TRANSFORMATION",
    title: "Luxury finish",
    aspect: "aspect-[3/5]",
  },
  {
    type: "image",
    src: "/images/transformations/result-04.png",
    category: "PROFESSIONAL WORK",
    title: "Stylist detail",
    aspect: "aspect-[4/5]",
  },
  {
    type: "video",
    src: "/images/transformations/transformation-01.mp4",
    category: "TRANSFORMATION",
    title: "Motion result",
    aspect: "aspect-[9/16]",
  },
  {
    type: "image",
    src: "/images/transformations/salon-01.png",
    category: "SALON",
    title: "Studio atmosphere",
    aspect: "aspect-[1/1]",
  },
  {
    type: "image",
    src: "/images/transformations/result-03.jpg",
    category: "TREATMENT",
    title: "Refined finish",
    aspect: "aspect-[3/4]",
  },
  //   {
  //     type: "image",
  //     src: "/images/transformations/result-05.png",
  //     category: "COLOR",
  //     title: "Editorial result",
  //     aspect: "aspect-[4/5]",
  //   },
];

export default function TransformationsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="overflow-hidden bg-[#f7f4ee] py-16 text-black md:py-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:px-8 lg:px-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-black/55">
              HAIR BRASIL / SIGNATURE RESULTS
            </p>
            <h2
              id="results-heading"
              className="text-4xl font-light leading-[0.9] tracking-[-0.03em] text-black sm:text-5xl lg:text-6xl"
            >
              THE RESULT
              <br />
              <span className="font-serif italic">SPEAKS FOR ITSELF.</span>
            </h2>
          </div>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-md text-sm leading-7 text-black/70 sm:text-base"
          >
            Real transformations created by our professional team.
          </motion.p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
          {transformations.map((item, index) => {
            const isLarge = index === 0 || index === 3;
            const isTall = index === 1 || index === 2 || index === 6;
            const colSpan = isLarge ? "lg:col-span-7" : "lg:col-span-5";
            const rowSpan = isTall ? "lg:row-span-2" : "";

            return (
              <motion.article
                key={`${item.title}-${index}`}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 20, scale: 1.03 }
                }
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: 0.05 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={shouldReduceMotion ? { scale: 1 } : { scale: 1.01 }}
                className={`group relative overflow-hidden rounded-[28px] border border-black/15 bg-[#f2e9dc] ${colSpan} ${rowSpan}`}
              >
                <div
                  className={`relative h-full min-h-[320px] overflow-hidden ${item.aspect ?? "aspect-[4/5]"}`}
                >
                  {item.type === "video" ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={item.priority}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  )}

                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-5 sm:p-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-white/75">
                        {item.category}
                      </p>
                      <p className="mt-2 text-base font-light text-white sm:text-lg">
                        {item.title}
                      </p>
                    </div>
                    <div className="rounded-full border border-white/20 bg-white/10 p-2 text-white/80 backdrop-blur-sm">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="pt-2"
        >
          <Link
            href="#"
            className="group inline-flex items-center gap-3 border border-black/15 bg-white/70 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-black transition-all duration-300 hover:border-black/25 hover:bg-white"
          >
            VIEW ALL RESULTS
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
