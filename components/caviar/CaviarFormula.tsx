"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ingredients = [
  {
    number: "01",
    name: "Extrait de Caviar",
    description:
      "Riche en acides aminés, en oméga-3 et en vitamines A, D et E, l'extrait de caviar est un actif précieux aux propriétés régénérantes. Il nourrit en profondeur, stimule la réparation cellulaire et aide à renforcer la fibre capillaire pour des cheveux plus brillants, plus souples et visiblement revitalisés.",
  },
  {
    number: "02",
    name: "Huile d'Argan",
    description:
      "Riche en acides gras essentiels et en vitamine E, l'huile d'argan hydrate intensément, répare les cheveux secs et cassants, et protège la fibre capillaire des agressions extérieures. Elle apporte douceur, brillance et souplesse, tout en facilitant le coiffage.",
  },
  {
    number: "03",
    name: "Huile de Noix de Coco",
    description:
      "Grâce à sa richesse en acides gras et en vitamines, elle pénètre au cœur de la fibre capillaire pour hydrater, adoucir et réparer en profondeur. Elle aide à prévenir la casse, dompte les frisottis et laisse les cheveux brillants et délicatement parfumés.",
  },
];

export default function CaviarFormula() {
  return (
    <section className="relative bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-20">
        {/* ───────────── INTRO ───────────── */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="mb-4 text-[9px] uppercase tracking-[0.45em] text-[#c9a961]/70">
            La Formule
          </p>
          <h2 className="max-w-xl  text-4xl font-light leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            La nature,{" "}
            <span className="italic text-white/55">alliée à la science.</span>
          </h2>
        </motion.div>

        {/* ───────────── INGREDIENTS: sticky image + list ───────────── */}

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16 lg:gap-20">
          {/* Sticky visual — single image, no competing texture/mockup */}
          <div className="md:sticky md:top-24 md:h-fit">
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden"
            >
              <Image
                src="/images/caviar/formula2.png"
                alt="Black Caviar — actifs"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Ingredient list */}
          <div>
            {ingredients.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`py-8 md:py-10 ${
                  index !== 0 ? "pt-10 md:pt-12" : ""
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[#c9a961]/70">
                    {item.number}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <h3 className="mt-4  text-2xl font-light tracking-tight md:text-3xl">
                  {item.name}
                </h3>

                <p className="mt-4 max-w-lg text-xs font-light leading-[1.85] text-white/55 md:text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
