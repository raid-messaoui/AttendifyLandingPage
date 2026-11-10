import type { Metadata } from "next";
import { Poppins, Inter, Cairo } from "next/font/google";
import { langs, type Lang } from "@/content/site";
import { dict } from "@/content/dictionary";
import "../globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  const d = dict[params.lang] ?? dict.fr;
  return {
    title: d.meta.title,
    description: d.meta.description,
    icons: { icon: "/assets/attendify_logo.png" },
    alternates: { languages: { fr: "/fr", en: "/en", ar: "/ar" } },
  };
}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: Lang } }) {
  const lang = langs.includes(params.lang) ? params.lang : "fr";
  return (
    <html lang={lang} dir={dict[lang].dir} className={`${poppins.variable} ${inter.variable} ${cairo.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
