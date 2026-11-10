import { notFound } from "next/navigation";
import { langs, type Lang } from "@/content/site";
import { dict } from "@/content/dictionary";
import { faqs } from "@/content/faq";
import { Landing } from "@/components/Landing";

export default function Page({ params }: { params: { lang: Lang } }) {
  if (!langs.includes(params.lang)) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Attendify", operatingSystem: "Windows", applicationCategory: "BusinessApplication" },
      { "@type": "FAQPage", mainEntity: faqs[params.lang].map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Landing lang={params.lang} d={dict[params.lang]} />
    </>
  );
}
