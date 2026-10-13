"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutProduct() {
  return (
    <section id="about" className="overflow-hidden bg-[#faf9f7] py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-12 text-black">
        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/cavar6.png"
              alt="Produit capillaire Hair Brasil"
              width={450}
              height={700}
              priority
              className="drop-shadow-[0_45px_40px_rgba(0,0,0,.18)]"
            />
          </motion.div>
        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-6 uppercase tracking-[0.5em] text-sm text-neutral-500"
          >
            HAIR BRASIL • COLLECTION SIGNATURE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-black leading-none lg:text-6xl"
          >
            LA COLLECTION CAVIAR!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-10 text-lg leading-10 text-neutral-700"
          >
            Des formules professionnelles inspirées de l’expertise Hair Brasil,
            pour un rituel de soin d’exception.
          </motion.p>

          <Link href="/caviar">
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover="hover"
              className="group relative mt-12 overflow-hidden border border-black px-12 py-5 uppercase tracking-[0.35em] cursor-pointer"
            >
              <motion.span
                variants={{
                  hover: {
                    x: 10,
                  },
                }}
                className="relative z-10 flex items-center gap-3"
              >
                Découvrir
                <ArrowRight size={18} />
              </motion.span>

              <motion.div
                variants={{
                  hover: {
                    scaleX: 1,
                  },
                }}
                transition={{
                  duration: 0.35,
                }}
                className="absolute inset-0 origin-left scale-x-0 bg-black"
              />

              <motion.span
                variants={{
                  hover: {
                    color: "#fff",
                  },
                }}
                className="absolute inset-0 z-20 flex items-center justify-center gap-3 text-black opacity-40 group-hover:opacity-100 transition-opacity"
              >
                Découvrir
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
