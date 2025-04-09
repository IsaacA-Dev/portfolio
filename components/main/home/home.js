import { data, currentLanguage,skills } from "../../data.js";

export const init = () => {
  console.log("Home loaded...");
  drawAboutMe();
  drawProjectCards();
  drawSkillsContainer();
};

// Función para renderizar "Sobre mí"
export const drawAboutMe = () => {
  let aboutMeContainer = document.querySelector(".about_me");

  if (!aboutMeContainer) {
    console.error("About Me container not found");
    return;
  }

  const aboutMeData = data[currentLanguage].about_me;

  aboutMeContainer.innerHTML = `
    <div class="about_me_image">
      <img src="assets/img/isaac.jpeg" alt="me">
    </div>
    <div class="about_me_title">
      <h1>${currentLanguage === "es" ? "Sobre mí" : "About Me"}</h1>
    </div>
    <div class="about_me_description">
      <p>${aboutMeData.description}</p>
    </div>
  `;
};

// Función para renderizar la sección de proyectos (incluyendo el título)
export const drawProjectCards = () => {
  let projectsContainer = document.querySelector(".projects");

  if (!projectsContainer) {
    console.error("Projects container not found");
    return;
  }

  // Renderizar el contenedor de proyectos con el título en el idioma actual
  projectsContainer.innerHTML = `
    <div class="projects_title">
      <h1 id="projectsTitle">${currentLanguage === "es" ? "Proyectos" : "Projects"}</h1>
    </div>
    <div class="projects_container"></div>
  `;

  let projectsListContainer = document.querySelector(".projects_container");

  if (!projectsListContainer) {
    console.error("Projects list container not found");
    return;
  }

  projectsListContainer.innerHTML = "";

  // Renderizar las tarjetas de proyectos
  data[currentLanguage].projects.forEach((project) => {
    let projectCard = document.createElement("div");
    projectCard.classList.add("project_card");
    projectCard.innerHTML = `
      <h2>${project.project_name}</h2>
      <p>${project.description}</p>
      <p><strong>${currentLanguage === "es" ? "Responsabilidades" : "Responsibilities"}:</strong> ${project.responsibilities}</p>
    `;
    projectsListContainer.appendChild(projectCard);
  });
};

export const drawSkillsContainer = () => {
  const skillsContainer = document.querySelector(".skills");

  if (!skillsContainer) {
    console.error("Skills container not found");
    return;
  }

  // Estructura del contenedor
  skillsContainer.innerHTML = `
    <div class="skills_title">
      <h1>${currentLanguage === "es" ? "Habilidades" : "Skills"}</h1>
    </div>
    <div class="skills_content">
      <section class="technical_skills">
        <h2>${currentLanguage === "es" ? "Técnicas" : "Technical Skills"}</h2>
        <div class="skills_grid"></div>
      </section>
      <section class="soft_skills">
        <h2>${currentLanguage === "es" ? "Blandas" : "Soft Skills"}</h2>
        <div class="skills_grid"></div>
      </section>
    </div>
  `;

  // Renderizado de habilidades técnicas
  const techSkillsGrid = skillsContainer.querySelector(".technical_skills .skills_grid");
  skills.hard_skills.forEach(skill => {
    techSkillsGrid.innerHTML += `
      <div class="skill_card" title="${skill.name}">
        <img src="${skill.icon_url}" alt="${skill.name}">
        <div class="skill_info">
          <span>${skill.name}</span>
        </div>
      </div>
    `;
  });

  // Renderizado de habilidades blandas
  const softSkillsGrid = skillsContainer.querySelector(".soft_skills .skills_grid");
  skills.soft_skills.forEach(skill => {
    softSkillsGrid.innerHTML += `
      <div class="skill_card" title="${skill.name}">
      <div class="soft_skill_info">
        <h2>${skill.name}</h2>
      </div> 
      </div>
    `;
  });
};

