import { settings } from "./settings.js";
import { loadComponents } from "./providers/components.js";

window.addEventListener('load', load);

async function load() {
    document.body.className = 'main-page'
    document.body.innerHTML = `
        <div id="Header"></div>
        <div id="Content"></div>
        <div id="Footer"></div>
    `;
    for(const component of settings.load.main) {
        await loadComponents(component);
    }
}