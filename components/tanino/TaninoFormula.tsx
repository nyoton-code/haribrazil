"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TANINO_ACCENT, TANINO_VIOLET } from "./taninoData";

const formulaNotes = [
  {
    number: "01",
    name: "Hydratation et brillance",
    description:
      "Le rituel Tanino Technique met l’accent sur la douceur, la souplesse et la finition lumineuse de la fibre capillaire.",
    accent: TANINO_VIOLET,
  },
  {
    number: "02",
    name: "Formules pensées pour le soin professionnel",
    description:
      "Chaque produit est conçu pour s’inscrire dans un protocole cohérent, de l’attaque au finition, avec un rendu maîtrisé.",
    accent: TANINO_ACCENT,
  },
  {
    number: "03",
    name: "Usage et recommandations",
    description:
      "Les conseils d’usage restent adaptés au type de cheveux, au niveau d’hydratation et au résultat recherché par chaque cliente.",
    accent: TANINO_ACCENT,
  },
];

export default function TaninoFormula() {
  return (
    <section className="relative bg-[#10120f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="mb-4 text-[9px] uppercase tracking-[0.45em] text-[#9bc66d]/80">
            La formule
          </p>
          <h2 className="max-w-xl text-4xl font-light leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Ce que révèle{" "}
            <span className="italic text-white/55">l’étiquette.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16 lg:gap-20">
          <div className="md:sticky md:top-24 md:h-fit">
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden bg-[#efeee9]"
            >
              <Image
                src="/images/tanino/formula.jpg"
                alt="Gamme de produits Tanino Technique"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 text-[8px] uppercase tracking-[0.4em] text-white/75">
                Tanino Technique · Hair Brasil
              </p>
            </motion.div>
          </div>

          <div>
            {formulaNotes.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`py-8 md:py-10 ${index !== 0 ? "pt-10 md:pt-12" : ""}`}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-mono text-[10px] tracking-[0.3em]"
                    style={{ color: item.accent }}
                  >
                    {item.number}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="mt-4 text-2xl font-light tracking-tight md:text-3xl">
                  {item.name}
                </h3>
                <p className="mt-4 max-w-lg text-xs font-light leading-[1.85] text-white/55 md:text-sm">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
