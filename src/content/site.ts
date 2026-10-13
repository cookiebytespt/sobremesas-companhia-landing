// Contact details, occasions and the gallery. Page text in each language lives in
// src/i18n/dictionaries/ (pt.ts is the reference); gallery captions are below, per language.

import type { Locale } from "@/i18n/config";

export const site = {
  name: "Sobremesas & Companhia",
  tagline: "Feito com amor",
  location: "Santo Tirso",
  instagram: "https://www.instagram.com/sobremesas.e.companhia/",
  facebook: "https://www.facebook.com/profile.php?id=1087851201236726",
  // Digits only, with country code.
  whatsapp: "+351961906158",
  email: "",
};

export type OccasionId =
  | "casamentos"
  | "batizados"
  | "comunhoes"
  | "aniversarios"
  | "sobremesas"
  | "bolachas"
  | "catering"
  | "decoracao";

export const occasions: { id: OccasionId; icon: string }[] = [
  { id: "casamentos", icon: "rings" },
  { id: "batizados", icon: "dove" },
  { id: "comunhoes", icon: "cross" },
  { id: "aniversarios", icon: "candle" },
  { id: "sobremesas", icon: "cupcake" },
  { id: "bolachas", icon: "cookie" },
  { id: "catering", icon: "platter" },
  { id: "decoracao", icon: "vase" },
];

