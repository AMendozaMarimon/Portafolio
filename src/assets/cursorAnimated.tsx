import AnimatedCursor from "react-animated-cursor";
import { useSelector } from "react-redux";

// Define el tipo del estado
interface AppState {
  darkMode: boolean;
}

"2.3px solid rgb(47,46,54)"
export default function CursorAnimated() {
  // Accedo al estado de darkMode
  const darkMode = useSelector((state: AppState) => state.darkMode);

  return (
    <AnimatedCursor 
      innerSize={10}
      outerSize={35}
      color={darkMode ? "255,255,255" : "47,46,54"}
      outerAlpha={0}
      innerScale={1}
      outerScale={2}
      outerStyle={{
        border: `2.3px solid rgb(${darkMode ? "255,255,255" : "47,46,54"})`,
      }}
      innerStyle={{
        border: `2.5px solid rgb(${darkMode ? "47,46,54" : "255,255,255"})`,
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}
