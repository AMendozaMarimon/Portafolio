// Define el tipo para el contenido completo
interface Content {
  title: {
    first: string;
    second: string;
  };
  description: string;
  cardCongress: {
    title: string;
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
    title: {
      first: "My",
      second: "Projects",
    },
    description:
      "With one year of experience, I have participated in various business and personal projects, applying and expanding my technical skills. In the business field, I have collaborated in the development of web applications, process optimization and project management, always focused on meeting and exceeding client objectives.",
    cardCongress: {
      title: "1st International Congress of Environmental Organizations",
    }
  },
  ES: {
    title: {
      first: "Mis",
      second: "Proyectos",
    },
    description:
      "Con un año de experiencia, he participado en diversos proyectos empresariales y personales, aplicando y expandiendo mis habilidades técnicas. En el ámbito empresarial, he colaborado en el desarrollo de aplicaciones web, la optimización de procesos y la gestión de proyectos, siempre enfocado en cumplir y superar los objetivos de los clientes.",
    cardCongress: {
      title: "1er Congreso Internacional de Organizaciones de Ambiente"
    }
  },
};

export default ContentTexts;
