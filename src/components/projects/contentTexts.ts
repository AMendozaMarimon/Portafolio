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
  LaChoco: {
    title: string;
    state: string;
  };
  cardNewP: {
    title: string;
    state: string;
  }
  cardCatBio: {
    title: string;
    inProcess: string;
  };
  cardVehi: {
    title: string;
  };
  cardfood: {
    title: string;
  };
  cardRaM: {
    title: string;
  };
  cardOldP: {
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
      first: "Experience",
      second: "Professional",
    },
    description:
      "With one year of experience, I have participated in various business and personal projects, applying and expanding my technical skills. In the business field, I have collaborated in the development of web applications, process optimization and project management, always focused on meeting and exceeding client objectives.",
    cardCongress: {
      title: "1st International Congress of Environmental Organizations",
    },
    LaChoco: {
      title: "La Choco Latera",
      state: "In Development",
    },
    cardNewP: {
      title: "New Portfolio",
      state: "New",
    },
    cardCatBio: {
      title: "Biodiversity Catalog",
      inProcess: "In Development",
    },
    cardVehi: {
      title: "E-Commerce VehiBuy",
    },
    cardfood: {
      title: "food.",
    },
    cardRaM: {
      title: "Rick And Morty API",
    },
    cardOldP: {
      title: "Old Portfolio",
    },
  },
  ES: {
    title: {
      first: "Experiencia",
      second: "Profesional",
    },
    description:
      "Con un año de experiencia, he participado en diversos proyectos empresariales y personales, aplicando y expandiendo mis habilidades técnicas. En el ámbito empresarial, he colaborado en el desarrollo de aplicaciones web, la optimización de procesos y la gestión de proyectos, siempre enfocado en cumplir y superar los objetivos de los clientes.",
    cardCongress: {
      title: "1er Congreso Internacional de Organizaciones de Ambiente",
    },
    LaChoco: {
      title: "La Choco Latera",
      state: "En Desarrollo",
    },
    cardNewP: {
      title: "Nuevo Portafolio",
      state: "Nuevo",
    },
    cardCatBio: {
      title: "Catálogo de Biodiversidad",
      inProcess: "En Desarrollo",
    },
    cardVehi: {
      title: "E-Commerce VehiBuy",
    },
    cardfood: {
      title: "food.",
    },
    cardRaM: {
      title: "Rick and Morty API",
    },
    cardOldP: {
      title: "Portafolio Antiguo",
    },
  },
};

export default ContentTexts;
