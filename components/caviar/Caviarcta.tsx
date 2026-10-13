"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { whatsappLink } from "../tanino/taninoData";

/* ───────────────────────── CONFIG ───────────────────────── */

const PRICES = {
  shampoo: "400,00 DH",
  protein: "1400,00 DH",
  mask: "300,00 DH",
  collection: "2000,00 DH",
};

// Leave empty ("") to use the collection image.
// Recommended: use the combined cinematic Black Caviar video here.
const COMBINED_VIDEO_SRC = "";

const COLLECTION_IMAGE_SRC = "/images/caviar/herocaviar2.jpg";

const products = [
  {
    number: "01",
    name: "Pre-Treatment Shampoo",
    size: "500 ml",
    price: PRICES.shampoo,
  },
  {
    number: "02",
    name: "Caviar Protein",
    size: "500 ml",
    price: PRICES.protein,
  },
  {
    number: "03",
    name: "Coconut Oil Mask",
    size: "500 ml",
    price: PRICES.mask,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

/* ───────────────────────── SECTION ───────────────────────── */

export default function CaviarCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="caviarcta"
      className="relative overflow-hidden bg-[#0a0a0a] text-[#f5f2ec]"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[650px] -translate-x-1/2 rounded-full bg-[#c9a961]/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="text-[8px] uppercase tracking-[0.5em] text-[#c9a961]/80 md:text-[9px]">
            Le rituel dans son intégralité
          </p>

          <h2 className="mt-4 font-serif text-[2.5rem] font-light leading-[0.94] tracking-[-0.025em] md:text-5xl lg:text-[3.6rem]">
            Black Caviar
            <span className="block text-white/45">
              Collection professionnelle
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-sm text-[11px] font-light leading-[1.8] text-white/40 md:text-xs">
            Trois soins professionnels complémentaires, réunis dans un protocole
            complet.
          </p>
        </motion.div>

        {/* ───────────────── EDITORIAL LAYOUT ───────────────── */}

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-[1.05fr_1fr] md:items-stretch md:gap-12 lg:gap-16">
          {/* ───────────────── LEFT — VISUAL ───────────────── */}
          {/* Fixed 4:5 ratio on mobile (where there's no row height to match),
              then fills the full grid-row height on desktop so it never
              falls short of the purchase column next to it. */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 1.025,
                  }
            }
            whileInView={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    scale: 1,
                  }
            }
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease }}
            className="relative aspect-[4/5] w-full overflow-hidden bg-[#080808] md:aspect-auto md:h-full md:min-h-[520px]"
          >
            {COMBINED_VIDEO_SRC ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={COMBINED_VIDEO_SRC}
                poster={COLLECTION_IMAGE_SRC}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <Image
                src={COLLECTION_IMAGE_SRC}
                alt="Collection professionnelle Black Caviar"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
            )}

            {/* Minimal image identification */}
            <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6">
              <p className="text-[7px] uppercase tracking-[0.4em] text-white/40">
                Hair Brasil
              </p>

              <p className="mt-1.5 text-[10px] uppercase tracking-[0.3em] text-white/75">
                Black Caviar
              </p>
            </div>
          </motion.div>

          {/* ───────────────── RIGHT — PURCHASE ───────────────── */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease,
            }}
            className="flex flex-col justify-center md:min-h-full"
          >
            {/* ───────────────── PRODUCTS ───────────────── */}

            <div>
              {products.map((product, index) => (
                <div
                  key={product.number}
                  className={`flex items-center justify-between gap-5 py-5 md:py-6 ${
                    index !== 0
                      ? "border-t border-white/[0.055]"
                      : "border-t border-white/[0.07]"
                  }`}
                >
                  {/* Product information */}

                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span className="shrink-0 text-[8px] tracking-[0.3em] text-[#c9a961]/70">
                        {product.number}
                      </span>

                      <h3 className="truncate text-sm font-light tracking-tight text-white/90 md:text-base">
                        {product.name}
                      </h3>
                    </div>

                    <p className="mt-1.5 pl-[23px] text-[8px] uppercase tracking-[0.2em] text-white/25">
                      {product.size}
                    </p>
                  </div>

                  {/* Price + action */}

                  <div className="flex shrink-0 items-center gap-4 md:gap-6">
                    <span className="text-xs font-light tracking-wide text-white/70 md:text-sm">
                      {product.price}
                    </span>

                    <a
                      href={whatsappLink(
                        `Bonjour, je souhaite commander le ${product.name} de la gamme Black Caviar.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[9px] uppercase tracking-[0.22em] text-[#c9a961]/80 transition-colors duration-300 hover:text-[#c9a961]"
                    >
                      Commander
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* ───────────────── COMPLETE COLLECTION ───────────────── */}

            <div className="mt-8 border-t border-[#c9a961]/20 pt-8 md:mt-10 md:pt-9">
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#c9a961]/80">
                Collection complète
              </p>

              <p className="mt-4 text-3xl font-light leading-none tracking-[-0.025em] text-white md:text-4xl">
                {PRICES.collection}
              </p>

              <p className="mt-3 text-[9px] font-light text-white/30">
                Trois produits · Protocole Black Caviar complet
              </p>

              {/* Primary CTA */}

              <a
                href={whatsappLink(
                  "Bonjour, je souhaite commander la gamme Black Caviar complète.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 flex h-[58px] w-full items-center justify-between border border-white/15 px-5 transition-all duration-500 hover:border-[#c9a961]/60 hover:bg-[#c9a961] hover:text-black md:h-[60px]"
              >
                <span className="text-[9px] uppercase tracking-[0.32em]">
                  Commander la collection
                </span>

                <span className="text-base font-light transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
              </a>

              <p className="mt-3 text-center text-[8px] uppercase tracking-[0.25em] text-white/20">
                WhatsApp · Morocco
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
