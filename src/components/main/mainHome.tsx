import { useSelector, useDispatch } from "react-redux";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoLanguageSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import imgLine from "../../assets/imgs/LineD.webp";
import ContentTexts from "./contentTexts";
import { changeIdiom } from "../../redux/action";

// Define el tipo del estado
interface AppState {
  idiom: keyof typeof ContentTexts;
}

export default function MainHome() {
  // Accedo al idioma del store
  const idiom = useSelector((state: AppState) => state.idiom);

  // Accedo al contenido del idioma
  const content = ContentTexts[idiom];

  // Cambiar el idioma
  const dispatch = useDispatch();
  const changeIdiomFunt = (payload: string) => dispatch(changeIdiom(payload));

  return (
    <section className="w-full relative h-screen flex flex-col items-center justify-center">
      {/* Cambiar el idioma */}
      <button
        onClick={() => changeIdiomFunt(idiom === "ES" ? "EN" : "ES")}
        className="flex items-center justify-center absolute top-10 right-10 gap-2"
        data-aos="flip-down"
      >
        <IoLanguageSharp className="relative text-3xl transition-transform duration-300 transform hover:scale-125" />
        {/* Circulo de notificación */}
        <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-pinkMain animate-ping"></div>
      </button>
      {/* Img de fondo */}
      <div
        className="absolute inset-0 flex justify-center items-center z-[-1]"
        data-aos="flip-down"
      >
        <img
          className="w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/5"
          src={imgLine}
          alt="Background Line"
          draggable="false"
        />
      </div>
      {/* Botón para el Scroll */}
      <button className="absolute p-5 rounded-full bg-white shadow-xl border-2 border-black bottom-16 animate-bounce">
        <Link to="phrase" spy={true} smooth={true} duration={500}>
          <FaArrowDownLong />
        </Link>
      </button>
      {/* Contenido */}
      <div className="w-3/4 text-center text-balance">
        <h1 className="font-telegraf text-5xl md:text-7xl lg:text-8xl xl:text-8xl">
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
