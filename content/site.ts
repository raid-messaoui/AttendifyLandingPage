export const site = {
  name: "Attendify",
  email: "contact@attendify.dz",
  phones: ["+213 550 00 00 00", "+213 770 00 00 00"],
  whatsapp: "213550000000",
  address: { fr: "Alger, Algérie", en: "Algiers, Algeria", ar: "الجزائر العاصمة، الجزائر" },
  customerCount: 120,
  stats: { employees: 2500, punches: 2900000, satisfaction: 98 },
  clients: ["ceram", "elva", "royal", "sani"], // files in public/assets/logos
};

export const langs = ["fr", "en", "ar"] as const;
export type Lang = (typeof langs)[number];
