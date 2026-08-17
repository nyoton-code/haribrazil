"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f4efe7] px-6 sm:px-10">
      <div className="mx-auto max-w-[1500px]">
        {/* TOP */}
        <div className="flex min-h-[150px] items-center justify-between gap-8">
          {/* LOGO */}
          <Link
            href="/"
            className="shrink-0 transition-opacity duration-300 hover:opacity-60"
          >
            <Image
              src="/images/hero/logo1.png"
              alt="Hair Brasil"
              width={170}
              height={70}
              className="h-auto w-[130px] sm:w-[155px]"
            />
          </Link>

          {/* NAVIGATION */}
          <nav className="flex items-center gap-7 sm:gap-10">
            <Link
              href="/"
              className="text-[12px] font-light text-black/75 transition-colors hover:text-black sm:text-sm"
            >
              Accueil
            </Link>

            <Link
              href="#products"
              className="text-[12px] font-light text-black/75 transition-colors hover:text-black sm:text-sm"
            >
              Produits
            </Link>

            <Link
              href="#academy"
              className="text-[12px] font-light text-black/75 transition-colors hover:text-black sm:text-sm"
            >
              Academy
            </Link>

            <Link
              href="#contact"
              className="text-[12px] font-light text-black/75 transition-colors hover:text-black sm:text-sm"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-black/10 py-6">
          <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
            <p className="text-[11px] font-light text-black/60 sm:text-sm">
              Conçu et développé par <span className="text-black">Nyoton</span>
            </p>

            <span className="hidden text-black/20 sm:block">©</span>

            <p className="text-[11px] font-light text-black/60 sm:text-sm">
              © {new Date().getFullYear()} Hair Brasil. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
