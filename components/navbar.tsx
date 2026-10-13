"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, X } from "lucide-react";

const links = [
  { name: "ACCUEIL", href: "/" },
  { name: "CAVIAR", href: "/caviar" },
  { name: "TANINO", href: "/tanino" },
  { name: "ACADEMY", href: "/#academy" },
  { name: "À PROPOS", href: "/#about" },
  { name: "CONTACT", href: "/#contact" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Solid/blurred background once the user scrolls past the hero,
  // so nav text never sits directly on a light background unreadably.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open, and compensate for the
  // scrollbar's width so the page doesn't visibly shift sideways when it
  // disappears (this was the cause of the "whole thing moves" bug).
  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-colors duration-500 ${
          scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1700px] items-center justify-between px-5 transition-[height] duration-500 md:h-24 lg:px-12 xl:h-28 xl:px-20 ">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/hero/logo1.png"
              alt="Academy Hair Brasil"
              width={260}
              height={90}
              priority
              className="h-auto w-[100px] md:w-[130px] xl:w-[150px]"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-10">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-xs tracking-[0.2rem] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60 xl:text-sm xl:tracking-[0.35rem]"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center">
            <button
              aria-label="Voir le panier"
              className="border-l border-white/30 px-3.5 text-white transition-colors duration-300 hover:text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60 md:px-5"
            >
              <ShoppingBag
                size={20}
                strokeWidth={1.5}
                className="md:h-[22px] md:w-[22px]"
              />
            </button>

            <button
              aria-label="Rechercher"
              className="hidden border-l border-white/30 px-3.5 text-white transition-colors duration-300 hover:text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60 sm:block md:px-5 lg:border-r"
            >
              <Search
                size={20}
                strokeWidth={1.5}
                className="md:h-[22px] md:w-[22px]"
              />
            </button>

            {/* Only needed below `lg` — from `lg` up, the full link list
                is already visible in the nav, so there's nothing for this
                button to open. */}
            <button
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="border-l border-r border-white/30 px-3.5 text-white transition-colors duration-300 hover:text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60 md:px-5 lg:hidden"
            >
              <Menu size={24} strokeWidth={1.5} className="md:h-7 md:w-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet menu overlay — covers everything below `lg` */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease }}
              className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col bg-[#0a0a0a] text-white lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                  Menu
                </p>
                <button
                  aria-label="Fermer le menu"
                  onClick={() => setMenuOpen(false)}
                  className="text-white transition-colors duration-300 hover:text-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
                {links.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.05,
                      ease,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block border-b border-white/[0.07] py-4 text-lg font-light tracking-[0.15rem] text-white/90 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="flex items-center justify-center gap-8 border-t border-white/10 px-6 py-8">
                <button
                  aria-label="Rechercher"
                  className="text-white/70 transition-colors duration-300 hover:text-white"
                >
                  <Search size={20} strokeWidth={1.5} />
                </button>
                <button
                  aria-label="Voir le panier"
                  className="text-white/70 transition-colors duration-300 hover:text-white"
                >
                  <ShoppingBag size={20} strokeWidth={1.5} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
