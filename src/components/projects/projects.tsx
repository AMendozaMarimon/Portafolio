import { useSelector } from "react-redux";
import ContentTexts from "./contentTexts";

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
      className={`flex relative ${darkMode ? "dark" : ""} dark:bg-gray-800`}
    >
      <div className="w-1/2">
        <h2 className="sticky">
          <span>{content?.title.first}</span>{" "}
          <span>{content?.title.second}</span>
        </h2>
        <p>{content?.description}</p>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
}
