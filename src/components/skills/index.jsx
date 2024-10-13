import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import {
  DiCss3,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiSass,
} from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiPrisma,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      {/* <Reveal> */}
      <h2 className="text-3xl font-bold mb-4 text-center">Stack</h2>
      <p className="text-center mb-8">
        Essas são as tecnologias que eu uso para desenvolver minhas aplicações
      </p>

      <div
        className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                    "
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                            w-full md:w-1/2"
          >
            <h3 className="text-xl font-bold mb-4 text-center">
              {skill.category}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skill.technologies.map((tech, idx) => (
                <div key={idx} className={`${tech.color} flex items-center space-x-2 md:flex-col md:justify-center `}>
                  <span className="text-2xl">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* </Reveal> */}
    </div>
  );
}
const skills = [
  {
    category: "Frontend",
    technologies: [
      {
        id: "react",
        name: "React",
        icon: <DiReact />,
        color: "text-[#61dafb]",
      },
      {
        id: "react-router",
        name: "Router Dom",
        icon: <SiReactrouter />,
        color: "text-[#f44250]",
      },
      {
        id: "js",
        name: "JavaScript",
        icon: <DiJsBadge />,
        color: "text-[#f0db4f]",
      },
      {
        id: "ts",
        name: "TypeScript",
        icon: <BiLogoTypescript />,
        color: "text-[#3178c6]",
      },
      {
        id: "tailwind",
        name: "Tailwind",
        icon: <SiTailwindcss />,
        color: "text-[#38bdf8]",
      },

      { id: "sass", name: "Sass", icon: <DiSass />, color: "text-[#bf4080]" },
      { id: "css", name: "CSS3", icon: <DiCss3 />, color: "text-[#1572b6]" },
      { id: "html", name: "HTML5", icon: <DiHtml5 />, color: "text-[#e44d26]" },
      {
        id: "next",
        name: "NextJs",
        icon: <RiNextjsFill   />,
        color: "text-[#fff]",
      },
    ],
  },
  {
    category: "Backend",
    technologies: [
      {
        id: "pg",
        name: "postgreSQL",
        icon: <BiLogoPostgresql />,
        color: "text-[#31648c]",
      },
      {
        id: "prisma",
        name: "Prisma ORM",
        icon: <SiPrisma />,
        color: "text-[#fff]",
      },
      {
        id: "express",
        name: "Express",
        icon: <SiExpress />,
        color: "text-[#fff]",
      },
      { id: "git", name: "Git", icon: <DiGit />, color: "text-[#e44d26]" },
      {
        id: "github",
        name: "Github",
        icon: <DiGithubBadge />,
        color: "text-[#333]",
      },
      {
        id: "node",
        name: "Node.js",
        icon: <DiNodejsSmall />,
        color: "text-[#83cd29]",
      },
    ],
  },
];
// const frontendSkills = [
//   {
//     id: "react",
//     name: "React",
//     icon: <DiReact />,
//     color: "text-[#61dafb]",
//   },
//   {
//     id: "react-router",
//     name: "Router Dom",
//     icon: <SiReactrouter />,
//     color: "text-[#f44250]",
//   },
//   {
//     id: "js",
//     name: "JavaScript",
//     icon: <DiJsBadge />,
//     color: "text-[#f0db4f]",
//   },
//   {
//     id: "ts",
//     name: "TypeScript",
//     icon: <BiLogoTypescript />,
//     color: "text-[#3178c6]",
//   },
//   {
//     id: "tailwind",
//     name: "Tailwind",
//     icon: <SiTailwindcss />,
//     color: "text-[#38bdf8]",
//   },

//   { id: "sass", name: "Sass", icon: <DiSass />, color: "text-[#bf4080]" },
//   { id: "css", name: "CSS3", icon: <DiCss3 />, color: "text-[#1572b6]" },
//   { id: "html", name: "HTML5", icon: <DiHtml5 />, color: "text-[#e44d26]" },
//   {
//     id: "styled",
//     name: "Styled Components",
//     icon: <SiStyledcomponents />,
//     color: "text-[#98613b]",
//   },
// ];

// const backendSkills = [
//   {
//     id: "pg",
//     name: "postgreSQL",
//     icon: <BiLogoPostgresql />,
//     color: "text-[#31648c]",
//   },
//   {
//     id: "prisma",
//     name: "Prisma ORM",
//     icon: <SiPrisma />,
//     color: "text-[#fff]",
//   },
//   {
//     id: "express",
//     name: "Express",
//     icon: <SiExpress />,
//     color: "text-[#fff]",
//   },
//   { id: "git", name: "Git", icon: <DiGit />, color: "text-[#e44d26]" },
//   {
//     id: "github",
//     name: "Github",
//     icon: <DiGithubBadge />,
//     color: "text-[#333]",
//   },
//   {
//     id: "node",
//     name: "Node.js",
//     icon: <DiNodejsSmall />,
//     color: "text-[#83cd29]",
//   },
// ];
