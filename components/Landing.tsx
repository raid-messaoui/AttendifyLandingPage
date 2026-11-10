"use client";
import { MotionConfig, motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Plus, ChevronLeft, ChevronRight, Mail, Phone, MapPin, MessageCircle, Download, Monitor, Tablet, Check, Puzzle, Play, CheckCircle2 } from "lucide-react";
import type { Dict } from "@/content/dictionary";
import { site, langs, type Lang } from "@/content/site";
import { modules, moduleText, type Cat } from "@/content/features";
import { faqs } from "@/content/faq";
import { Hero } from "./Hero";
import { Icon, Reveal, SectionHeading, Counter, ease } from "./ui";

const sections = ["features", "pricing", "faq", "blog", "contact"] as const;

/* The PNG has transparent padding around the mark; crop it so the logo fills its box. */
function Logo({ size }: { size: number }) {
  return (
    <span className="relative block shrink-0 overflow-hidden" style={{ width: size, height: size }}>
      <img src="/assets/attendify_logo.png" alt="" width={size * 1.5} height={size * 1.5} className="absolute max-w-none" style={{ width: size * 1.5, height: size * 1.5, top: -size * 0.25, left: -size * 0.25 }} />
    </span>
  );
}

/* ------------------------------ Header ------------------------------ */
function Header({ d, lang }: { d: Dict; lang: Lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach((s) => { const el = document.getElementById(s); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", on); io.disconnect(); };
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const links: [string, string][] = [
    ["home", d.nav.home], ["features", d.nav.features], ["pricing", d.nav.pricing], ["faq", d.nav.faq], ["blog", d.nav.blog], ["contact", d.nav.contact],
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-line bg-white/80 shadow-sm backdrop-blur-lg" : "border-b border-transparent"}`}>
      <div className="container-x flex h-[72px] items-center justify-between px-5">
        <a href={`/${lang}`} className="flex items-center gap-2.5" aria-label="Attendify">
          <Logo size={38} />
          <span className="font-heading text-xl font-semibold tracking-tight">Attendify</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map(([id, label]) => (
            <a key={id} href={`/${lang}#${id}`} className="relative px-3 py-2 text-sm font-medium text-ink-600 hover:text-ink-900">
              {label}
              {active === id && <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-brand" />}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitch lang={lang} />
          <a href={`/${lang}#contact`} className="btn-secondary !py-2 text-sm">{d.nav.download}</a>
          <a href={`/${lang}#pricing`} className="btn-primary !py-2 text-sm">{d.nav.trial}</a>
        </div>
        <button className="icon-box lg:hidden" aria-label={d.nav.menu} aria-expanded={open} onClick={() => setOpen(true)}><Menu size={22} /></button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ x: d.dir === "rtl" ? "-100%" : "100%" }} animate={{ x: 0 }} exit={{ x: d.dir === "rtl" ? "-100%" : "100%" }} transition={{ duration: 0.4, ease }} className="fixed inset-0 z-50 flex flex-col bg-white p-6">
            <div className="flex justify-end"><button className="icon-box" aria-label="Close" onClick={() => setOpen(false)}><X size={22} /></button></div>
            <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
              {links.map(([id, label]) => <a key={id} onClick={() => setOpen(false)} href={`/${lang}#${id}`} className="rounded-xl px-3 py-3 font-heading text-2xl font-semibold hover:bg-brand-50">{label}</a>)}
            </nav>
            <div className="mt-auto space-y-4">
              <LangSwitch lang={lang} />
              <a href={`/${lang}#pricing`} onClick={() => setOpen(false)} className="btn-primary w-full">{d.nav.trial}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function LangSwitch({ lang }: { lang: Lang }) {
  return (
    <div className="flex rounded-full border border-line bg-white p-0.5 text-xs font-semibold" role="group" aria-label="Language">
      {langs.map((l) => (
        <a key={l} href={`/${l}`} hrefLang={l} aria-current={l === lang} className={`rounded-full px-3 py-1.5 uppercase ${l === lang ? "bg-brand text-white" : "text-ink-600 hover:text-ink-900"}`}>{l}</a>
      ))}
    </div>
  );
}

/* ----------------------------- Trust bar ---------------------------- */
function Trust({ d }: { d: Dict }) {
  const s = site.stats;
  return (
    <section className="border-y border-line bg-white px-5 py-12">
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {site.clients.map((c) => <img key={c} src={`/assets/logos/${c}.png`} alt={c} loading="lazy" className="h-12 w-auto max-w-[150px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" />)}
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[[s.employees, "", d.trust.employees], [s.punches, "", d.trust.punches], [s.satisfaction, "", d.trust.satisfaction]].map(([n, , l], i) => (
            <div key={i}>
              <div className="font-heading text-2xl font-bold text-brand-600 sm:text-4xl"><Counter to={n as number} suffix={i === 2 ? "%" : "+"} /></div>
              <div className="text-sm text-ink-600">{l as string}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- How it works -------------------------- */
function How({ d }: { d: Dict }) {
  const h = d.how;
  return (
    <section id="how" className="section bg-brand-50">
      <div className="container-x">
        <SectionHeading title={h.title} sub={h.sub} />
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal><div className="card h-full p-8"><div className="icon-box mb-4"><Tablet size={22} strokeWidth={1.75} /></div><h3 className="text-xl font-semibold">{h.kioskT}</h3><p className="mt-2 text-ink-600">{h.kioskD}</p></div></Reveal>
          <svg aria-hidden viewBox="0 0 40 80" className="mx-auto block h-20 w-10 lg:hidden">
            <motion.path d="M20 6 V74" stroke="#248DCE" strokeWidth="2.5" strokeLinecap="round" className="flow-line" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease }} />
            <motion.circle r="6" cx="20" fill="#23A6DE" animate={{ cy: [6, 74] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} />
          </svg>
          <svg aria-hidden viewBox="0 0 160 40" className="mx-auto hidden h-10 w-40 lg:block rtl:-scale-x-100">
            <motion.path d="M4 20 H156" stroke="#248DCE" strokeWidth="2.5" strokeLinecap="round" className="flow-line" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease }} />
            <motion.circle r="6" cy="20" fill="#23A6DE" animate={{ cx: [4, 156] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} />
          </svg>
          <Reveal delay={0.1}><div className="card h-full p-8"><div className="icon-box mb-4"><Monitor size={22} strokeWidth={1.75} /></div><h3 className="text-xl font-semibold">{h.mgmtT}</h3><p className="mt-2 text-ink-600">{h.mgmtD}</p></div></Reveal>
        </div>
        <Reveal delay={0.15} className="mt-6">
          <div className="card flex flex-col gap-4 border-dashed border-brand-400 p-8 sm:flex-row sm:items-center">
            <div className="icon-box shrink-0"><Puzzle size={22} strokeWidth={1.75} /></div>
            <div><h3 className="text-xl font-semibold">{h.custT}</h3><p className="mt-1 text-ink-600">{h.custD}</p></div>
          </div>
        </Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {h.steps.map(([t, p], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <li className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand font-heading font-bold text-white">{i + 1}</span>
                <div><h4 className="font-semibold">{t}</h4><p className="text-ink-600">{p}</p></div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------ Features ---------------------------- */
function Features({ d, lang }: { d: Dict; lang: Lang }) {
  const f = d.features;
  const [cat, setCat] = useState<Cat | "all">("all");
  const [sel, setSel] = useState<string | null>(null);
  const items = modules.filter((m) => cat === "all" || m.cat === cat);
  const tabs: (Cat | "all")[] = ["all", ...(Object.keys(f.cats) as Cat[])];
  const t = moduleText[lang];
  const current = modules.find((m) => m.id === sel);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setSel(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <section id="features" className="section bg-white">
      <div className="container-x">
        <SectionHeading title={f.title} sub={f.sub} />
        <div role="tablist" className="no-scrollbar mb-10 flex gap-2 overflow-x-auto pb-2 lg:flex-wrap lg:justify-center">
          {tabs.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${cat === c ? "text-white" : "text-ink-600 hover:bg-brand-50"}`}>
              {cat === c && <motion.span layoutId="tab-ind" className="absolute inset-0 -z-0 rounded-full bg-brand-600" transition={{ duration: 0.4, ease }} />}
              <span className="relative">{c === "all" ? f.all : f.cats[c]}</span>
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((m) => (
              <motion.article layout key={m.id} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.35, ease }} className="card p-6 transition hover:-translate-y-1 hover:shadow-lift">
                <div className="icon-box"><Icon name={m.icon} /></div>
                <h3 className="mt-4 text-lg font-semibold">{t[m.id][0]}</h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-ink-600">{t[m.id][1]}</p>
                <button onClick={() => setSel(m.id)} className="mt-4 text-sm font-semibold text-brand-600 hover:underline">{f.more} →</button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {current && (
          <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-ink-900/50 p-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
            <motion.div role="dialog" aria-modal="true" aria-label={t[current.id][0]} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3, ease }} onClick={(e) => e.stopPropagation()} className="card w-full max-w-lg p-8">
              <div className="flex items-start justify-between">
                <div className="icon-box"><Icon name={current.icon} /></div>
                <button aria-label={f.close} onClick={() => setSel(null)} className="rounded-full p-1 hover:bg-brand-50"><X size={20} /></button>
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{t[current.id][0]}</h3>
              <p className="mt-2 text-ink-600">{t[current.id][1]}</p>
              <div className="mt-6 space-y-2 rounded-2xl bg-brand-50 p-4" aria-hidden>
                {[80, 60, 70].map((w, i) => <div key={i} className="flex items-center gap-3"><i className="h-6 w-6 rounded-full bg-brand-100" /><div className="h-3 rounded-full bg-brand-400/50" style={{ width: `${w}%` }} /></div>)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ----------------------------- Spotlights --------------------------- */
const dotColor: Record<string, string> = { danger: "bg-danger", warning: "bg-warning", success: "bg-success" };

function Bars({ values, color }: { values: number[]; color: string }) {
  return (
    <div className="flex h-28 items-end gap-2">
      {values.map((v, i) => (
        <motion.div key={i} className={`flex-1 rounded-t-lg ${color}`} initial={{ height: 0 }} whileInView={{ height: `${v}%` }} viewport={{ once: true }} transition={{ duration: 0.8, ease, delay: i * 0.06 }} />
      ))}
    </div>
  );
}

function Spotlights({ d }: { d: Dict }) {
  const s = d.spot;
  const Bullets = ({ items }: { items: string[] }) => (
    <ul className="mt-6 space-y-3">{items.map((b) => <li key={b} className="flex gap-3"><Check className="mt-1 shrink-0 text-success" size={18} />{b}</li>)}</ul>
  );
  return (
    <section className="section bg-surface">
      <div className="container-x space-y-24">
        {/* Calls */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal><h2>{s.callsT}</h2><Bullets items={s.callsB} /></Reveal>
          <Reveal delay={0.1}>
            <div className="card p-6">
              <div className="rounded-2xl bg-brand-50 p-5">
                <div className="flex items-center gap-3"><span className="icon-box"><Icon name="BellRing" /></span><div><div className="font-semibold">{s.callsB[0]}</div><div className="text-sm text-ink-600">RH → Amine B.</div></div></div>
                <div className="mt-4 rounded-xl bg-white p-4 text-sm shadow-sm"><div className="font-semibold">{s.callsB[2]}</div>
                  {["Oui", "Non"].map((o) => <div key={o} className="mt-2 rounded-lg border border-line px-3 py-2">{o}</div>)}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        {/* Alerts */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 space-y-3 lg:order-1">
            {s.alertCards.map(([t, p, c], i) => (
              <motion.div key={t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, ease, delay: i * 0.15 }} className="card flex items-center gap-4 p-4">
                <span className="relative flex h-3 w-3"><span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${dotColor[c]}`} /><span className={`relative inline-flex h-3 w-3 rounded-full ${dotColor[c]}`} /></span>
                <div><div className="font-semibold">{t}</div><div className="text-sm text-ink-600">{p}</div></div>
              </motion.div>
            ))}
          </div>
          <Reveal className="order-1 lg:order-2"><h2>{s.alertsT}</h2><Bullets items={s.alertsB} /></Reveal>
        </div>
        {/* Stats */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal><h2>{s.statsT}</h2><Bullets items={s.statsB} /></Reveal>
          <Reveal delay={0.1}>
            <div className="card p-6">
              <div className="mb-5 flex flex-wrap gap-2 text-xs font-semibold">
                {[s.group, s.dept, s.func].map((c) => <span key={c} className="rounded-full border border-line px-3 py-1.5">{c} ▾</span>)}
                <span className="rounded-full bg-brand-50 px-3 py-1.5 text-brand-600 ring-1 ring-brand-100">{s.custom}</span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div><Bars values={[40, 65, 50, 80, 60]} color="bg-success" /><p className="mt-2 text-center text-sm text-ink-600">{s.just}</p></div>
                <div><Bars values={[25, 35, 20, 45, 30]} color="bg-danger" /><p className="mt-2 text-center text-sm text-ink-600">{s.unjust}</p></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Reports + badge ------------------------ */
function Reports({ d }: { d: Dict }) {
  const r = d.reports;
  const box = useRef<HTMLDivElement>(null);
  const tpl = useRef<HTMLDivElement>(null);
  const strip = useRef<HTMLDivElement>(null);
  const drag = useRef({ x: 0, left: 0, on: false });
  const spots = [["start-4 top-4 h-16 w-16 rounded-xl", 0], ["start-24 top-4", 1], ["start-24 top-12", 2], ["start-4 top-24", 3]] as const;
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading title={r.title} sub={r.sub} />
        <div className="relative">
          <button aria-label="Previous" onClick={() => strip.current?.scrollBy({ left: -300, behavior: "smooth" })} className="icon-box absolute -start-2 top-1/2 z-10 hidden -translate-y-1/2 bg-white shadow-card md:grid"><ChevronLeft size={20} className="rtl:rotate-180" /></button>
          <button aria-label="Next" onClick={() => strip.current?.scrollBy({ left: 300, behavior: "smooth" })} className="icon-box absolute -end-2 top-1/2 z-10 hidden -translate-y-1/2 bg-white shadow-card md:grid"><ChevronRight size={20} className="rtl:rotate-180" /></button>
          <div
            ref={strip}
            className="no-scrollbar -mx-5 flex cursor-grab snap-x gap-4 overflow-x-auto px-5 md:snap-none pb-4 active:cursor-grabbing md:mx-0 md:px-0"
            onPointerDown={(e) => { if (e.pointerType === "mouse") drag.current = { x: e.clientX, left: strip.current!.scrollLeft, on: true }; }}
            onPointerMove={(e) => { if (drag.current.on) strip.current!.scrollLeft = drag.current.left - (e.clientX - drag.current.x); }}
            onPointerUp={() => (drag.current.on = false)}
            onPointerLeave={() => (drag.current.on = false)}
          >
            {r.list.map((t, i) => (
              <div key={t} className="card min-w-[260px] shrink-0 snap-start select-none p-5 md:min-w-[280px]">
                <span className="icon-box mb-3"><Icon name="FileText" /></span>
                <div className="text-xs font-semibold text-brand-600">PDF · {i + 1}</div>
                <div className="mt-1 font-semibold">{t}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="card h-full p-6">
            <h3 className="font-semibold">{r.tplT}</h3>
            <p className="mb-4 text-sm text-ink-600">{r.tplD}</p>
            <div ref={tpl} className="relative h-64 overflow-hidden rounded-2xl border border-dashed border-brand-400 bg-brand-50">
              <div className="absolute inset-y-3 start-1/2 w-44 -translate-x-1/2 space-y-2 rounded-md bg-white p-4 shadow-card rtl:translate-x-1/2" aria-hidden>
                <div className="h-3 w-1/2 rounded bg-surface-2" />
                {[90, 75, 85, 60, 80, 70, 55].map((w, k) => <div key={k} className="h-2 rounded bg-surface-2" style={{ width: `${w}%` }} />)}
              </div>
              {r.tplFields.map((f, k) => (
                <motion.div key={k} drag dragConstraints={tpl} dragMomentum={false} whileDrag={{ scale: 1.06 }} className="absolute z-10 cursor-grab touch-none select-none rounded-md bg-brand-600 px-2.5 py-1 text-xs font-semibold text-white shadow" style={{ insetInlineStart: 12 + (k % 2) * 90, top: 14 + k * 26 }}>
                  {`{${f}}`}
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="h-full">
          <div className="card h-full p-6">
            <h3 className="font-semibold">{r.badgeT}</h3>
            <p className="mb-4 text-sm text-ink-600">{r.badgeD}</p>
            <div ref={box} className="relative h-64 overflow-hidden rounded-2xl border border-dashed border-brand-400 bg-brand-50">
              <div className="absolute inset-y-4 start-1/2 w-44 -translate-x-1/2 rounded-2xl bg-brand shadow-card rtl:translate-x-1/2" />
              {spots.map(([cls, i]) => (
                <motion.div key={i} drag dragConstraints={box} dragMomentum={false} whileDrag={{ scale: 1.06 }} className={`absolute z-10 cursor-grab touch-none select-none rounded-lg border border-white/70 bg-white px-3 py-2 text-xs font-semibold shadow ${i === 0 ? "grid h-16 w-16 place-items-center start-4 top-4" : i === 1 ? "start-24 top-6" : i === 2 ? "start-24 top-16" : "start-4 top-28"}`}>
                  {r.fields[i]}
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Security ---------------------------- */
function Security({ d }: { d: Dict }) {
  const s = d.security;
  return (
    <section className="section bg-brand-50">
      <div className="container-x">
        <SectionHeading title={s.title} sub={s.sub} />
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal><div className="card h-full p-6">
            <span className="icon-box mb-3"><Icon name="ShieldCheck" /></span><h3 className="font-semibold">{s.roles}</h3><p className="mb-4 text-sm text-ink-600">{s.rolesD}</p>
            <table className="w-full text-center text-xs"><thead><tr><th className="text-start" />{s.cols.map((c) => <th key={c} className="pb-2 font-semibold">{c}</th>)}</tr></thead>
              <tbody>{s.roleRows.map((r, i) => <tr key={r} className="border-t border-line"><td className="py-2 text-start font-medium">{r}</td>{[0, 1, 2].map((j) => <td key={j}>{j <= 2 - i ? <Check size={14} className="mx-auto text-success" /> : <span className="text-ink-400">–</span>}</td>)}</tr>)}</tbody></table>
          </div></Reveal>
          <Reveal delay={0.08}><div className="card h-full p-6">
            <span className="icon-box mb-3"><Icon name="History" /></span><h3 className="font-semibold">{s.audit}</h3><p className="mb-4 text-sm text-ink-600">{s.auditD}</p>
            <div className="space-y-2 text-xs">{s.log.map(([a, u, t]) => <div key={a} className="flex justify-between rounded-lg border border-line px-3 py-2"><span className="font-medium">{a}</span><span className="text-ink-600">{u} · {t}</span></div>)}</div>
          </div></Reveal>
          <Reveal delay={0.16}><div className="card h-full p-6">
            <span className="icon-box mb-3"><Icon name="Archive" /></span><h3 className="font-semibold">{s.archive}</h3><p className="text-sm text-ink-600">{s.archiveD}</p>
          </div></Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Pricing ----------------------------- */
function Pricing({ d, lang }: { d: Dict; lang: Lang }) {
  const p = d.pricing;
  return (
    <section id="pricing" className="section bg-surface">
      <div className="container-x">
        <SectionHeading title={p.title} sub={p.note} />
        <div className="grid items-stretch gap-6 pt-4 md:grid-cols-3">
          {p.plans.map((plan, i) => {
            return (
              <Reveal key={plan.name} delay={i * 0.08} className="h-full">
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25, ease }} className="card relative flex h-full flex-col overflow-hidden p-8 hover:shadow-lift">
                  <h3 className="font-heading text-3xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-ink-600">{plan.tag}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500 text-white"><Check size={13} strokeWidth={3} /></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 space-y-2 border-t border-dashed border-line pt-5 text-sm italic text-ink-600">
                    {plan.extras.map((e) => <li key={e} className="flex gap-2"><Check size={14} className="mt-1 shrink-0" />{e}</li>)}
                  </ul>
                  <a href={`/${lang}#contact`} className="mt-auto pt-8 text-sm font-semibold text-brand-500 hover:underline">{p.cta} <span className="inline-block rtl:rotate-180">→</span></a>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ----------------------------- Testimonials ------------------------- */
function Testimonials({ d }: { d: Dict }) {
  const t = d.testi;
  const [i, setI] = useState(0);
  const n = t.items.length;
  const [q, name, role, co, tag] = t.items[i];
  return (
    <section className="section bg-white">
      <div className="container-x max-w-3xl">
        <SectionHeading title={t.title} />
        <div className="card relative min-h-[240px] p-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease }}>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">{tag}</span>
              <p className="mt-5 font-heading text-xl font-medium">“{q}”</p>
              <div className="mt-5 font-semibold">{name}</div>
              <div className="text-sm text-ink-600">{role} · {co}</div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-5 flex items-center justify-center gap-4">
          <button aria-label="Previous" className="icon-box" onClick={() => setI((i + n - 1) % n)}><ChevronLeft size={20} className="rtl:rotate-180" /></button>
          <div className="flex gap-2">{t.items.map((_, k) => <i key={k} className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-brand-500" : "w-2 bg-brand-100"}`} />)}</div>
          <button aria-label="Next" className="icon-box" onClick={() => setI((i + 1) % n)}><ChevronRight size={20} className="rtl:rotate-180" /></button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FAQ ------------------------------- */
function Faq({ d, lang }: { d: Dict; lang: Lang }) {
  const [open, setOpen] = useState<number | null>(0);
  const list = faqs[lang];
  return (
    <section id="faq" className="section bg-surface">
      <div className="container-x">
        <SectionHeading title={d.faq.title} />
        <div className="grid items-start gap-4 lg:grid-cols-2">
          {list.map(([q, a], i) => {
            const o = open === i;
            return (
              <div key={q} className="card">
                <h3>
                  <button id={`q${i}`} aria-expanded={o} aria-controls={`a${i}`} onClick={() => setOpen(o ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-start font-body font-semibold">
                    {q}
                    <motion.span animate={{ rotate: o ? 45 : 0 }} transition={{ duration: 0.25, ease }} className="shrink-0 text-brand-600"><Plus size={20} /></motion.span>
                  </button>
                </h3>
                <motion.div id={`a${i}`} role="region" aria-labelledby={`q${i}`} initial={false} animate={{ height: o ? "auto" : 0, opacity: o ? 1 : 0 }} transition={{ duration: 0.3, ease }} className="overflow-hidden">
                  <p className="px-5 pb-5 text-ink-600">{a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Blog ------------------------------- */
function Blog({ d, lang }: { d: Dict; lang: Lang }) {
  const b = d.blog;
  return (
    <section id="blog" className="section bg-white">
      <div className="container-x">
        <SectionHeading title={b.title} />
        <div className="grid gap-6 md:grid-cols-3">
          {b.posts.map(([t, e, tag, date, min], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <article className="card overflow-hidden transition hover:-translate-y-1 hover:shadow-lift">
                <div className="h-40 bg-brand" style={{ backgroundImage: `linear-gradient(${90 + i * 25}deg,#23A6DE,#1279BE)` }} />
                <div className="p-6">
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">{tag}</span>
                  <h3 className="mt-3 text-lg font-semibold">{t}</h3>
                  <p className="mt-1.5 text-sm text-ink-600">{e}</p>
                  <div className="mt-4 text-xs text-ink-400">{date} · {min as number} {b.read}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center"><a href={`/${lang}#blog`} className="btn-secondary">{b.all}</a></div>
      </div>
    </section>
  );
}

/* ---------------------------- CTA + Contact ------------------------- */
function Cta({ d, lang }: { d: Dict; lang: Lang }) {
  const c = d.cta;
  return (
    <section className="px-5 py-12" style={{ background: "linear-gradient(180deg, #F8F8F8, #EAF6FC)" }}>
      <Reveal>
        <div className="container-x max-w-5xl rounded-[32px] border border-line bg-white px-6 py-14 text-center shadow-card sm:px-12">
          <h2 className="mx-auto max-w-3xl">
            {c.title}{" "}
            <span className="bg-brand bg-clip-text text-transparent">{c.title2}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-600">{c.sub}</p>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-x-12 gap-y-6 text-start sm:grid-cols-2">
            {c.items.map(([t, p]) => (
              <li key={t} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand-500" size={22} strokeWidth={1.75} />
                <div><div className="font-semibold">{t}</div><div className="text-sm text-ink-600">{p}</div></div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={`/${lang}#contact`} className="btn-primary">{d.hero.cta1}</a>
            <a href={`/${lang}#contact`} className="btn-secondary">{c.demo}</a>
          </div>
          <p className="mt-6 text-sm text-ink-600" dir="ltr">{site.phones[0]} · WhatsApp</p>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------- Demo video ------------------------- */
const DEMO_ID = "EEuLkml12aA"; // https://youtu.be/EEuLkml12aA

function Demo({ d }: { d: Dict }) {
  const [play, setPlay] = useState(false);
  return (
    <section id="demo" className="section bg-white">
      <div className="container-x max-w-4xl">
        <SectionHeading title={d.demo.title} sub={d.demo.sub} />
        <Reveal>
          <div className="card relative aspect-video overflow-hidden bg-ink-900">
            {play ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${DEMO_ID}?autoplay=1&rel=0`}
                title="Attendify demo"
                allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <button onClick={() => setPlay(true)} className="group absolute inset-0 grid place-items-center" aria-label={d.demo.play}>
                <img src={`https://i.ytimg.com/vi/${DEMO_ID}/maxresdefault.jpg`} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute inset-0 bg-ink-900/30 transition group-hover:bg-ink-900/10" />
                <span className="relative grid h-20 w-20 place-items-center rounded-full bg-brand text-white shadow-lift transition group-hover:scale-110"><Play size={32} fill="currentColor" className="rtl:-scale-x-100" /></span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}


function Contact({ d, lang }: { d: Dict; lang: Lang }) {
  const c = d.contact;
  const rows = [
    [Mail, c.email, <a key="m" href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>],
    [Phone, c.phone, <span key="p" dir="ltr" className="flex flex-col">{site.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>)}</span>],
    [MapPin, c.address, <span key="a">{site.address[lang]}</span>],
  ] as const;
  return (
    <section id="contact" className="section bg-white">
      <div className="container-x grid gap-10 lg:grid-cols-2">
        <Reveal>
          <h2>{c.title}</h2>
          <div className="mt-8 space-y-5">
            {rows.map(([I, l, v]) => (
              <div key={l} className="flex gap-4"><span className="icon-box"><I size={20} strokeWidth={1.75} /></span><div><div className="text-sm text-ink-400">{l}</div><div className="font-medium">{v}</div></div></div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`https://wa.me/${site.whatsapp}`} className="btn bg-success text-white"><MessageCircle size={18} />{c.whatsapp}</a>
            <a href="#" className="btn-secondary"><Download size={18} />{c.download}</a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form className="card space-y-4 p-6" onSubmit={(e) => e.preventDefault()}>
            {[["name", "text"], ["email", "email"]].map(([n, t]) => (
              <label key={n} className="block text-sm font-medium">{n === "name" ? "Nom / Name" : c.email}
                <input name={n} type={t} required className="mt-1.5 w-full rounded-md2 border border-line px-4 py-3 outline-none focus:border-brand-500" />
              </label>
            ))}
            <label className="block text-sm font-medium">Message
              <textarea name="message" rows={4} required className="mt-1.5 w-full rounded-md2 border border-line px-4 py-3 outline-none focus:border-brand-500" />
            </label>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <button className="btn-primary w-full">{d.nav.contact}</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer({ d, lang }: { d: Dict; lang: Lang }) {
  const f = d.footer;
  const col = (t: string, items: [string, string][]) => (
    <div><h4 className="mb-3 font-semibold text-white">{t}</h4><ul className="space-y-2 text-sm">{items.map(([l, h]) => <li key={l}><a href={h} className="text-brand-100 hover:text-white">{l}</a></li>)}</ul></div>
  );
  return (
    <footer className="bg-ink-900 px-5 pb-8 pt-16 text-brand-100">
      <div className="container-x grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <div className="flex items-center gap-2.5"><span className="rounded-xl bg-white p-1"><Logo size={36} /></span><span className="font-heading text-xl font-semibold text-white">Attendify</span></div>
          <p className="mt-4 max-w-xs text-sm">{f.desc}</p>
          <div className="mt-5"><LangSwitch lang={lang} /></div>
        </div>
        {col(f.product, [[d.nav.features, `/${lang}#features`], [d.nav.pricing, `/${lang}#pricing`], [d.nav.download, `/${lang}#contact`]])}
        {col(f.resources, [[d.nav.blog, `/${lang}#blog`], [d.nav.faq, `/${lang}#faq`]])}
        {col(f.company, [[d.nav.contact, `/${lang}#contact`], [f.partners, "#"]])}
        {col(f.legal, [[f.privacy, "#"], [f.terms, "#"]])}
      </div>
      <div className="container-x mt-12 border-t border-white/10 pt-6 text-sm">© {new Date().getFullYear()} Attendify. {f.rights}</div>
    </footer>
  );
}

/* ------------------------------- Landing ---------------------------- */
export function Landing({ lang, d }: { lang: Lang; d: Dict }) {
  const dir = d.dir === "rtl" ? -1 : 1;
  return (
    <MotionConfig reducedMotion="user">
      <Header d={d} lang={lang} />
      <main id="main">
        <Hero d={d} dir={dir} lang={lang} />
        <Trust d={d} />
        <Demo d={d} />
        <How d={d} />
        <Features d={d} lang={lang} />
        <Spotlights d={d} />
        <Reports d={d} />
        <Security d={d} />
        <Pricing d={d} lang={lang} />
        <Testimonials d={d} />
        <Faq d={d} lang={lang} />
        <Blog d={d} lang={lang} />
        <Cta d={d} lang={lang} />
        <Contact d={d} lang={lang} />
      </main>
      <Footer d={d} lang={lang} />
    </MotionConfig>
  );
}
