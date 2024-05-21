// Define el tipo para el contenido completo
interface Content {
  text: string;
  text2: string;
  textDownload: string;
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
    text: "Front-End Developer",
    text2:
      "Hello, I'm Aimar Mendoza. I specialize in creating attractive and functional user interfaces with clean and efficient code. Passionate about web development, I am always looking for new challenges to improve my skills and add value to innovative projects.",
    textDownload: "Download CV",
  },
  ES: {
    text: "Desarrollador Front-End",
    text2:
      "Hola, soy Aimar Mendoza. Me especializo en crear interfaces de usuario atractivas y funcionales con código limpio y eficiente. Apasionado por el desarrollo web, siempre busco nuevos desafíos para mejorar mis habilidades y aportar valor a proyectos innovadores.",
    textDownload: "Descargar CV",
  },
};

export default ContentTexts;
