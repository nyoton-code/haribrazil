export const TANINO_ACCENT = "#78b943";
export const TANINO_VIOLET = "#8b6bb0";

export const WHATSAPP_NUMBER = "212670560540";

export const PRICES = {
  shampoo: "Sur devis",
  protein: "Sur devis",
  mask: "Sur devis",
  collection: "Sur devis",
};


export const PRODUCTS = [
  {
    number: "01",
    key: "shampoo",
    name: "Hydrating Shampoo",
    size: "500 ml · Soin à domicile",
    image: "/images/tanino/tanino-shampoo.png",
    detail:
      "L’emballage présente un shampooing hydratant destiné à un usage à domicile, sans sel ni parabènes.",
  },
  {
    number: "02",
    key: "protein",
    name: "Brazilian Protein",
    size: "1 L · Usage professionnel",
    image: "/images/tanino/tanino-protein.png",
    detail:
      "L’emballage de Brazilian Protein mentionne 20 huiles premium, 0 % de formaldéhyde et une formule sans parabènes.",
  },
  {
    number: "03",
    key: "mask",
    name: "Hair Hydrating Mask",
    size: "1 kg · Usage professionnel",
    image: "/images/tanino/tanino-hydration.png",
    detail:
      "L’emballage présente un masque hydratant et porte la mention « Nutri & Shine ».",
  },
] as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}