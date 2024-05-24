import { useSelector } from "react-redux";
import ContentTexts from "./contentTexts";
import Congress from "../../assets/imgs/Congress.webp";
import { FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { MdOutlineArrowOutward } from "react-icons/md";

// Define el tipo del estado
interface AppState {
  idiom: keyof typeof ContentTexts;
  darkMode: boolean;
}

export default function Projects() {
  // Obtener el idioma del estado
  const idiom = useSelector((state: AppState) => state.idiom);

  // Obtener el modo oscuro del estado
  const darkMode = useSelector((state: AppState) => state.darkMode);

  // Accedo al contenido del idioma
  const content = ContentTexts[idiom];

  return (
    <section
      className={`flex flex-col relative lg:justify-between lg:flex-row relative px-11 md:px-24 py-32 justify-center  gap-20 ${
        darkMode ? "dark" : ""
      } transition-colors duration-200 dark:bg-gray-800`}
    >
      {/* Contenido de la izquierda */}
      <div className="lg:sticky lg:top-14 w-full h-full lg:w-1/2">
        {/* Título */}
        <h2 className="text-5xl font-telegraf mb-12 text-balance text-center lg:text-left lg:text-6xl">
          <span className="dark:text-white">{content?.title.first}</span> <br />
          <span className="italic font-bold text-pinkMain">
            {content?.title.second}
          </span>
        </h2>
        {/* Descripción */}
        <p className="font-garet text-lg text-justify dark:text-white">
          {content?.description}
        </p>
      </div>
      {/* Contenido de la derecha */}
      <div className="flex flex-col justify-center items-center w-full gap-10 lg:w-1/2">
        {/* --------- Card Congress --------- */}
        <div
          className="w-full lg:w-3/4 h-auto rounded-lg shadow-md overflow-hidden"
          data-aos="fade-up"
        >
          {/* Icono de Github */}
          {/* <div className="flex flex-col gap-3 absolute z-10 top-4 right-4">
            <button className="bg-white p-1 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-125">
              <FaGithub className="text-3xl" />
            </button>
          </div> */}
          {/* Imagen de Congress */}
          <div className="w-full h-[15rem] bg-grayMain dark:bg-gray-700 overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={Congress}
              alt="Congress..."
              draggable="false"
              loading="lazy"
            />
          </div>
          {/* Texto de Congress */}
          <div className="p-7 bg-white dark:bg-gray-800">
            <p className="font-telegraf text-grayText text-xl text-balance lg:text-left dark:text-textDark">
              {content?.cardCongress.title}
            </p>
            <div className="flex justify-between items-center pt-5">
              <div className="flex justify-center items-center gap-3 text-2xl text-grayText dark:gray-700">
                <BiLogoTypescript className="hover:text-colorTypescript" />
                <DiReact className="hover:text-colorReact" />
                <FaHtml5 className="hover:text-colorHTML" />
                <RiTailwindCssFill className="hover:text-colorTailwind" />
                <FaGitAlt className="hover:text-colorGit" />
              </div>
              {/* Boton de reedirigir */}
              <a href="https://congreso.somosawaq.org/" target="_blank">
                <button className="bg-white p-2 rounded-full border-2 border-black transition duration-300 ease-in-out hover:bg-orangeBoton dark:border-orangeBoton dark:bg-gray-700 dark:hover:bg-orangeBoton dark:text-white dark:hover:text-gray-800">
                  <MdOutlineArrowOutward className="text-2xl" />
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Card Congress */}
        <div
          className="relative w-full lg:w-3/4 h-auto rounded-lg shadow-md overflow-hidden"
          data-aos="fade-up"
        >
          {/* Icono de Github */}
          <div className="flex flex-col gap-3 absolute z-10 top-4 right-4">
            <button className="bg-white p-1 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-125">
              <FaGithub className="text-3xl" />
            </button>
          </div>
          {/* Imagen de Congress */}
          <div className="w-full h-[15rem] relative bg-grayMain dark:bg-gray-700">
            <img
              className="absolute w-4/5 h-auto right-[-20%] top-[10%] shadow-lg rounded-lg"
              src={Congress}
              alt="Congress..."
              draggable="false"
              loading="lazy"
            />
          </div>
          {/* Texto de Congress */}
          <div className="p-7 bg-white dark:bg-gray-800">
            <p className="font-telegraf text-xl text-center text-balance lg:text-left dark:text-textDark">
              {content?.cardCongress.title}
            </p>
            <div className="flex justify-between items-center pt-5">
              <div className="flex justify-center items-center gap-3 text-2xl text-grayText dark:gray-700">
                <BiLogoTypescript className="hover:text-colorTypescript" />
                <FaHtml5 className="hover:text-colorHTML" />
                <RiTailwindCssFill className="hover:text-colorTailwind" />
                <FaGitAlt className="hover:text-colorGit" />
              </div>
              {/* Boton de reedirigir */}
              <button className="bg-white p-2 rounded-full border-2 border-black transition duration-300 ease-in-out hover:bg-orangeBoton dark:border-orangeBoton dark:bg-gray-700 dark:hover:bg-orangeBoton dark:text-white dark:hover:text-gray-800">
                <MdOutlineArrowOutward className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
        {/* Card Congress */}
        <div
          className="relative w-full lg:w-3/4 h-auto rounded-lg shadow-md overflow-hidden"
          data-aos="fade-up"
        >
          {/* Icono de Github */}
          <div className="flex flex-col gap-3 absolute z-10 top-4 right-4">
            <button className="bg-white p-1 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-125">
              <FaGithub className="text-3xl" />
            </button>
          </div>
          {/* Imagen de Congress */}
          <div className="w-full h-[15rem] relative bg-grayMain dark:bg-gray-700">
            <img
              className="absolute w-4/5 h-auto right-[-20%] top-[10%] shadow-lg rounded-lg"
              src={Congress}
              alt="Congress..."
              draggable="false"
              loading="lazy"
            />
          </div>
          {/* Texto de Congress */}
          <div className="p-7 bg-white dark:bg-gray-800">
            <p className="font-telegraf text-xl text-center text-balance lg:text-left dark:text-textDark">
              {content?.cardCongress.title}
            </p>
            <div className="flex justify-between items-center pt-5">
              <div className="flex justify-center items-center gap-3 text-2xl text-grayText dark:gray-700">
                <BiLogoTypescript className="hover:text-colorTypescript" />
                <FaHtml5 className="hover:text-colorHTML" />
                <RiTailwindCssFill className="hover:text-colorTailwind" />
                <FaGitAlt className="hover:text-colorGit" />
              </div>
              {/* Boton de reedirigir */}
              <button className="bg-white p-2 rounded-full border-2 border-black transition duration-300 ease-in-out hover:bg-orangeBoton dark:border-orangeBoton dark:bg-gray-700 dark:hover:bg-orangeBoton dark:text-white dark:hover:text-gray-800">
                <MdOutlineArrowOutward className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
