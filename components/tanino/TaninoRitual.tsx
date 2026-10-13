"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PRODUCTS } from "./taninoData";

export default function TaninoRitual() {
  return (
    <section
      id="ritual"
      className="relative scroll-mt-8 overflow-hidden bg-[#f4f3ed] text-[#111]"
    >
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:px-12 md:pb-14 md:pt-20 lg:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-[9px] uppercase tracking-[0.45em] text-black/45">
              La technique Tanino Technique
            </p>
            <h2 className="font-serif text-5xl font-light leading-[0.92] tracking-tight md:text-6xl lg:text-7xl">
              Trois produits.
              <br />
              <span className="italic text-black/60">Une collection.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-xs font-light leading-[1.8] tracking-wide text-black/55 md:ml-auto md:text-sm"
          >
            Un protocole en trois étapes conçu pour hydrater, nourrir et lisser
            la fibre capillaire avec un meilleur contrôle sur la finition.
          </motion.p>
        </div>
      </div>

      <div>
        {PRODUCTS.map((product, index) => (
          <motion.article
            key={product.number}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(ellipse_at_center,rgba(120,185,67,0.11),transparent_68%)] md:w-1/2" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
              <div className="grid min-h-[480px] grid-cols-1 md:grid-cols-[0.9fr_1.1fr] lg:min-h-[560px] lg:grid-cols-[0.85fr_1.15fr]">
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
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[9px] tracking-[0.3em] text-black/35">
                        {product.number}
                      </span>
                      <div className="h-px w-10 bg-black/20" />
                    </div>
                    <p className="mt-5 text-[9px] uppercase tracking-[0.4em] text-black/40">
                      {index === 1 ? "Usage professionnel" : "Tanino Technique"}
                    </p>
                    <h3 className="mt-3 max-w-md font-serif text-4xl font-light leading-[1.02] tracking-tight md:text-5xl lg:text-[3.4rem]">
                      {product.name}
                    </h3>
                    <p className="mt-5 max-w-md text-xs font-light leading-[1.8] text-black/55 md:text-sm">
                      {product.detail}
                    </p>
                  </motion.div>
                </div>

                <div className="relative flex min-h-[440px] items-center justify-center md:min-h-0">
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0.7 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="pointer-events-none absolute bottom-[8%] left-1/2 h-10 w-[55%] -translate-x-1/2 rounded-full bg-black/15 blur-2xl md:h-14 md:w-1/2"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 45, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative h-[360px] w-[88%] md:h-[400px] lg:h-[430px]"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 90vw, 55vw"
                      className="object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.12)]"
                    />
                  </motion.div>
                  <div className="absolute bottom-6 right-0 max-w-[190px] text-right md:bottom-7">
                    <p className="text-[8px] uppercase tracking-[0.35em] text-black/30">
                      {product.number} / 03
                    </p>
                    <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-black/45">
                      {product.size}
                    </p>
                    <p className="mt-2 text-[9px] font-light leading-[1.6] text-black/45">
                      Hair Brasil · Tanino Technique
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-px w-1/3"
              style={{ backgroundColor: TANINO_ACCENT }}
            /> */}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
