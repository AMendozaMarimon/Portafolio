// Define el tipo para el contenido completo
interface Content {
  text: string;
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
    text: "Created by Aimar Mendoza ❤️",
  },
  ES: { 
    text: "Creado por Aimar Mendoza ❤️",
 },
};

export default ContentTexts;
