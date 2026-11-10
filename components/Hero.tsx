"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Dict } from "@/content/dictionary";
import { site } from "@/content/site";
import { ease } from "./ui";

export function Hero({ d, dir, lang }: { d: Dict; dir: number; lang: string }) {
  const h = d.hero;
  const stagger = (n: number) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, ease, delay: n * 0.08 } });

  return (
    <section id="home" className="relative overflow-hidden px-5 pb-20 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "radial-gradient(60% 50% at 70% 30%, #EAF6FC 0%, transparent 70%)" }} />
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <motion.span {...stagger(0)} className="inline-flex rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600 ring-1 ring-brand-100">{h.badge}</motion.span>
          <motion.h1 {...stagger(1)} className="mt-5">{h.title}</motion.h1>
          <motion.p {...stagger(2)} className="mt-5 max-w-xl text-lg text-ink-600">{h.sub}</motion.p>
          <motion.div {...stagger(3)} className="mt-8 flex flex-wrap gap-3">
            <a href={`/${lang}#contact`} className="btn-primary">{h.cta1}</a>
            <a href={`/${lang}#demo`} className="btn-secondary">{h.cta2}</a>
          </motion.div>
          <motion.p {...stagger(4)} className="mt-6 text-sm text-ink-600"><strong className="text-ink-900">{site.customerCount}+</strong> {h.proof}</motion.p>
        </div>

        <motion.div initial={{ opacity: 0, x: 60 * dir }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease, delay: 0.3 }} className="mx-auto w-full max-w-2xl">
          <div className="float">
            <Image src="/assets/hero-mockup-blank.png" alt="Attendify – application de gestion et borne de pointage" width={2000} height={1440} priority sizes="(min-width: 1024px) 640px, 100vw" className="h-auto w-full drop-shadow-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
