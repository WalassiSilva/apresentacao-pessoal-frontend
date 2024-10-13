import images from "./assets/images/projects";
import icons from "./assets/icons"

export const projects = [
  {
    id: 1,
    title: "Money Manger",
    description: "Projeto fullstack para gerenciamento financeiro pessoal contendo gráficos, filtros por data e categorias.",
    img: images.moneyManagerImg,
    iconLists: [
      icons.react,
      icons.nodejs,
      icons.prisma,
      icons.postgresql,
      icons.tailwind,
      icons.typescript,

    ],
    link: "https://github.com/WalassiSilva/money-manager",
    github: "https://github.com/WalassiSilva/money-manager",
  },
  {
    id: 2,
    title: "Template site",
    description: "Template de site com animações, responsividade e alternador de temas.",
    img: images.templateSiteImg,
    iconLists: [icons.react, icons.tailwind, icons.typescript,],
    link: "https://template-paisagens.vercel.app/",
    github: "https://github.com/WalassiSilva/template-paisagens/",
  },
  {
    id: 3,
    title: "Dev Burger",
    description: "Dev burger é um belo cardapio online que integra o pedido com WhatsApp.",
    img: images.devBurgerImg,
    iconLists: [icons.html, icons.tailwind, icons.js ],
    link: "https://devburger-cardapio.vercel.app/",
    github: "https://github.com/WalassiSilva/cardapio/",
  },

  {
    id: 4,
    title: "Relap - Landing Page",
    description: "Landing page com belo design e responsividade.",
    img: images.relapImg,
    iconLists: [icons.react, icons.tailwind, icons.typescript],
    link: "https://relap-ten.vercel.app/",
    github: "https://github.com/WalassiSilva/relap",
  },
  {
    id: 5,
    title: "Dashboard",
    description: "Dashboard feito com gráficos dinámicos e design minimalista",
    img: images.dashboardImg,
    iconLists: [icons.react, icons.tailwind, icons.typescript,],
    link: "https://dashboard-nine-dun.vercel.app/",
    github: "https://github.com/WalassiSilva/nextjs-dashboard",
  },
  {
    id: 6,
    title: "Node API",
    description: "API feita com Noje.Js para gerenciamento de eventos e participantes.",
    img: images.passInImg,
    iconLists: [icons.nodejs, icons.tailwind, icons.fastify, icons.prisma, icons.swagger],   
    link: "https://github.com/WalassiSilva/node-api-NLW",
    github: "https://github.com/WalassiSilva/node-api-NLW",
  },
];
