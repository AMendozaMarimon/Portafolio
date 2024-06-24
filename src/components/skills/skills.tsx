import { DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Contact from "../../assets/imgs/Contact.webp";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

// Define el tipo del estado
interface AppState {
  darkMode: boolean;
}

export default function Skills() {
  // Accedo al estado de darkMode
  const darkMode = useSelector((state: AppState) => state.darkMode);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section
      className={`w-full relative h-auto flex justify-center items-center bg-grayMain px-11 md:px-24 py-14 ${
        darkMode ? "dark" : ""
      } dark:bg-gray-700 transition-colors duration-200`}
    >
      {/* Img de fondo */}
      <div
        className="absolute w-[8rem] top-[-15%] md:top-[-15%] right-[10%]"
        data-aos="flip-up"
      >
        <img src={Contact} alt="Star" draggable="false" loading="lazy" />
      </div>
      {/* Iconos de habilidades */}
      <motion.ul
        className="flex flex-wrap justify-center items-center gap-6 text-4xl text-grayText md:gap-10 dark:text-white"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.li variants={item}>
          <IoLogoJavascript
            className="transition-transform duration-300 transform hover:scale-125 hover:text-colorJavascript"
            title="JavaScript"
          />
        </motion.li>
        <motion.li variants={item}>
          <BiLogoTypescript
            className="transition-transform duration-300 transform hover:scale-125 hover:text-colorTypescript"
            title="TypeScript"
          />
        </motion.li>
        <motion.li variants={item}>
          <FaHtml5
            className="transition-transform duration-300 transform hover:scale-125 hover:text-colorHTML"
            title="HTML"
          />
        </motion.li>
        <motion.li variants={item}>
          <IoLogoCss3
            className="transition-transform duration-300 transform hover:scale-125 hover:text-colorCSS"
            title="CSS"
          />
        </motion.li>
        <motion.li variants={item}>
          <DiReact
            className="transition-transform duration-300 transform hover:scale-125 hover:text-colorReact"
            title="React"
          />
        </motion.li>
        <motion.li variants={item}>
          <RiTailwindCssFill
            className="transition-transform duration-300 transform hover:scale-125 hover:text-colorTailwind"
            title="Tailwind"
          />
        </motion.li>
        <motion.li variants={item}>
          <SiRedux
            className="transition-transform duration-300 transform hover:scale-125 hover:text-colorRedux"
            title="Redux"
          />
        </motion.li>
        <motion.li variants={item}>
          <FaNode
            className="transition-transform duration-300 transform hover:scale-125 hover:text-colorNode"
            title="Node"
          />
        </motion.li>
        <motion.li variants={item}>
          <SiExpress
            className="transition-transform duration-300 transform hover:scale-125 hover:text-black"
            title="Express"
          />
        </motion.li>
        <motion.li variants={item}>
          <BiLogoPostgresql
            className="transition-transform duration-300 transform hover:scale-125 hover:text-colorPostgresql"
            title="PostgreSQL"
          />
        </motion.li>
        <motion.li variants={item}>
          <FaGitAlt
            className="transition-transform duration-300 transform hover:scale-125 hover:text-colorGit"
            title="Git"
          />
        </motion.li>
        <motion.li variants={item}>
          <FaGithub
            className="transition-transform duration-300 transform hover:scale-125 hover:text-black"
            title="Github"
          />
        </motion.li>
      </motion.ul>
    </section>
  );
}
