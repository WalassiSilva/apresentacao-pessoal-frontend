
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

import images from "../../assets/images";

export default function Hero() {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Dev",
              1000,
              "Frontend Dev",
              1000,
              "Backend Dev",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold font-mono text-purple-300 text-xl md:text-5xl mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            OLÁ! EU SOU <br />
            <span className="gradient-text">WALASSI SILVA</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            Sou um Desenvolvedor Web Fascinado por Tecnologia e Puzzles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row justify-center items-center gap-6 my-4 md:mb-0 md:justify-start"
          >
            <div className="flex gap-6 flex-row text-4xl md:text-6xl  z-30">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/walassisilva"
                target="_blank"
                className="text-zinc-400"
              >
                <AiOutlineGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/walassi-silva"
                target="_blank"
                className="text-blue-600"
              >
                <AiOutlineLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={images.hero}
          className="w-[300px] md:w-[450px] bg-black rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="absolute inset-0 block -z-10 ">
      </div>
    </div>
  );
}
