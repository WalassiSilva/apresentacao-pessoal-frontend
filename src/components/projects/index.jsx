import { AiOutlineGithub } from "react-icons/ai";
import { projects } from "../../data.js";
import NavLink from "../navbar/NavLink.jsx";
import Reveal from "../Reveal/index.jsx";

export default function Projects() {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="projects">
      <div>
        <h2 className="title gradient-text">Projetos</h2>
      </div>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            key={index}
            className={`flex justify-between flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex items-center pb-4">
                {project.iconLists.map((icon, index) => (
                  <div
                    key={icon}
                    className="border border-white/[0.2] rounded-full bg-black flex justify-center items-center lg:size-10 size-8"
                    style={{ transform: `translateX(-${5 * index * 2}px)` }}
                  >
                    <img src={icon} alt={icon} className="p-2 " />
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <NavLink href={project.link}>View Site</NavLink>
                <NavLink href={project.github}>
                  <AiOutlineGithub size={24} />
                </NavLink>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
