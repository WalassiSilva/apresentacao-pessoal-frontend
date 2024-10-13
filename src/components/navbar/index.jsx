import { useRef, useState } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import Navlinks from "./NavLinks";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });
  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      className="fixed top-3 z-10 flex justify-center w-[100vw]"
    >
      <nav className=" flex justify-between gap-1 md:gap-3 rounded-3xl p-3 ">
        <Navlinks />
      </nav>
    </motion.div>
  );
}
