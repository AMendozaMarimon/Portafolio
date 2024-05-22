import { useSelector, useDispatch } from "react-redux";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoLanguageSharp } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-scroll";
import imgLine from "../../assets/imgs/LineD.webp";
import ContentTexts from "./contentTexts";
import { changeIdiom, toggleDarkMode } from "../../redux/action";
import { useEffect } from "react";

// Define el tipo del estado
interface AppState {
  idiom: keyof typeof ContentTexts;
  darkMode: boolean;
}

export default function MainHome() {
  // Accedo al idioma del store
  const idiom = useSelector((state: AppState) => state.idiom);

  // Accedo al estado de darkMode
  const darkMode = useSelector((state: AppState) => state.darkMode);

  // Accedo al contenido del idioma
  const content = ContentTexts[idiom];

  // Cambiar el idioma
  const dispatch = useDispatch();
  const changeIdiomFunt = (payload: string) => dispatch(changeIdiom(payload));

  // Efecto para manejar la clase 'dark' en el elemento raíz
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Función para cambiar el modo
  const changeMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <section
      className={`w-full relative h-screen flex flex-col items-center justify-center ${
        darkMode ? "dark" : ""
      } dark:bg-gray-800 transition-colors duration-200`}
    >
      {/* Cambiar el idioma y cambiar el modo */}
      <div className="flex absolute top-10 right-10 gap-5">
        <button
          onClick={() => changeIdiomFunt(idiom === "ES" ? "EN" : "ES")}
          className="flex items-center justify-center"
          data-aos="flip-down"
        >
          <IoLanguageSharp className="relative text-3xl transition-transform duration-300 transform hover:scale-125 dark:text-textDark" />
          {/* Circulo de notificación */}
          <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-pinkMain animate-ping"></div>
        </button>
        <button onClick={changeMode}>
          {!darkMode ? (
            <MdDarkMode className="text-3xl transition-transform duration-300 transform hover:scale-125 dark:text-textDark" />
          ) : (
            <MdLightMode className="text-3xl transition-transform duration-300 transform hover:scale-125 dark:text-textDark hover:rotate-180" />
          )}
        </button>
      </div>
      {/* Img de fondo */}
      <div
        className="absolute flex justify-center items-center"
        data-aos="flip-down"
      >
        <img
          className="w-4/5 md:w-4/6 transition-opacity duration-200"
          src={imgLine}
          alt="Background Line"
          draggable="false"
        />
      </div>
      {/* Botón para el Scroll */}
      <button className="absolute p-5 rounded-full bg-white shadow-xl border-2 border-black bottom-16 animate-bounce dark:bg-textDark">
        <Link to="phrase" spy={true} smooth={true} duration={500}>
          <FaArrowDownLong className="dark:text-white dark:font-bold"/>
        </Link>
      </button>
      {/* Contenido */}
      <div className="w-3/4 text-center text-balance z-10">
        <h1 className="font-telegraf text-5xl md:text-7xl lg:text-8xl xl:text-8xl dark:text-white">
          <span className="font-bold">{content?.title.textBold}</span>{" "}
          <span className="italic">{content?.title.textNormal}</span>{" "}
          <span className="font-bold">{content?.title.textBold2}</span>{" "}
          {content?.title.textNormal2}{" "}
          <span className="font-bold">{content?.title.textBold3}</span>
        </h1>
      </div>
    </section>
  );
}
