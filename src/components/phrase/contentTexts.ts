// Define el tipo para el contenido completo
interface Content {
  text: {
    textBold: string;
    textNotBold: string;
    textBold2: string;
    textNotBold2: string;
    TextBold3: string;
    textItalic: string;
  };
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
    text: {
      textBold: "Design",
      textNotBold: "is the",
      textBold2: "soul",
      textNotBold2: "of",
      TextBold3: "everything",
      textItalic: "created by man",
    },
  },
  ES: {
    text: {
      textBold: "El diseño",
      textNotBold: "es el",
      textBold2: "alma",
      textNotBold2: "de",
      TextBold3: "todo",
      textItalic: "lo creado por el hombre",
    },
  },
};

export default ContentTexts;