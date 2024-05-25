import { useSelector } from "react-redux";
import ContentTexts from "./contentTexr";

interface AppState {
  idiom: keyof typeof ContentTexts;
  darkMode: boolean;
}

export default function Footer() {
  // Obtener el idioma del estado
  const idiom = useSelector((state: AppState) => state.idiom);

  // Obtener el modo oscuro del estado
  const darkMode = useSelector((state: AppState) => state.darkMode);

  // Accedo al contenido del idioma
  const content = ContentTexts[idiom];

  // Obtener el año actual
  const year = new Date().getFullYear();

  return (
    <footer className={`flex justify-center items-center text-center py-4 bg-grayMain dark:bg-orangeBoton ${darkMode ? "dark" : ""}`}>
      <p className="font-bold text-grayText dark:text-black italic">
        {content?.text} | {year}
      </p>
    </footer>
  );
}
