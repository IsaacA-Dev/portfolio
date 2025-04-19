import { settings } from "./settings.js";
import { loadComponents } from "./providers/components.js";

window.addEventListener('load', load);

async function load() {
    document.body.className = 'main-page'
    document.body.innerHTML = `
    <header id="Navbar" class="navbar"></header>
    <main id="Content" class="content"></main>
    <footer id="Footer" class="footer"></footer>
    `;
    for(const component of settings.load.main) {
        await loadComponents(component);
    }
}