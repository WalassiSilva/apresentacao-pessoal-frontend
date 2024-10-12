
import { FaHome, FaTools, FaPencilRuler } from "react-icons/fa";
import { SlNotebook } from "react-icons/sl";
import NavLink from "./NavLink";

export default function Navlinks() {
  return (
    <>
      <NavLink href="/">
        <FaHome size={24} />
        <span className="hidden font-bold md:block">Home</span>
      </NavLink>
      <NavLink href="/about">
        <SlNotebook size={24}  />
        <span className="hidden font-bold md:block">About</span>
      </NavLink>
      <NavLink href="/projects">
        <FaTools size={24} />
        <span className="hidden font-bold md:block">Projects</span>
      </NavLink>
      <NavLink href="/skills">
        <FaPencilRuler size={24} />
        <span className="hidden font-bold md:block">Skills</span>
      </NavLink>
    </>
  );
}
