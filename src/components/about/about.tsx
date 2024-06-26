import { useSelector } from "react-redux";
import { GrDownload } from "react-icons/gr";
import { DonwloadPDFNotification } from "../../assets/alerts/alerts";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import img from "../../assets/imgs/lineS.webp";
import Cv from "../../assets/Cv/Aimar_Mendoza_CV.pdf";
import ContentTexts from "./contentTexts";

// Define el tipo del estado
interface AppState {
  idiom: keyof typeof ContentTexts;
  darkMode: boolean;
}

export default function About() {
  // Accedo al idioma del store
  const idiom = useSelector((state: AppState) => state.idiom);

  // Accedo al estado de darkMode
  const darkMode = useSelector((state: AppState) => state.darkMode);

  // Accedo al contenido del idioma
  const content = ContentTexts[idiom];

  return (
    <section
      className={`w-full h-auto flex flex-col lg:flex-row items-center justify-center px-11 py-32 md:px-24 lg:justify-between gap-20  ${
        darkMode ? "dark" : ""
      } dark:bg-gray-800 transition-colors duration-200`}
    >
      {/* Contenido */}
      <div className="w-full lg:w-1/2">
        {/* Nombre */}
        <h2 className="text-5xl font-telegraf text-center mb-5 text-balance lg:text-left lg:text-6xl">
          <span className="dark:text-white">Aimar</span>
          <br />
          <span className="italic text-pinkMain font-bold">Mendoza</span>
        </h2>
        {/* Título */}
        <p className="text-2xl font-telegraf text-center mb-12 lg:text-left dark:text-white">
          {content?.text}
        </p>
        {/* Descripción */}
        <p className="font-garet text-lg mb-12 dark:text-white">
          {content?.text2}
        </p>
        {/* Botón de Curriculum */}
        <div className="flex items-center justify-center lg:justify-start mb-20">
          <a href={Cv} target="_blank" download={DonwloadPDFNotification}>
            <button className="flex items-center justify-center gap-3 border-2 border-black font-telegraf text-lg font-bold px-5 py-2 rounded-full transition-colors  shadow-lg shadow-orangeBoton dark:shadow-textDark hover:bg-orangeBoton hover:animate-spin dark:bg-gray-700 dark:border-textDark dark:text-textDark">
              <>
                <GrDownload className="dark:text-textDark" />
                {content?.textDownload}
              </>
            </button>
          </a>
        </div>
        {/* Redes sociales */}
        <div className="flex justify-center items-center gap-10 lg:justify-start dark:text-textDark">
          <a
            href="https://github.com/AMendozaMarimon"
            target="_blank"
            className="transition-transform duration-300 hover:scale-125 hover:text-black"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/aimar-mendoza/"
            target="_blank"
            className="transition-colors transition-transform duration-300 hover:text-colorLinkedIn hover:scale-125"
          >
            <FaLinkedinIn className="text-3xl" />
          </a>
          <a
            href="https://walink.co/c99d31"
            target="_blank"
            className="relative transition-colors transition-transform duration-300 hover:text-colorWhatsApp hover:scale-125"
          >
            <>
              <FaWhatsapp className="text-3xl" />
              <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-colorWhatsApp animate-ping"></div>
            </>
          </a>
          <a
            href="mailto:mendozzaaymar02@gmail.com"
            target="blank"
            className="relative transition-colors transition-transform duration-300 hover:text-colorGmail hover:scale-125"
          >
            <>
              <BiLogoGmail className="text-3xl" />
              <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-colorGmail animate-ping"></div>
            </>
          </a>
        </div>
      </div>
      {/* Imagen personal */}
      <div
        className="w-full flex justify-center align-center lg:w-1/2"
        data-aos="flip-right"
      >
        <img
          className="w-3/4"
          src={img}
          alt="Aimar Mendoza"
          draggable="false"
          loading="lazy"
        />
      </div>
    </section>
  );
}
