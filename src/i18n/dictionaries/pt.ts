// Portuguese is the reference dictionary: its shape defines `Dictionary`, so the other
// languages fail to type-check if a key is missing.
// Placeholders like {count} are filled in with fmt() from src/i18n/config.ts.
const pt = {
  meta: {
    title: "Sobremesas & Companhia: bolos, doces e catering em Santo Tirso",
    description:
      "Bolos decorados, bolachas, mesas de doces e catering feitos com amor para casamentos, batizados, comunhões e aniversários no distrito do Porto e Minho.",
    ogDescription: "Bolos, doces e catering feitos com amor para os seus dias especiais.",
  },
  header: {
    home: "Sobremesas & Companhia, início",
    nav: "Principal",
    language: "Idioma",
    links: { criacoes: "Criações", comoFunciona: "Como funciona", onde: "Onde estamos" },
    quote: "Pedir orçamento",
    quoteShort: "Orçamento",
    menu: "Menu",
    closeMenu: "Fechar menu",
  },
  wordmark: { tagline: "Feito com amor em {location}" },
  hero: {
    title: "Bolos e doces feitos com amor, para os dias que contam.",
    intro:
      "Casamentos, batizados, comunhões e aniversários. Bolos decorados, bolachas, mesas de doces e catering, de Santo Tirso a Viana do Castelo.",
    quote: "Pedir orçamento",
    work: "Ver criações",
    alts: {
      wedding: "Bolo de casamento com flores do campo",
      cookies: "Bolachas decoradas",
      tarts: "Mini tartes de fruta",
    },
  },
  occasions: {
    casamentos: "Casamentos",
    batizados: "Batizados",
    comunhoes: "Comunhões",
    aniversarios: "Aniversários",
    sobremesas: "Sobremesas",
    bolachas: "Bolachas",
    catering: "Catering",
    decoracao: "Decoração",
  },
  creations: {
    title: "O que fazemos",
    intro: "Cada bolo é pensado para a pessoa e para a festa. Escolha uma ocasião para ver trabalhos anteriores.",
    instagram: "Mais no Instagram",
    filter: "Filtrar por ocasião",
    showingAll: "A mostrar todos os trabalhos",
    showingOccasion: "A mostrar {count} trabalhos de {occasion}",
    more: "Ver mais criações ({count})",
    showAll: "Mostrar todas as ocasiões",
  },
  steps: {
    title: "Como encomendar",
    intro: "Somos um casal e tratamos de cada encomenda do princípio ao fim. Menus para 15 a 200 convidados.",
    items: [
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
    ],
  },
  area: {
    title: "Levamos a festa até si",
    body: "A cozinha fica em {location}. Entregamos e montamos em todo o distrito do Porto e no Minho.",
  },
  quote: {
    title: "Peça o seu orçamento",
    intro: "Diga-nos o essencial e respondemos em menos de 24 horas com uma proposta à medida. Sem compromisso.",
    whatsappLink: "Prefere falar já? Envie-nos uma mensagem no WhatsApp.",
    instagramLink: "Prefere falar por mensagem? Estamos no Instagram.",
    sent: {
      title: "Pedido preparado",
      whatsapp: "Abrimos o WhatsApp com o seu pedido. Só falta carregar em enviar.",
      email: "Abrimos o seu email com o pedido. Só falta carregar em enviar.",
      none: "O canal de contacto ainda não está configurado neste site. Por agora, envie-nos uma mensagem pelo Instagram.",
      again: "Fazer outro pedido",
    },
    fields: {
      occasion: "Ocasião",
      choose: "Escolha uma",
      otherEvent: "Outro evento",
      date: "Data do evento",
      guests: "Número de convidados",
      guestsPlaceholder: "Ex.: 60",
      lookingFor: "O que procura",
      products: ["Bolo decorado", "Bolachas", "Mesa de doces", "Catering"],
      details: "Conte-nos mais",
      optional: "(opcional)",
      detailsPlaceholder: "Tema, cores, sabores preferidos, local do evento…",
      name: "Nome",
      contact: "Telemóvel ou email",
    },
    submit: "Pedir orçamento",
    emailSubject: "Pedido de orçamento",
    // The message the visitor sends (WhatsApp or email), in their language.
    message: {
      greeting: "Olá! Gostava de pedir um orçamento.",
      occasion: "Ocasião",
      date: "Data",
      guests: "Convidados",
      interest: "Interesse",
      toBeDecided: "a definir",
      details: "Detalhes",
      name: "Nome",
      contact: "Contacto",
    },
  },
  footer: { siteBy: "Site por" },
};

export type Dictionary = typeof pt;
export default pt;