// Gallery. Photos in /public/images: /instagram (from the client's Instagram feed, 640px) and
// /galeria (client originals, exported at 1400px max, metadata stripped). The order mixes
// occasions so the first rows of the "all" view show a bit of everything.
// Items without `src` render as a soft placeholder. `title` is the caption and the image's
// alt text, so every language needs one.
export const gallery: {
  title: Record<Locale, string>;
  occasion: OccasionId;
  src?: string;
  tall?: boolean;
}[] = [
  {
    occasion: "casamentos", src: "/images/instagram/casamento-flores.jpg", tall: true,
    title: {
      pt: "Bolo de casamento com flores do campo e noivos em miniatura",
      en: "Wedding cake with wildflowers and a miniature bride and groom",
      es: "Tarta de boda con flores silvestres y novios en miniatura",
      fr: "Gâteau de mariage aux fleurs des champs et mariés miniatures",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-mousse-copinhos.jpg", tall: true,
    title: {
      pt: "Copinhos de mousse de chocolate alinhados na mesa de doces",
      en: "Chocolate mousse cups lined up on the dessert table",
      es: "Vasitos de mousse de chocolate alineados en la mesa dulce",
      fr: "Verrines de mousse au chocolat alignées sur la table des desserts",
    },
  },
  {
    occasion: "batizados", src: "/images/galeria/batizado-mesa-o-meu-batizado.jpg", tall: true,
    title: {
      pt: "Mesa de batizado com painéis florais e bolo em colunas",
      en: "Christening table with floral panels and a pillared cake",
      es: "Mesa de bautizo con paneles florales y tarta con columnas",
      fr: "Table de baptême avec panneaux floraux et gâteau à colonnes",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-mesa-salgados.jpg", tall: true,
    title: {
      pt: "Mesa de salgados e enchidos com o quadro Sobremesas & Companhia",
      en: "Table of savoury bites and cured meats with the Sobremesas & Companhia sign",
      es: "Mesa de bocados salados y embutidos con el cartel de Sobremesas & Companhia",
      fr: "Table de bouchées salées et charcuterie avec le panneau Sobremesas & Companhia",
    },
  },
  {
    occasion: "comunhoes", src: "/images/galeria/comunhao-bolo-terco.jpg", tall: true,
    title: {
      pt: "Bolo de Primeira Comunhão com terço e nome em dourado",
      en: "First Communion cake with a rosary and the name in gold",
      es: "Tarta de Primera Comunión con rosario y nombre en dorado",
      fr: "Gâteau de première communion avec chapelet et prénom doré",
    },
  },
  {
    occasion: "aniversarios", src: "/images/galeria/aniversario-arco-baloes.jpg", tall: true,
    title: {
      pt: "Bolo de aniversário com arco de balões no jardim",
      en: "Birthday cake with a balloon arch in the garden",
      es: "Tarta de cumpleaños con arco de globos en el jardín",
      fr: "Gâteau d'anniversaire avec arche de ballons dans le jardin",
    },
  },
  {
    occasion: "decoracao", src: "/images/galeria/decoracao-mesa-velas.jpg", tall: true,
    title: {
      pt: "Mesa comprida com velas e toalha estampada",
      en: "Long table with candles and a printed tablecloth",
      es: "Mesa larga con velas y mantel estampado",
      fr: "Longue table avec bougies et nappe imprimée",
    },
  },
  {
    occasion: "bolachas", src: "/images/instagram/bolachas-tenis.jpg",
    title: {
      pt: "Bolachas decoradas de ténis",
      en: "Tennis-themed decorated cookies",
      es: "Galletas decoradas de tenis",
      fr: "Biscuits décorés sur le thème du tennis",
    },
  },
  {
    occasion: "casamentos", src: "/images/galeria/casamento-bolo-orquideas.jpg", tall: true,
    title: {
      pt: "Bolo de casamento de dois andares com orquídeas e bolo com monograma",
      en: "Two-tier wedding cake with orchids, and a monogrammed cake",
      es: "Tarta de boda de dos pisos con orquídeas y tarta con monograma",
      fr: "Gâteau de mariage à deux étages avec orchidées et gâteau monogrammé",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-bolo-bolacha.jpg",
    title: {
      pt: "Bolo de bolacha com fios de chocolate branco",
      en: "Portuguese biscuit cake drizzled with white chocolate",
      es: "Tarta de galleta con hilos de chocolate blanco",
      fr: "Gâteau de biscuits avec filets de chocolat blanc",
    },
  },
  {
    occasion: "batizados", src: "/images/instagram/batizado-espiral.jpg", tall: true,
    title: {
      pt: "Bolo de batizado em espiral com figura de bebé",
      en: "Spiral christening cake with a baby figure",
      es: "Tarta de bautizo en espiral con figura de bebé",
      fr: "Gâteau de baptême en spirale avec figurine de bébé",
    },
  },
  {
    occasion: "catering", src: "/images/instagram/catering-mini-tartes.jpg",
    title: {
      pt: "Mini tartes de fruta e bolachas para uma festa",
      en: "Mini fruit tarts and cookies for a party",
      es: "Mini tartaletas de fruta y galletas para una fiesta",
      fr: "Mini tartelettes aux fruits et biscuits pour une fête",
    },
  },
  {
    occasion: "comunhoes", src: "/images/instagram/comunhao-cruz.jpg", tall: true,
    title: {
      pt: "Bolo de comunhão com cruz e nomes em chocolate",
      en: "Communion cake with a cross and names in chocolate",
      es: "Tarta de comunión con cruz y nombres de chocolate",
      fr: "Gâteau de communion avec croix et prénoms en chocolat",
    },
  },
  {
    occasion: "aniversarios", src: "/images/instagram/aniversario-leonardo.jpg", tall: true,
    title: {
      pt: "Bolo verde com nome em relevo e figura de bebé",
      en: "Green cake with a raised name and a baby figure",
      es: "Tarta verde con nombre en relieve y figura de bebé",
      fr: "Gâteau vert avec prénom en relief et figurine de bébé",
    },
  },
  {
    occasion: "decoracao", src: "/images/galeria/decoracao-mesa-rosa.jpg", tall: true,
    title: {
      pt: "Mesa posta em rosa e dourado",
      en: "Table set in pink and gold",
      es: "Mesa vestida en rosa y dorado",
      fr: "Table dressée en rose et or",
    },
  },
  {
    occasion: "casamentos", src: "/images/galeria/casamento-mesa-jardim.jpg", tall: true,
    title: {
      pt: "Mesa do bolo dos noivos no jardim, com arco de flores brancas",
      en: "The couple's cake table in the garden, with an arch of white flowers",
      es: "Mesa de la tarta de los novios en el jardín, con arco de flores blancas",
      fr: "Table du gâteau des mariés dans le jardin, avec arche de fleurs blanches",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-fruta-cheesecake.jpg", tall: true,
    title: {
      pt: "Travessa de fruta fresca e cheesecake de frutos vermelhos",
      en: "Platter of fresh fruit and a berry cheesecake",
      es: "Bandeja de fruta fresca y cheesecake de frutos rojos",
      fr: "Plateau de fruits frais et cheesecake aux fruits rouges",
    },
  },
  {
    occasion: "batizados", src: "/images/galeria/batizado-bolo-espigas.jpg", tall: true,
    title: {
      pt: "Bolo de batizado com espigas, folhagem e nome em dourado",
      en: "Christening cake with wheat ears, foliage and the name in gold",
      es: "Tarta de bautizo con espigas, follaje y nombre en dorado",
      fr: "Gâteau de baptême avec épis de blé, feuillage et prénom doré",
    },
  },
  {
    occasion: "catering", src: "/images/instagram/evento-boas-vindas.jpg", tall: true,
    title: {
      pt: "Quadro de boas-vindas com flores para um evento",
      en: "Floral welcome sign for an event",
      es: "Cartel de bienvenida con flores para un evento",
      fr: "Panneau de bienvenue fleuri pour un événement",
    },
  },
  {
    occasion: "comunhoes", src: "/images/galeria/comunhao-bolo-azul.jpg", tall: true,
    title: {
      pt: "Bolo de comunhão de dois andares em tons de azul com hortênsias",
      en: "Two-tier communion cake in shades of blue with hydrangeas",
      es: "Tarta de comunión de dos pisos en tonos azules con hortensias",
      fr: "Gâteau de communion à deux étages dans des tons bleus, avec hortensias",
    },
  },
  {
    occasion: "aniversarios", src: "/images/instagram/aniversario-futebol.jpg",
    title: {
      pt: "Bolo de aniversário com tema de futebol",
      en: "Football-themed birthday cake",
      es: "Tarta de cumpleaños con temática de fútbol",
      fr: "Gâteau d'anniversaire sur le thème du football",
    },
  },
  {
    occasion: "decoracao", src: "/images/galeria/decoracao-mesa-toile.jpg",
    title: {
      pt: "Mesa com toalha toile, candelabros e pratos de parede",
      en: "Table with a toile tablecloth, candelabras and wall plates",
      es: "Mesa con mantel toile de Jouy, candelabros y platos de pared",
      fr: "Table avec nappe en toile de Jouy, candélabres et assiettes murales",
    },
  },
  {
    occasion: "casamentos", src: "/images/galeria/casamento-tiramisu-iniciais.jpg",
    title: {
      pt: "Tiramisu com as iniciais dos noivos em açúcar",
      en: "Tiramisu with the couple's initials in sugar",
      es: "Tiramisú con las iniciales de los novios en azúcar",
      fr: "Tiramisu aux initiales des mariés en sucre",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-tiramisu-oreo.jpg",
    title: {
      pt: "Tiramisu e quadrados de Oreo vistos de cima",
      en: "Tiramisu and Oreo squares from above",
      es: "Tiramisú y cuadrados de Oreo vistos desde arriba",
      fr: "Tiramisu et carrés aux Oreo vus du dessus",
    },
  },
  {
    occasion: "batizados", src: "/images/galeria/batizado-bolo-folhas.jpg", tall: true,
    title: {
      pt: "Bolo \"O meu batizado\" com folhas verdes e pérolas douradas",
      en: "Christening cake reading \"O meu batizado\" with green leaves and gold pearls",
      es: "Tarta de bautizo «O meu batizado» con hojas verdes y perlas doradas",
      fr: "Gâteau de baptême « O meu batizado » avec feuilles vertes et perles dorées",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-carrinho-bebidas.jpg",
    title: {
      pt: "Carrinho de mão com bebidas no gelo",
      en: "Wheelbarrow of drinks on ice",
      es: "Carretilla con bebidas en hielo",
      fr: "Brouette de boissons sur glace",
    },
  },
  {
    occasion: "comunhoes", src: "/images/galeria/comunhao-bolo-pomba.jpg",
    title: {
      pt: "Bolo de comunhão com pomba, cruz e flores cor-de-rosa",
      en: "Communion cake with a dove, a cross and pink flowers",
      es: "Tarta de comunión con paloma, cruz y flores rosas",
      fr: "Gâteau de communion avec colombe, croix et fleurs roses",
    },
  },
  {
    occasion: "aniversarios", src: "/images/galeria/aniversario-bolo-coroa.jpg",
    title: {
      pt: "Bolo rosa de aniversário com coroa e laço lilás",
      en: "Pink birthday cake with a crown and a lilac bow",
      es: "Tarta de cumpleaños rosa con corona y lazo lila",
      fr: "Gâteau d'anniversaire rose avec couronne et nœud lilas",
    },
  },
  {
    occasion: "decoracao", src: "/images/galeria/decoracao-mesa-renda.jpg", tall: true,
    title: {
      pt: "Mesa posta com caminho de renda e flores",
      en: "Table set with a lace runner and flowers",
      es: "Mesa vestida con camino de encaje y flores",
      fr: "Table dressée avec chemin de table en dentelle et fleurs",
    },
  },
  {
    occasion: "casamentos", src: "/images/galeria/casamento-aperitivos-quadro.jpg", tall: true,
    title: {
      pt: "Mesa de aperitivos com quadro de boas-vindas dos noivos",
      en: "Appetiser table with the couple's welcome sign",
      es: "Mesa de aperitivos con el cartel de bienvenida de los novios",
      fr: "Table d'apéritif avec le panneau de bienvenue des mariés",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-trifle.jpg", tall: true,
    title: {
      pt: "Trifle de frutos vermelhos e copinhos de mousse",
      en: "Berry trifle and mousse cups",
      es: "Trifle de frutos rojos y vasitos de mousse",
      fr: "Trifle aux fruits rouges et verrines de mousse",
    },
  },
  {
    occasion: "batizados", src: "/images/galeria/batizado-bolo-cruz-perolas.jpg",
    title: {
      pt: "Bolo vintage com cruz de pérolas e flores de chantilly",
      en: "Vintage cake with a pearl cross and whipped-cream flowers",
      es: "Tarta vintage con cruz de perlas y flores de nata",
      fr: "Gâteau vintage avec croix de perles et fleurs en chantilly",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-marisco-sapateira.jpg",
    title: {
      pt: "Travessa de marisco com sapateira recheada",
      en: "Seafood platter with dressed crab",
      es: "Bandeja de marisco con buey de mar relleno",
      fr: "Plateau de fruits de mer avec tourteau farci",
    },
  },
  {
    occasion: "aniversarios", src: "/images/galeria/aniversario-bolo-princesas.jpg", tall: true,
    title: {
      pt: "Bolo de princesas com coroa e balões lilás",
      en: "Princess cake with a crown and lilac balloons",
      es: "Tarta de princesas con corona y globos lilas",
      fr: "Gâteau de princesses avec couronne et ballons lilas",
    },
  },
  {
    occasion: "decoracao", src: "/images/galeria/decoracao-mesas-redondas.jpg",
    title: {
      pt: "Mesas redondas postas para um jantar",
      en: "Round tables set for a dinner",
      es: "Mesas redondas vestidas para una cena",
      fr: "Tables rondes dressées pour un dîner",
    },
  },
  {
    occasion: "casamentos", src: "/images/galeria/casamento-bolo-laco.jpg",
    title: {
      pt: "Bolo branco com laço e selo de lacre com iniciais",
      en: "White cake with a bow and an initialled wax seal",
      es: "Tarta blanca con lazo y sello de lacre con iniciales",
      fr: "Gâteau blanc avec nœud et cachet de cire aux initiales",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-parede-donuts.jpg", tall: true,
    title: {
      pt: "Mesa de sobremesas com parede de donuts e cheesecake",
      en: "Dessert table with a doughnut wall and cheesecake",
      es: "Mesa de postres con pared de donuts y cheesecake",
      fr: "Table des desserts avec mur de donuts et cheesecake",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-buffet-petiscos.jpg", tall: true,
    title: {
      pt: "Buffet de petiscos, salgados e enchidos ao ar livre",
      en: "Outdoor buffet of snacks, savoury bites and cured meats",
      es: "Bufé al aire libre de tapas, bocados salados y embutidos",
      fr: "Buffet en plein air de tapas, bouchées salées et charcuterie",
    },
  },
  {
    occasion: "aniversarios", src: "/images/galeria/aniversario-primeiro-ano.jpg", tall: true,
    title: {
      pt: "Bolo de primeiro aniversário com cupcakes e balões rosa",
      en: "First birthday cake with cupcakes and pink balloons",
      es: "Tarta de primer cumpleaños con cupcakes y globos rosas",
      fr: "Gâteau de premier anniversaire avec cupcakes et ballons roses",
    },
  },
  {
    occasion: "decoracao", src: "/images/galeria/decoracao-mesa-sala.jpg",
    title: {
      pt: "Mesa de refeição posta numa sala com vista",
      en: "Dining table set in a room with a view",
      es: "Mesa de comedor vestida en una sala con vistas",
      fr: "Table dressée dans une salle avec vue",
    },
  },
  {
    occasion: "casamentos", src: "/images/galeria/casamento-bolos-arco-noite.jpg", tall: true,
    title: {
      pt: "Bolos dos noivos à noite, com arco de flores e velas",
      en: "The couple's cakes at night, with a flower arch and candles",
      es: "Tartas de los novios de noche, con arco de flores y velas",
      fr: "Gâteaux des mariés de nuit, avec arche fleurie et bougies",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-copinhos-cerejas.jpg",
    title: {
      pt: "Copinhos de sobremesa, cerejas e bolo de chocolate",
      en: "Dessert cups, cherries and chocolate cake",
      es: "Vasitos de postre, cerezas y tarta de chocolate",
      fr: "Verrines, cerises et gâteau au chocolat",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-tabua-queijos.jpg", tall: true,
    title: {
      pt: "Tábua de queijos, presunto e fruta",
      en: "Board of cheeses, cured ham and fruit",
      es: "Tabla de quesos, jamón y fruta",
      fr: "Planche de fromages, jambon cru et fruits",
    },
  },
  {
    occasion: "aniversarios", src: "/images/galeria/aniversario-bolo-folhagem.jpg",
    title: {
      pt: "Bolo de aniversário com folhagem pintada e balões verdes",
      en: "Birthday cake with painted foliage and green balloons",
      es: "Tarta de cumpleaños con follaje pintado y globos verdes",
      fr: "Gâteau d'anniversaire avec feuillage peint et ballons verts",
    },
  },
  {
    occasion: "decoracao", src: "/images/galeria/decoracao-mesa-lareira.jpg", tall: true,
    title: {
      pt: "Mesa redonda posta junto à lareira",
      en: "Round table set by the fireplace",
      es: "Mesa redonda vestida junto a la chimenea",
      fr: "Table ronde dressée près de la cheminée",
    },
  },
  {
    occasion: "casamentos", src: "/images/galeria/casamento-tiramisu-tabuleiros.jpg", tall: true,
    title: {
      pt: "Tabuleiros de tiramisu com as iniciais dos noivos",
      en: "Trays of tiramisu with the couple's initials",
      es: "Bandejas de tiramisú con las iniciales de los novios",
      fr: "Plateaux de tiramisu aux initiales des mariés",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-tartes-espigas.jpg", tall: true,
    title: {
      pt: "Tartes de fruta e bolos com arranjo de espigas",
      en: "Fruit tarts and cakes with a wheat-ear arrangement",
      es: "Tartas de fruta y bizcochos con un arreglo de espigas",
      fr: "Tartes aux fruits et gâteaux avec une composition d'épis de blé",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-bacalhau-forno.jpg",
    title: {
      pt: "Bacalhau no forno com batata a murro",
      en: "Oven-baked salt cod with crushed roast potatoes",
      es: "Bacalao al horno con patatas asadas aplastadas",
      fr: "Morue au four avec pommes de terre rôties écrasées",
    },
  },
  {
    occasion: "decoracao", src: "/images/galeria/decoracao-mesa-toile-casticais.jpg", tall: true,
    title: {
      pt: "Mesa comprida com toalha toile e casticais",
      en: "Long table with a toile tablecloth and candlesticks",
      es: "Mesa larga con mantel toile de Jouy y candeleros",
      fr: "Longue table avec nappe en toile de Jouy et chandeliers",
    },
  },
  {
    occasion: "casamentos", src: "/images/galeria/casamento-mesa-toalha-bordada.jpg", tall: true,
    title: {
      pt: "Mesa de aperitivos do casamento com toalha bordada a azul",
      en: "Wedding appetiser table with a blue-embroidered tablecloth",
      es: "Mesa de aperitivos de la boda con mantel bordado en azul",
      fr: "Table d'apéritif du mariage avec nappe brodée de bleu",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-tarte-natas.jpg",
    title: {
      pt: "Tarte de natas com caramelo na mesa de doces",
      en: "Cream and caramel tart on the dessert table",
      es: "Tarta de nata con caramelo en la mesa dulce",
      fr: "Tarte à la crème et au caramel sur la table des desserts",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-croquetes-hortensias.jpg", tall: true,
    title: {
      pt: "Croquetes e salgados com hortênsias",
      en: "Croquettes and savoury bites with hydrangeas",
      es: "Croquetas y bocados salados con hortensias",
      fr: "Croquettes et bouchées salées avec hortensias",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-fruta-esculpida.jpg",
    title: {
      pt: "Fruta esculpida com melão, kiwi e frutos vermelhos",
      en: "Carved fruit with melon, kiwi and berries",
      es: "Fruta tallada con melón, kiwi y frutos rojos",
      fr: "Fruits sculptés avec melon, kiwi et fruits rouges",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-tabuas-vista-cima.jpg",
    title: {
      pt: "Tábuas de enchidos, queijos e salgados vistas de cima",
      en: "Boards of cured meats, cheeses and savoury bites from above",
      es: "Tablas de embutidos, quesos y bocados salados vistas desde arriba",
      fr: "Planches de charcuterie, fromages et bouchées salées vues du dessus",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-cerejas-morangos.jpg", tall: true,
    title: {
      pt: "Taças de cerejas e morangos frescos",
      en: "Bowls of fresh cherries and strawberries",
      es: "Cuencos de cerezas y fresas frescas",
      fr: "Coupes de cerises et de fraises fraîches",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-buffet-jardim.jpg", tall: true,
    title: {
      pt: "Buffet de salgados num jardim",
      en: "Savoury buffet in a garden",
      es: "Bufé de bocados salados en un jardín",
      fr: "Buffet salé dans un jardin",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-mesa-pudim.jpg", tall: true,
    title: {
      pt: "Mesa de sobremesas com pudim, trifle e parede de donuts",
      en: "Dessert table with caramel pudding, trifle and a doughnut wall",
      es: "Mesa de postres con flan, trifle y pared de donuts",
      fr: "Table des desserts avec flan caramel, trifle et mur de donuts",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-tabua-enchidos.jpg", tall: true,
    title: {
      pt: "Tábua de enchidos, queijos e uvas",
      en: "Board of cured meats, cheeses and grapes",
      es: "Tabla de embutidos, quesos y uvas",
      fr: "Planche de charcuterie, fromages et raisins",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-cheesecake-lotus.jpg", tall: true,
    title: {
      pt: "Cheesecake de bolacha Lotus com parede de donuts",
      en: "Lotus biscuit cheesecake with a doughnut wall",
      es: "Cheesecake de galleta Lotus con pared de donuts",
      fr: "Cheesecake aux biscuits Lotus avec mur de donuts",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-travessas-petiscos.jpg",
    title: {
      pt: "Travessas de petiscos, rissóis e espetadas",
      en: "Platters of snacks, rissoles and skewers",
      es: "Bandejas de tapas, empanadillas y brochetas",
      fr: "Plateaux de tapas, rissoles et brochettes",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-bolo-piscina.jpg",
    title: {
      pt: "Bolo de bolacha junto à piscina, com castiçal azul",
      en: "Biscuit cake by the pool, with a blue candlestick",
      es: "Tarta de galleta junto a la piscina, con candelero azul",
      fr: "Gâteau de biscuits au bord de la piscine, avec chandelier bleu",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-buffet-tenda.jpg", tall: true,
    title: {
      pt: "Buffet de salgados numa tenda para um evento",
      en: "Savoury buffet in a marquee for an event",
      es: "Bufé de bocados salados en una carpa para un evento",
      fr: "Buffet salé sous une tente pour un événement",
    },
  },
  {
    occasion: "sobremesas", src: "/images/galeria/sobremesas-fruta-etagere.jpg",
    title: {
      pt: "Étagère de fruta fresca junto à piscina",
      en: "Tiered stand of fresh fruit by the pool",
      es: "Expositor de pisos con fruta fresca junto a la piscina",
      fr: "Présentoir à étages de fruits frais au bord de la piscine",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-assado-batatas.jpg",
    title: {
      pt: "Assado no forno com batatas e cenoura",
      en: "Oven roast with potatoes and carrots",
      es: "Asado al horno con patatas y zanahoria",
      fr: "Rôti au four avec pommes de terre et carottes",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-salada-grao.jpg",
    title: {
      pt: "Saladas de grão com ovo para servir",
      en: "Chickpea salads with egg, ready to serve",
      es: "Ensaladas de garbanzos con huevo listas para servir",
      fr: "Salades de pois chiches à l'œuf prêtes à servir",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-petiscos-vista-cima.jpg", tall: true,
    title: {
      pt: "Petiscos, tostas e queijos vistos de cima",
      en: "Snacks, toasts and cheeses from above",
      es: "Tapas, tostas y quesos vistos desde arriba",
      fr: "Tapas, toasts et fromages vus du dessus",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-espetadas-tomate.jpg", tall: true,
    title: {
      pt: "Espetadas de tomate e mozzarella e salgados",
      en: "Tomato and mozzarella skewers with savoury bites",
      es: "Brochetas de tomate y mozzarella con bocados salados",
      fr: "Brochettes tomate-mozzarella et bouchées salées",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-mesa-comprida.jpg", tall: true,
    title: {
      pt: "Mesa comprida de salgados e croquetes",
      en: "Long table of savoury bites and croquettes",
      es: "Mesa larga de bocados salados y croquetas",
      fr: "Longue table de bouchées salées et croquettes",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-mesa-flores.jpg",
    title: {
      pt: "Mesa de aperitivos com flores silvestres",
      en: "Appetiser table with wildflowers",
      es: "Mesa de aperitivos con flores silvestres",
      fr: "Table d'apéritif avec fleurs sauvages",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-salgados-rissois.jpg", tall: true,
    title: {
      pt: "Mesa de salgados, rissóis e tábuas de enchidos",
      en: "Table of savoury bites, rissoles and cured-meat boards",
      es: "Mesa de bocados salados, empanadillas y tablas de embutidos",
      fr: "Table de bouchées salées, rissoles et planches de charcuterie",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-gambas-salgados.jpg",
    title: {
      pt: "Gambas, empadas e salgados num pátio de pedra",
      en: "Prawns, little pies and savoury bites in a stone courtyard",
      es: "Gambas, empanadas y bocados salados en un patio de piedra",
      fr: "Crevettes, petites tourtes et bouchées salées dans une cour en pierre",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-mariscada.jpg",
    title: {
      pt: "Mariscada com mexilhões, gambas e lagostins",
      en: "Seafood feast with mussels, prawns and langoustines",
      es: "Mariscada con mejillones, gambas y cigalas",
      fr: "Assortiment de fruits de mer avec moules, crevettes et langoustines",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-gambas-quadro-flores.jpg", tall: true,
    title: {
      pt: "Travessa de gambas e saladas com quadro de flores",
      en: "Platter of prawns and salads with a floral sign",
      es: "Bandeja de gambas y ensaladas con cartel de flores",
      fr: "Plateau de crevettes et salades avec panneau fleuri",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-salada-massa.jpg",
    title: {
      pt: "Salada de massa em taça de vidro",
      en: "Pasta salad in a glass bowl",
      es: "Ensalada de pasta en un cuenco de cristal",
      fr: "Salade de pâtes dans un saladier en verre",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-salgados-flores-prensadas.jpg", tall: true,
    title: {
      pt: "Tabuleiro de salgados com quadro de flores prensadas",
      en: "Tray of savoury bites with a pressed-flower frame",
      es: "Bandeja de bocados salados con cuadro de flores prensadas",
      fr: "Plateau de bouchées salées avec cadre de fleurs séchées",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-buffet-pratos-tacas.jpg",
    title: {
      pt: "Buffet com pratos e taças prontos para os convidados",
      en: "Buffet with plates and glasses ready for the guests",
      es: "Bufé con platos y copas listos para los invitados",
      fr: "Buffet avec assiettes et verres prêts pour les invités",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-folhados-tenda.jpg", tall: true,
    title: {
      pt: "Cesto de folhados e salgados numa tenda",
      en: "Basket of puff pastries and savoury bites in a marquee",
      es: "Cesta de hojaldres y bocados salados en una carpa",
      fr: "Panier de feuilletés et bouchées salées sous une tente",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-focaccia.jpg",
    title: {
      pt: "Focaccia e petiscos no buffet",
      en: "Focaccia and snacks on the buffet",
      es: "Focaccia y tapas en el bufé",
      fr: "Focaccia et tapas au buffet",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-croissants-recheados.jpg", tall: true,
    title: {
      pt: "Croissants recheados e tábuas de queijos e enchidos",
      en: "Filled croissants and boards of cheese and cured meats",
      es: "Cruasanes rellenos y tablas de quesos y embutidos",
      fr: "Croissants garnis et planches de fromages et charcuterie",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-bacalhau-gratinado.jpg",
    title: {
      pt: "Tabuleiro de bacalhau gratinado",
      en: "Tray of salt cod au gratin",
      es: "Bandeja de bacalao gratinado",
      fr: "Plat de morue gratinée",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-espetadas-gipsofila.jpg",
    title: {
      pt: "Espetadas e salgados com flores de gipsófila",
      en: "Skewers and savoury bites with baby's breath",
      es: "Brochetas y bocados salados con paniculata",
      fr: "Brochettes et bouchées salées avec gypsophile",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-buffet-piscina.jpg",
    title: {
      pt: "Buffet junto à piscina com petiscos e enchidos",
      en: "Poolside buffet with snacks and cured meats",
      es: "Bufé junto a la piscina con tapas y embutidos",
      fr: "Buffet au bord de la piscine avec tapas et charcuterie",
    },
  },
  {
    occasion: "catering", src: "/images/galeria/catering-prato-gratinado.jpg",
    title: {
      pt: "Prato de gratinado com batata a murro",
      en: "Gratin dish with crushed roast potatoes",
      es: "Fuente de gratinado con patatas asadas aplastadas",
      fr: "Plat gratiné avec pommes de terre rôties écrasées",
    },
  },
];

export const serviceArea = ["Santo Tirso", "Porto", "Gaia", "Braga", "Guimarães", "Viana do Castelo"];
