"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "./nav-links";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-bone",
                pathname === link.href && "text-bone"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brass px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:bg-brass-light hover:shadow-[0_12px_32px_-10px_rgba(200,161,90,0.7)]"
          >
            Get a quote
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-bone md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-line bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-lg text-bone/90 transition-colors hover:bg-surface hover:text-brass"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brass px-5 py-3.5 text-sm font-medium text-ink"
              >
                Get a quote
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
