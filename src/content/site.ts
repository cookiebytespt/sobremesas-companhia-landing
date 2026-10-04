// All editable content for the landing page lives here.
// Replace the TODO values with the client's real details before publishing.

export const site = {
  name: "Sobremesas & Companhia",
  tagline: "Fabrico caseiro",
  location: "Santo Tirso",
  instagram: "https://www.instagram.com/sobremesas.e.companhia/",
  facebook: "https://www.facebook.com/companhiaesobremesas/",
  // TODO: confirm with the client. Digits only, with country code (e.g. "351912345678").
  whatsapp: "",
  // TODO: confirm with the client.
  email: "",
};

export type OccasionId =
  | "casamentos"
  | "batizados"
  | "comunhoes"
  | "aniversarios"
  | "bolachas"
  | "catering";

export const occasions: { id: OccasionId; label: string; icon: string }[] = [
  { id: "casamentos", label: "Casamentos", icon: "rings" },
  { id: "batizados", label: "Batizados", icon: "dove" },
  { id: "comunhoes", label: "Comunhões", icon: "cross" },
  { id: "aniversarios", label: "Aniversários", icon: "candle" },
  { id: "bolachas", label: "Bolachas", icon: "cookie" },
  { id: "catering", label: "Catering", icon: "platter" },
];

// Gallery. Photos in /public/images (the current ones come from the client's Instagram feed).
// Items without `src` render as a soft placeholder.
export const gallery: {
  title: string;
  occasion: OccasionId;
  src?: string;
  tall?: boolean;
}[] = [
  { title: "Bolo de casamento com flores do campo e noivos em miniatura", occasion: "casamentos", src: "/images/instagram/casamento-flores.jpg", tall: true },
  { title: "Bolachas decoradas de ténis", occasion: "bolachas", src: "/images/instagram/bolachas-tenis.jpg" },
  { title: "Bolo de batizado em espiral com figura de bebé", occasion: "batizados", src: "/images/instagram/batizado-espiral.jpg", tall: true },
  { title: "Bolo de comunhão com cruz e nomes em chocolate", occasion: "comunhoes", src: "/images/instagram/comunhao-cruz.jpg", tall: true },
  { title: "Mini tartes de fruta e bolachas para uma festa", occasion: "catering", src: "/images/instagram/catering-mini-tartes.jpg" },
  { title: "Bolo verde com nome em relevo e figura de bebé", occasion: "aniversarios", src: "/images/instagram/aniversario-leonardo.jpg", tall: true },
  { title: "Quadro de boas-vindas com flores para um evento", occasion: "catering", src: "/images/instagram/evento-boas-vindas.jpg", tall: true },
  { title: "Bolo de aniversário com tema de futebol", occasion: "aniversarios", src: "/images/instagram/aniversario-futebol.jpg" },
];

export const steps = [
  {
    title: "Conte-nos o seu evento",
    body: "Data, número de convidados e o que imagina. Respondemos em menos de 24 horas.",
  },
  {
    title: "Recebe uma proposta à medida",
    body: "Sugerimos bolo, doces e menu dentro do seu orçamento. Ajustamos até ficar como quer.",
  },
  {
    title: "Tratamos de tudo no dia",
    body: "Entregamos e montamos a mesa no local, para que só tenha de aproveitar.",
  },
];

export const serviceArea = ["Santo Tirso", "Porto", "Gaia", "Braga", "Guimarães", "Viana do Castelo"];
