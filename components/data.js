export var data = {
  es: {
    evolution: { },
    about_me: {
      name: "Isaac Abdiel González Gutiérrez",
      description: `¡Hola! Mi nombre es Isaac Abdiel González Gutiérrez, un desarrollador con experiencia en diversas áreas, pero lo que realmente me apasiona es el modelado de aplicaciones, el análisis de requerimientos y el diseño de arquitectura de software. Disfruto estructurar tanto el backend como el frontend, asegurando que cada sistema sea escalable, eficiente y bien organizado.

      Tengo un enfoque fuerte en el modelado de bases de datos, optimizando estructuras para garantizar rendimiento y flexibilidad en cada proyecto. Me gusta transformar ideas en sistemas bien definidos, aplicando las mejores prácticas en diseño y desarrollo de software.
      
      Siempre busco mejorar mis habilidades y enfrentar nuevos desafíos. Si tienes un proyecto en mente o quieres intercambiar ideas, ¡hablemos!`,
    },
    projects: [
      {
        project_name: "By Your Orders",
        description: "Plataforma de gestión de pedidos en línea.",
        responsibilities: "Desarrollo backend y arquitectura.",
      },
      {
        project_name: "FixMasters",
        description: "Sistema de gestion de tareas.",
        responsibilities: "Diseño de base de datos y lógica de negocio.",
      },
      {
        project_name: "SysCribs",
        description: "Aplicación de administración de propiedades.",
        responsibilities: "Desarrollo de frontend y API REST.",
      },
      {
        project_name: "AlumNet",
        description: "Plataforma para gestión de estudiantes.",
        responsibilities: "Análisis de requerimientos y diseño del sistema.",
      }
    ],
  },
  en: {
    about_me: {
      name: "Isaac Abdiel González Gutiérrez",
      description: `Hello! My name is Isaac Abdiel González Gutiérrez, a developer with experience in various areas, but what truly excites me is application modeling, requirements analysis, and software architecture design. I enjoy structuring both the backend and frontend, ensuring that each system is scalable, efficient, and well-organized.

      I have a strong focus on database modeling, optimizing structures to ensure performance and flexibility in each project. I like turning ideas into well-defined systems, applying best practices in software design and development.

      I always seek to improve my skills and face new challenges. If you have a project in mind or want to exchange ideas, let's talk!`,
    },
    projects: [
      {
        project_name: "By Your Orders",
        description: "Online order management platform.",
        responsibilities: "Backend development and architecture.",
      },
      {
        project_name: "FixMasters",
        description: "Task tracking system.",
        responsibilities: "Database design and business logic.",
      },
      {
        project_name: "SysCribs",
        description: "Property management application.",
        responsibilities: "Frontend development and REST API.",
      },
      {
        project_name: "AlumNet",
        description: "Student management platform.",
        responsibilities: "Requirements analysis and system design.",
      }
    ],
  },
};

// export var evolution = {

// };

export var skills = {
  hard_skills: [
    {
      name: "C#",
      icon_url: "https://img.icons8.com/color/48/000000/c-sharp-logo.png",
    },
    {
      name: "java",
      icon_url: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
    },
    {
      name: "python",
      icon_url: "https://img.icons8.com/color/48/000000/python.png",
    },
    {
      name: "angular",
      icon_url: "https://img.icons8.com/color/48/000000/angularjs.png",
    },
    {
      name: "typescript",
      icon_url: "https://img.icons8.com/color/48/000000/typescript.png",
    },
    {
      name: "django",
      icon_url: "https://img.icons8.com/color/48/000000/django.png",
    },
    {
      name: "react-native",
      icon_url: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
      name: "html",
      icon_url: "https://img.icons8.com/color/48/000000/html-5.png",
    },
    {
      name: "css",
      icon_url: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      name: "javascript",
      icon_url: "https://img.icons8.com/color/48/000000/javascript.png",
    },
    {
      name: "nodejs",
      icon_url: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      name: "mysql",
      icon_url: "https://img.icons8.com/color/48/000000/mysql-logo.png",
    },
    {
      name: "mongodb",
      icon_url: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
      name: "git",
      icon_url: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      name: "linux",
      icon_url: "https://img.icons8.com/color/48/000000/linux.png",
    }
  ],
  soft_skills: [
    { 
      name: "Comunicación",
    },
    { 
      name: "Trabajo en equipo",
    },
    {
      name: "Creatividad",
    },
    { 
      name: "Resiliencia",
    },
    { 
      name: "Adaptabilidad",
    },
  ],
}

// Variable para controlar el idioma actual (por defecto español)
export let currentLanguage = "es";

// Función para cambiar el idioma
export const changeLanguage = (lang) => {
  if (data[lang]) {
    currentLanguage = lang;
  }
};


