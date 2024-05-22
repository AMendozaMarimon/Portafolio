import { useSelector } from "react-redux";
import ContentTexts from "./contentTexts";
import star from "../../assets/imgs/star.webp";

// Define el tipo del estado
interface AppState {
  idiom: keyof typeof ContentTexts;
  darkMode: boolean;
}

export default function Phrase() {
  // Accedo al idioma del store
  const idiom = useSelector((state: AppState) => state.idiom);

  // Accedo al estado de darkMode
  const darkMode = useSelector((state: AppState) => state.darkMode);

  // Accedo al contenido del idioma
  const content = ContentTexts[idiom];

  return (
    <section
      id="phrase"
      className={`w-full relative h-auto flex justify-center items-center bg-grayMain p-14 ${
        darkMode ? "dark" : ""
      } dark:bg-gray-700 transition-colors duration-200`}
    >
      {/* Img de fondo */}
      <div
        className="absolute w-[4rem] bottom-[-19%] md:bottom-[-25%] left-[20%]"
        data-aos="flip-down"
      >
        <img src={star} alt="Star" draggable="false" loading="lazy" />
      </div>
      {/* Texto o Frase */}
      <div className="flex flex-col justify-center items-center">
        <p
          className="text-2xl text-grayText font-telegraf text-center text-balance dark:text-white"
          style={{ whiteSpace: "pre-line" }}
          data-aos="zoom-im"
        >
          "<span className="font-bold">{content?.text.textBold}</span>{" "}
          <span>{content?.text.textNotBold}</span>{" "}
          <span className="font-bold">{content?.text.textBold2}</span>{" "}
          <span>{content?.text.textNotBold2}</span>{" "}
          <span className="font-bold">{content?.text.TextBold3}</span>{" "}
          <span className="italic">{content?.text.textItalic}</span>"
        </p>
      </div>
    </section>
  );
}
