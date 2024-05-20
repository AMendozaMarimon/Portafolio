import AnimatedCursor from "react-animated-cursor";
export default function CursorAnimated() {

  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={35}
      color="47,46,54"
      outerAlpha={0}
      innerScale={1}
      outerScale={2}
      outerStyle={{
        border: "2.3px solid rgb(47,46,54)",
      }}
      innerStyle={{
        border: "2.5px solid rgb(255,255,255)",
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
