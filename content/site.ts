export const site = {
  name: "Attendify",
  email: "anissemessaoui2016@gmail.com",
  phones: ["0797 05 75 98"],
  whatsapp: "213797057598",
  address: { fr: "Sétif, Algérie", en: "Setif, Algeria", ar: "سطيف، الجزائر" },
  customerCount: 120,
  stats: { employees: 2500, punches: 2000000, satisfaction: 98 },
  clients: ["ceram", "elva", "royal", "sani"], // files in public/assets/logos
};

export const langs = ["fr", "en", "ar"] as const;
export type Lang = (typeof langs)[number];
