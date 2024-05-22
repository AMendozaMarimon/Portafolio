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

// Define el tipo del estado
interface AppState {
  darkMode: boolean;
}

export default function Skills() {
  // Accedo al estado de darkMode
  const darkMode = useSelector((state: AppState) => state.darkMode);

  return (
    <section
      className={`w-full relative h-auto flex justify-center items-center bg-grayMain px-11 md:px-24 mb-40 py-14 ${
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
      <div className="flex flex-wrap justify-center items-center gap-6 text-4xl text-grayText md:gap-10 dark:text-white">
        <IoLogoJavascript
          className="transition-transform duration-300 transform hover:scale-125 hover:text-colorJavascript"
          title="JavaScript"
        />
        <BiLogoTypescript
          className="transition-transform duration-300 transform hover:scale-125 hover:text-colorTypescript"
          title="TypeScript"
        />
        <FaHtml5
          className="transition-transform duration-300 transform hover:scale-125 hover:text-colorHTML"
          title="HTML"
        />
        <IoLogoCss3
          className="transition-transform duration-300 transform hover:scale-125 hover:text-colorCSS"
          title="CSS"
        />
        <DiReact
          className="transition-transform duration-300 transform hover:scale-125 hover:text-colorReact"
          title="React"
        />
        <RiTailwindCssFill
          className="transition-transform duration-300 transform hover:scale-125 hover:text-colorTailwind"
          title="Tailwind"
        />
        <SiRedux
          className="transition-transform duration-300 transform hover:scale-125 hover:text-colorRedux"
          title="Redux"
        />
        <FaNode
          className="transition-transform duration-300 transform hover:scale-125 hover:text-colorNode"
          title="Node"
        />
        <SiExpress
          className="transition-transform duration-300 transform hover:scale-125 hover:text-black"
          title="Express"
        />
        <BiLogoPostgresql
          className="transition-transform duration-300 transform hover:scale-125 hover:text-colorPostgresql"
          title="PostgreSQL"
        />
        <FaGitAlt
          className="transition-transform duration-300 transform hover:scale-125 hover:text-colorGit"
          title="Git"
        />
        <FaGithub
          className="transition-transform duration-300 transform hover:scale-125 hover:text-black"
          title="Github"
        />
      </div>
    </section>
  );
}
