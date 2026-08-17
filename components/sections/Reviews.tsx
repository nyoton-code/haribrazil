"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Bouthayna Assem",
    text: "Très professionnelle, travail propre et soigné. Je recommande à 100 % !",
  },
  {
    name: "Naima Badri",
    text: "Une qualité de travail irréprochable. Le résultat a dépassé mes attentes.",
  },
  {
    name: "Maryem Benar",
    text: "Une équipe très professionnelle, à l’écoute et toujours disponible.",
  },
  {
    name: "Fatima Zahra Bounoara",
    text: "Une excellente expérience. La qualité de l’enseignement et de l’encadrement est remarquable.",
  },
  {
    name: "Aazza El Faqir",
    text: "Une très belle expérience. Des soins de qualité et une équipe formidable.",
  },
  {
    name: "Rajae Khanjari",
    text: "Une équipe très professionnelle qui accompagne chaque apprenant étape par étape.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Reviews() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-12"
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#76543f]">
            Avis clients
          </p>

          <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-light leading-[0.9] tracking-[-0.05em] text-[#171514]">
            Votre avis
            <br />
            <span className="font-serif italic text-[#76543f]">compte.</span>
          </h2>
        </motion.div>

        {/* REVIEWS */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease,
              }}
              className="rounded-[18px] border border-black/10 bg-[#faf9f7] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white"
            >
              {/* STARS */}
              <div className="mb-5 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-3 w-3 fill-[#76543f] text-[#76543f]"
                    strokeWidth={1}
                  />
                ))}
              </div>

              {/* REVIEW */}
              <p className="text-[14px] leading-7 text-[#55504c]">
                “{review.text}”
              </p>

              {/* NAME */}
              <div className="mt-6 border-t border-black/10 pt-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#24211f]">
                  {review.name}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
