"use client";

import { container } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export interface NavbarProps {
  logo: string;
  brand: string;
  avatar: string;
  links: Array<{
    id: string | number;
    label: string;
    link: string;
  }>;
}

const Navbar: React.FC<NavbarProps> = ({ logo, brand, links, avatar }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border bg-bg-primary sticky top-0 z-50">
      <div
        className={`${container} h-20 flex items-center justify-between`}
      >
        {/* LEFT: Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image src={logo} alt="logo" width={40} height={40} />
          <span className="text-lg font-semibold text-text-primary">
            {brand}
          </span>
        </div>

        {/* CENTER: Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.id}
              href={`/${item.link}`}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              scroll
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <div className="relative">
            <button className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-secondary hover:bg-bg-muted transition">
              🛒
            </button>
            <span className="hidden md:flex absolute -top-1 -right-1 bg-brand-accent text-bg-primary text-[10px] h-5 min-w-5 px-1 items-center justify-center rounded-full">
              2
            </span>
          </div>

          {/* Avatar (hidden on small) */}
          <div className="hidden sm:flex h-10 w-10 rounded-full border-2 border-brand-primary overflow-hidden">
            <Image
              src={logo}
              alt="user"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1 w-10 h-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block h-0.5 w-5 bg-text-primary transition ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-text-primary transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-text-primary transition ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-75 border-t border-border" : "max-h-0"
        }`}
      >
        <div className={`${container} py-4 flex flex-col gap-4`}>
          {links.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="text-sm font-medium text-text-secondary hover:text-text-primary"
              onClick={() => setIsOpen(false)}
              scroll
            >
              {item.label}
            </Link>
          ))}

          {/* Optional: show avatar in mobile */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
            <div className="relative">
              <button className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-bg-secondary hover:bg-bg-muted transition">
                🛒
              </button>
              <span className="absolute -top-1 -right-1 bg-brand-accent text-bg-primary text-[10px] h-5 min-w-5 px-1 flex items-center justify-center rounded-full">
                2
              </span>
            </div>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-border">
              <Image src={avatar} alt="user" width={32} height={32} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
