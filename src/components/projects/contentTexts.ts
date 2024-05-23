// Define el tipo para el contenido completo
interface Content {
  title: {
    first: string;
    second: string;
  };
  description: string;
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
      "I have participated in a variety of projects, both corporate and personal, where I have been able to apply and expand my technical skills. In the business field, I have collaborated in the development of web applications, process optimization and project management, always focused on meeting objectives and exceeding client expectations. In my personal projects, I have explored new technologies, created applications to put them into practice. Each project reflects my passion for technology and my commitment to excellence.",
  },
  ES: {
    title: {
      first: "Mis",
      second: "Proyectos",
    },
    description:
      "He participado en una variedad de proyectos tanto con empresas como personales, donde he podido aplicar y expandir mis habilidades técnicas. En el ámbito empresarial, he colaborado en el desarrollo de aplicaciones web, optimización de procesos y gestión de proyectos, siempre enfocado en cumplir con los objetivos y superar las expectativas de los clientes. En mis proyectos personales, he explorado nuevas tecnologías, creado aplicaciones para ponerlos en prácticas. Cada proyecto refleja mi pasión por la tecnología y mi compromiso con la excelencia.",
  },
};

export default ContentTexts;
