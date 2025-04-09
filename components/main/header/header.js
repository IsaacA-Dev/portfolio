import { changeLanguage } from "../../data.js";
import { drawAboutMe, drawProjectCards, drawSkillsContainer } from "../home/home.js";
export const init = () => {
    console.log('Header loaded...')
    setupLanguageSwitcher();
}

// Función para cambiar el idioma con un checkbox
const setupLanguageSwitcher = () => {
  let languageSwitcher = document.querySelector("#languageSwitcher");

  if (!languageSwitcher) {
    console.error("Language switcher not found");
    return;
  }

  languageSwitcher.addEventListener("change", () => {
    const newLang = languageSwitcher.checked ? "en" : "es"; // Si está marcado, cambia a inglés, si no, español
    changeLanguage(newLang);
    drawAboutMe();
    drawProjectCards();
    drawSkillsContainer();
  });
};