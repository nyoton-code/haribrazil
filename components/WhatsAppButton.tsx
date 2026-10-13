"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const WHATSAPP_NUMBER = "212670560540";

const MESSAGE =
  "Bonjour, je souhaite avoir plus d'informations sur la gamme Hair Brasil.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  MESSAGE,
)}`;

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-6 w-6 shrink-0"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.47 0 .09 5.38.09 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62a11.93 11.93 0 0 0 5.9 1.5h.01c6.61 0 11.99-5.38 11.99-11.99a11.9 11.9 0 0 0-3.56-8.41ZM12.09 21.85a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.67.96.98-3.58-.23-.37a9.84 9.84 0 0 1-1.51-5.28c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 0 1 6.98 2.9 9.8 9.8 0 0 1 2.89 6.98c0 5.44-4.43 9.85-9.92 9.85Zm5.42-7.38c-.3-.15-1.77-.87-2.04-.97-.28-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 md:bottom-8 md:right-8"
    >
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Commander sur WhatsApp"
        onClick={(e) => {
          if (!expanded) {
            e.preventDefault();
            setExpanded(true);
          }
        }}
        animate={{
          width: expanded ? 240 : 52,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.35,
          ease: [0.26, 1.1, 0.4, 1.1],
        }}
        className="group flex h-[52px] items-center gap-3 overflow-hidden rounded-full border border-[#c9a961]/40 bg-[#0a0a0a] px-[14px] text-[#f5f2ec] shadow-lg transition-colors duration-300 hover:border-[#c9a961] hover:bg-[#c9a961] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a961] md:h-14"
      >
        <WhatsAppIcon />

        <motion.span
          animate={{
            opacity: expanded ? 1 : 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.2,
          }}
          className="whitespace-nowrap text-[9px] uppercase tracking-[0.22em]"
        >
          Commander sur WhatsApp
        </motion.span>
      </motion.a>
    </motion.div>
  );
}
