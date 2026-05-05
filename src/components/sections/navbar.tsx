"use client";

import { motion } from "framer-motion";
import { navigation } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="text-sm font-medium text-white">Agam Jain</a>
        <div className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-300 transition hover:text-white"
              whileHover={{ y: -1 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </nav>
    </header>
  );
}

