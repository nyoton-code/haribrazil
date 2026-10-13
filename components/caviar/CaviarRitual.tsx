"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "PURIFIER",
    product: "PRE-TREATMENT SHAMPOO",
    experience:
      "Le rituel commence par un nettoyage en profondeur qui élimine les impuretés et prépare la fibre capillaire aux soins suivants.",
    description:
      "Nettoie en profondeur et prépare la fibre capillaire à une absorption optimale des actifs.",
    image: "/images/caviar/shampo6.png",
    texture: "/images/caviar/texture-shampoo.jpg",
  },
  {
    number: "02",
    title: "RÉPARER",
    product: "CAVIAR PROTEIN",
    experience:
      "Ce soin intensif agit au cœur de la fibre capillaire, la nourrit et la renforce pour lui rendre un aspect visiblement plus sain.",
    description:
      "Nourrit, renforce et revitalise la fibre capillaire grâce à un soin professionnel intensif.",
    image: "/images/caviar/protein4.png",
    texture: "/images/caviar/texture-caviar.jpg",
  },
  {
    number: "03",
    title: "RÉVÉLER",
    product: "COCONUT OIL MASK",
    experience:
      "Cette dernière étape restaure la douceur et laisse les cheveux lisses, lumineux et soyeux au toucher.",
    description:
      "Restaure la douceur et sublime la brillance pour une finition lisse et soignée.",
    image: "/images/caviar/caviarmask3.png",
    texture: "/images/caviar/texture-coconut.jpg",
  },
];

export default function CaviarRitual() {
  return (
    <section className="relative overflow-hidden bg-[#f5f2ec] text-[#111]">
      {/* ───────────── INTRO ───────────── */}

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:px-12 md:pb-14 md:pt-20 lg:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="mb-4 text-[9px] uppercase tracking-[0.45em] text-black/45">
              La méthode Black Caviar
            </p>

            <h2 className="font-serif text-5xl font-light leading-[0.92] tracking-tight md:text-6xl lg:text-7xl">
              Trois étapes.
              <br />
              <span className="italic text-black/65">Un seul rituel.</span>
            </h2>
          </motion.div>

          {/* Intro text */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-md text-xs font-light leading-[1.8] tracking-wide text-black/55 md:ml-auto md:text-sm"
          >
            Un protocole professionnel en trois étapes, conçu pour préparer,
            régénérer et sublimer la fibre capillaire grâce à un rituel de soin
            parfaitement orchestré.
          </motion.p>
        </div>
      </div>

      {/* ───────────── RITUAL STEPS ───────────── */}

      <div>
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative "
          >
            {/* Subtle texture */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 1.05,
                }}
                whileInView={{
                  opacity: 0.035,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={step.texture}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover grayscale"
                />
              </motion.div>
            </div>

            {/* Content */}

            <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
              <div
                className="
                  grid
                  min-h-[480px]
                  grid-cols-1
                  md:grid-cols-[0.9fr_1.1fr]
                  lg:min-h-[560px]
                  lg:grid-cols-[0.85fr_1.15fr]
                "
              >
                {/* ───────── LEFT ───────── */}

                <div className="flex flex-col justify-center py-10 md:pr-10 lg:pr-14">
                  <motion.div
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {/* Number */}

                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[9px] tracking-[0.3em] text-black/35">
                        {step.number}
                      </span>

                      <div className="h-px w-10 bg-black/20" />
                    </div>

                    {/* Label */}

                    <p className="mt-5 text-[9px] uppercase tracking-[0.4em] text-black/40">
                      {step.title}
                    </p>

                    {/* Main title */}

                    <h3 className="mt-3 max-w-md font-serif text-4xl font-light leading-[1.02] tracking-tight md:text-5xl lg:text-[3.4rem]">
                      {index === 0 && "Préparer la fibre."}
                      {index === 1 && "Restaurer sa force."}
                      {index === 2 && "Révéler son éclat."}
                    </h3>

                    {/* Description */}

                    <p className="mt-5 max-w-md text-xs font-light leading-[1.8] text-black/55 md:text-sm">
                      {step.experience}
                    </p>
                  </motion.div>
                </div>

                {/* ───────── RIGHT ───────── */}

                <div className="relative flex min-h-[440px] items-center justify-center md:min-h-0">
                  {/* Grounded contact shadow — replaces the floating ambient blur */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scaleX: 0.7,
                    }}
                    whileInView={{
                      opacity: 1,
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 1.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      pointer-events-none
                      absolute
                      bottom-[8%]
                      left-1/2
                      h-10
                      w-[55%]
                      -translate-x-1/2
                      rounded-full
                      bg-black/18
                      blur-2xl
                      md:h-14
                      md:w-[50%]
                    "
                  />

                  {/* Soft ambient backlight, kept subtle and behind the product */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.75,
                    }}
                    whileInView={{
                      opacity: 0.35,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      absolute
                      left-1/2
                      top-[42%]
                      h-72
                      w-72
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-white
                      blur-3xl
                      md:h-[420px]
                      md:w-[420px]
                    "
                  />

                  {/* Product */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 45,
                      scale: 0.95,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      relative
                      z-10
                      h-[420px]
                      w-[92%]
                      md:h-[480px]
                      lg:h-[520px]
                    "
                  >
                    <Image
                      src={step.image}
                      alt={step.product}
                      fill
                      sizes="(max-width: 768px) 92vw, 58vw"
                      className="object-contain drop-shadow-[0_35px_40px_rgba(0,0,0,0.16)]"
                    />
                  </motion.div>

                  {/* Product information */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      absolute
                      bottom-6
                      right-0
                      z-10
                      max-w-[170px]
                      text-right
                      md:bottom-8
                    "
                  >
                    <p className="text-[8px] uppercase tracking-[0.35em] text-black/30">
                      {step.number} / 03
                    </p>

                    <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-black/45">
                      {step.product}
                    </p>

                    <p className="mt-2 text-[9px] font-light leading-[1.6] text-black/45">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
