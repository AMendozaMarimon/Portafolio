// Define el tipo para el contenido del título
interface TitleContent {
  textBold: string;
  textNormal: string;
  textBold2: string;
  textNormal2: string;
  textBold3: string;
}

// Define el tipo para el contenido completo
interface Content {
  title: TitleContent;
}

// Define los tipos para los textos de contenido
interface ContentTextsType {
  EN: Content;
  ES: Content;
  // Agrega otros idiomas según sea necesario
}

// Contenidos de texto definidos
const ContentTexts: ContentTextsType = {
  EN: {
    title: {
      textBold: "Transform",
      textNormal: "your",
      textBold2: "vision",
      textNormal2: "into",
      textBold3: "reality",
    },
  },
  ES: {
    title: {
      textBold: "Transforma",
      textNormal: "tu",
      textBold2: "visión",
      textNormal2: "en",
      textBold3: "realidad",
    },
  },
};

export default ContentTexts;
