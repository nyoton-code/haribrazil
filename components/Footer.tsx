"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_NUMBER } from "./tanino/taninoData";

/* ───────────────────────── CONFIG ───────────────────────── */

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/academy_hairbrasil",
  facebook: "https://www.facebook.com/profile.php?id=100064238164148",
  tiktok: "https://tiktok.com/@hairbrasilprofissional",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

const footerColumns = [
  {
    title: "Collections",
    links: [
      { name: "Black Caviar", href: "/caviar" },
      { name: "Tanino Technique", href: "/tanino" },
      { name: "Toutes les collections", href: "/" },
    ],
  },
  {
    title: "Maison",
    links: [
      { name: "À propos", href: "/#about" },
      { name: "Academy", href: "/#academy" },
      { name: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Informations",
    links: [
      { name: "Livraison", href: "/#contact" },
      { name: "Politique de confidentialité", href: "/#contact" },
      { name: "Conditions générales", href: "/#contact" },
    ],
  },
];

/* ───────────────────────── ICONS ───────────────────────── */

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M14 9h2.5V6H14c-1.93 0-3.5 1.57-3.5 3.5V11H8v3h2.5v6H13v-6h2.3l.7-3H13V9.6c0-.33.27-.6.6-.6H14Z" />
    </svg>
  );
}

function IconTikTok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M14 4v9.5a3.5 3.5 0 1 1-3-3.46" strokeLinecap="round" />
      <path d="M14 4c0 2.5 2 4.5 4.5 4.5" strokeLinecap="round" />
    </svg>
  );
}

function IconWhatsapp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M7 17.5 4.5 19l1.2-3.2A7.5 7.5 0 1 1 12 19.5a7.4 7.4 0 0 1-3.6-.9L7 17.5Z" />
      <path d="M9 10.3c0 2.6 2.1 4.7 4.7 4.7.3 0 .6-.3.6-.6v-1c0-.3-.2-.5-.5-.6l-1.4-.3a.6.6 0 0 0-.6.2l-.4.5a4 4 0 0 1-1.8-1.8l.5-.4a.6.6 0 0 0 .2-.6L9.9 9c-.1-.3-.3-.5-.6-.5h-1c-.3 0-.6.3-.6.6Z" />
    </svg>
  );
}

const socials = [
  {
    name: "Instagram",
    href: SOCIAL_LINKS.instagram,
    Icon: IconInstagram,
  },
  {
    name: "Facebook",
    href: SOCIAL_LINKS.facebook,
    Icon: IconFacebook,
  },
  {
    name: "TikTok",
    href: SOCIAL_LINKS.tiktok,
    Icon: IconTikTok,
  },
  {
    name: "WhatsApp",
    href: SOCIAL_LINKS.whatsapp,
    Icon: IconWhatsapp,
  },
];

/* ───────────────────────── FOOTER ───────────────────────── */

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="border-t border-white/10 bg-[#0c0c0b] px-6 text-white sm:px-10">
      <div className="mx-auto max-w-[1500px]">
        {/* ───────────────── TOP: brand + social ───────────────── */}

        <div className="flex flex-col gap-10 border-b border-white/10 py-14 md:flex-row md:items-start md:justify-between md:py-16">
          {/* Brand */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="inline-block transition-opacity duration-300 hover:opacity-60"
            >
              <Image
                src="/images/hero/logo1.png"
                alt="Hair Brasil"
                width={170}
                height={70}
                className="h-auto w-[130px] brightness-0 invert sm:w-[155px]"
              />
            </Link>

            <p className="mt-5 text-xs font-light leading-[1.8] text-white/45">
              Soins capillaires professionnels, conçus pour sublimer chaque
              texture avec exigence et raffinement.
            </p>
          </div>

          {/* Social */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
              Suivez-nous
            </p>

            <div className="mt-4 flex items-center gap-3">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/55 transition-all duration-300 hover:border-[#c9a961] hover:text-[#c9a961]"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ───────────────── MIDDLE: links + newsletter ───────────────── */}

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-b border-white/10 py-14 sm:grid-cols-3 md:grid-cols-[1fr_1fr_1fr_1.2fr] md:gap-x-10 md:py-16">
          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                {column.title}
              </p>

              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-light text-white/60 transition-colors duration-300 hover:text-[#c9a961]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
              Lettre d’information
            </p>

            <p className="mt-5 text-[13px] font-light leading-[1.7] text-white/45">
              Recevez nos actualités et offres exclusives.
            </p>

            {submitted ? (
              <p className="mt-4 text-[13px] font-light text-white/70">
                Merci — vous êtes bien inscrit(e).
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mt-4 flex items-stretch"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre e-mail"
                  className="min-w-0 flex-1 border border-white/15 bg-transparent px-3 py-2.5 text-[13px] font-light text-white placeholder:text-white/25 focus:border-white/40 focus:outline-none"
                />

                <button
                  type="submit"
                  aria-label="S'inscrire"
                  className="shrink-0 border border-l-0 border-white/15 px-4 text-[13px] text-white/60 transition-all duration-300 hover:border-[#c9a961] hover:bg-[#c9a961] hover:text-black"
                >
                  →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ───────────────── BOTTOM ───────────────── */}

        <div className="flex flex-col items-center justify-center gap-2 py-6 text-center sm:flex-row sm:justify-between sm:gap-3 sm:text-left">
          <p className="text-[11px] font-light text-white/35 sm:text-xs">
            © {new Date().getFullYear()} Hair Brasil. Tous droits réservés.
          </p>

          <p className="text-[11px] font-light text-white/35 sm:text-xs">
            Conçu et développé par <span className="text-white/65">Nyoton</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
