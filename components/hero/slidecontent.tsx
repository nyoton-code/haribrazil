"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function SlideContent({ slide }: any) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slide.id}
        initial={{ opacity: 0, scale: 1.05, x: 120 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 1.02, x: -120 }}
        transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-screen text-center"
      >
        {/* Background */}

        <motion.img
          src={slide.image}
          alt=""
          initial={{ scale: 1.2, filter: "blur(8px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          exit={{ scale: 1.08, filter: "blur(5px)" }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <motion.div
          initial={{ x: "-18%", opacity: 0.2 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "18%", opacity: 0.2 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/60"
        />

        {/* Content */}

        <div className="relative z-20 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-10">
            <motion.p
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
              transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
              className="mb-6 text-4xl font-light italic text-[#d4b06a]"
            >
              {slide.subtitle}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
              transition={{ delay: 0.25, duration: 0.9, ease: "easeOut" }}
              className="text-[6vw] font-black tracking-[.25em] text-white"
            >
              • {slide.title} •
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="mt-8 text-lg tracking-[0.6em] text-white"
            >
              {slide.location}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
