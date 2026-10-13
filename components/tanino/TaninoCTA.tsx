"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PRICES, PRODUCTS, TANINO_ACCENT, whatsappLink } from "./taninoData";

const ease = [0.16, 1, 0.3, 1] as const;

export default function TaninoCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="TaninoCTA"
      className="relative scroll-mt-8 overflow-hidden bg-[#0a0d0b] text-[#f4f3ed]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[650px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{ backgroundColor: `${TANINO_ACCENT}08` }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#9bc66d] md:text-xs font-medium">
            La collection complète
          </p>
          <h2 className="mt-3 text-[2.5rem] font-light leading-[0.98] tracking-[-0.035em] md:text-5xl lg:text-[3.6rem]">
            Tanino Technique
            <span className="block text-white/50 font-extralight">
              Collection professionnelle
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-xs font-light leading-relaxed text-white/60 md:text-sm">
            Trois soins professionnels conçus pour agir en synergie et composer
            un rituel lissant complet.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-[1.05fr_1fr] md:items-stretch md:gap-12 lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease }}
            className="relative min-h-[380px] w-full overflow-hidden rounded-sm bg-[#efeee9] md:min-h-0"
          >
            <Image
              src="/images/tanino/hero3.jpg"
              alt="Collection Tanino Technique dans un décor de campagne violet"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6">
              <p className="text-[8px] uppercase tracking-[0.4em] text-white/60">
                Hair Brasil
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-white/90 font-medium">
                Tanino Technique
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="flex flex-col justify-center"
          >
            <div>
              {PRODUCTS.map((product, index) => (
                <div
                  key={product.number}
                  className={`flex items-center justify-between gap-4 py-4 md:gap-6 md:py-5 ${
                    index !== 0
                      ? "border-t border-white/10"
                      : "border-t border-white/15"
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2.5">
                      <span className="shrink-0 text-[10px] font-semibold tracking-wider text-[#9bc66d]">
                        {product.number}
                      </span>
                      <h3 className="text-sm font-normal tracking-tight text-white/95 md:text-base">
                        {product.name}
                      </h3>
                    </div>
                    <p className="mt-1 pl-[21px] text-[9px] uppercase tracking-wider text-white/40">
                      {product.size}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-3 sm:gap-5">
                    <span className="text-right text-xs font-medium text-white/85 md:text-sm">
                      {PRICES[product.key]}
                    </span>
                    <a
                      href={whatsappLink(
                        `Bonjour, je souhaite commander le ${product.name} de la gamme Tanino Technique.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-white/10 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-widest text-white/90 transition-all duration-300 hover:bg-[#78b943] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9bc66d]"
                    >
                      Commander
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-[#78b943]/30 pt-7 md:mt-9 md:pt-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#9bc66d]">
                    Collection complète
                  </p>
                  <p className="mt-1 text-[10px] text-white/50">
                    3 produits · Rituel de soin complet
                  </p>
                </div>
                <p className="text-2xl font-normal leading-none text-white sm:text-3xl md:text-4xl">
                  {PRICES.collection}
                </p>
              </div>

              <a
                href={whatsappLink(
                  "Bonjour, je souhaite commander la gamme Tanino Technique complète.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex min-h-[56px] w-full items-center justify-between rounded-sm bg-[#78b943] px-6 text-black transition-all duration-300 hover:bg-[#8cd050] hover:shadow-lg hover:shadow-[#78b943]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9bc66d]"
              >
                <span className="text-xs font-bold uppercase tracking-[0.25em]">
                  Commander la collection
                </span>
                <span
                  aria-hidden="true"
                  className="text-lg font-bold transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <p className="mt-2.5 text-center text-[9px] uppercase tracking-[0.2em] text-white/40">
                Commande directe par WhatsApp · Livraison offerte au Maroc
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
