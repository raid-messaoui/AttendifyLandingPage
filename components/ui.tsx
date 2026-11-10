"use client";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  KeyRound, LayoutDashboard, Clock, Users, BellRing, Archive, CalendarClock, ShieldCheck,
  FileOutput, BarChart3, AlertTriangle, History, Settings, FileText, IdCard, type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  KeyRound, LayoutDashboard, Clock, Users, BellRing, Archive, CalendarClock, ShieldCheck,
  FileOutput, BarChart3, AlertTriangle, History, Settings, FileText, IdCard,
};

export function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const C = icons[name] ?? Clock;
  return <C size={size} strokeWidth={1.75} />;
}

export const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ title, sub, center = true }: { title: string; sub?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <h2>{title}</h2>
      {sub && <p className="mt-4 text-lg text-ink-600">{sub}</p>}
    </Reveal>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease, onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v.toLocaleString("fr-FR")}{suffix}</span>;
}
