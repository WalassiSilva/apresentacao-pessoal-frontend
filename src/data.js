import images from "./assets/images/projects";
import icons from "./assets/icons"

export const projects = [
  {
    id: 1,
    title: "Money Manger",
    description: "A fullstack project built to showcase my skills and use as personal money manager.",
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
    description: "A website template designed to cater to clients from various industries, thanks to its enchanting design with animations and responsiveness.",
    img: images.templateSiteImg,
    iconLists: [icons.react, icons.tailwind, icons.typescript,],
    link: "https://template-paisagens.vercel.app/",
    github: "https://github.com/WalassiSilva/template-paisagens/",
  },
  {
    id: 3,
    title: "Dev Burger",
    description: "Dev burger is an online menu with a beautiful responsive design that integrates orders with WhatsApp.",
    img: images.devBurgerImg,
    iconLists: [icons.html, icons.tailwind, icons.js ],
    link: "https://devburger-cardapio.vercel.app/",
    github: "https://github.com/WalassiSilva/cardapio/",
  },

  {
    id: 4,
    title: "Relap - Landing Page",
    description: "A responsive landing page with simple and greate user experience.",
    img: images.relapImg,
    iconLists: [icons.react, icons.tailwind, icons.typescript],
    link: "https://relap-ten.vercel.app/",
    github: "https://github.com/WalassiSilva/relap",
  },
  {
    id: 5,
    title: "Dashboard",
    description: "Home page of a Dashboard created with dynamic data, great charts and beautiful design",
    img: images.dashboardImg,
    iconLists: [icons.react, icons.tailwind, icons.typescript,],
    link: "https://dashboard-nine-dun.vercel.app/",
    github: "https://github.com/WalassiSilva/nextjs-dashboard",
  },
  {
    id: 6,
    title: "Node API",
    description: "A node api it's an application for managing participants in in-person events using latest tech and documentation on Swagger.",
    img: images.passInImg,
    iconLists: [icons.nodejs, icons.tailwind, icons.fastify, icons.prisma, icons.swagger],   
    link: "https://github.com/WalassiSilva/node-api-NLW",
    github: "https://github.com/WalassiSilva/node-api-NLW",
  },
];
