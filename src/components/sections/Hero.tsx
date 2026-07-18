"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Aurora } from "@/components/ui/Aurora";
import { site, clientBrands, stats } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Premium hotel interior finished by Aark Alliance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/80 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
      </div>
      <Aurora className="opacity-70" />
      <div className="bg-grid mask-fade-radial absolute inset-0 opacity-50" aria-hidden />

      <Container className="relative">
        <div className="max-w-3xl">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {site.tagline}
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            We finish spaces
            <br />
            the world's best
            <br />
            <span className="text-gradient-brand">hotels trust.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Interiors, waterproofing, painting, polishing, flooring, glass films
            and blinds. One accountable partner delivering hospitality-grade
            finishes on time and to brand standard.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-brand-dark hover:shadow-[0_18px_44px_-14px_rgba(124,58,237,0.7)]"
            >
              Start your project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/40 px-7 py-3.5 text-sm font-medium text-bone backdrop-blur-sm transition-all duration-300 hover:border-brand/50 hover:text-brand-light"
            >
              View our work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-14 flex flex-col gap-4 border-t border-line/70 pt-8"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-faint">
              Trusted on projects for
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {clientBrands.map((brand) => (
                <span
                  key={brand}
                  className="font-display text-sm font-medium tracking-wide text-bone/70"
                >
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Floating stat card (desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="animate-float absolute right-10 top-1/2 hidden -translate-y-1/2 xl:block"
      >
        <div className="glass w-64 rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-faint">At a glance</p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-semibold text-brand-light">{s.value}</div>
                <div className="mt-1 text-[11px] leading-tight text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
