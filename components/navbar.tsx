"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ShoppingBag } from "lucide-react";

const links = [
  { name: "HOME", href: "/" },
  { name: "PAGES", href: "/pages" },
  { name: "BLOG", href: "/blog" },
  { name: "SHOP", href: "/shop" },
  { name: "ELEMENTS", href: "/elements" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-28 max-w-[1700px] items-center justify-between px-20">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/hero/logo1.png"
            alt="Academy Hair Brasil"
            width={260}
            height={90}
            priority
            className="w-[150px] xl:w-[150px] h-auto mt-9"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-12">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-sm tracking-[0.35rem] text-white"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center">
          <button className="border-l border-white/30 px-5 text-white">
            <ShoppingBag size={22} strokeWidth={1.5} />
          </button>

          <span className="text-white text-sm">0</span>

          <button className="border-l border-white/30 px-5 text-white">
            <Search size={22} strokeWidth={1.5} />
          </button>

          <button className="border-l border-r border-white/30 px-5 text-white">
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
