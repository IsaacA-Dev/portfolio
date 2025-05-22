export const init = () => {
    drawNavButtons();
}
    
// <div class="nav-buttons">
// <a href="" class="nav-button">Home</a>
// <a href="" class="nav-button">Projects</a>
// <a href="" class="nav-button">About Me</a>
// </div>

async function drawNavButtons() {
    let navButtonsContainer = document.querySelector(".nav-buttons");
    if (!navButtonsContainer) {
        console.error("Nav buttons container not found");
        return;
    }
    navButtonsContainer.innerHTML = `
        <a href="" class="nav-button">Home</a>
        <a href="" class="nav-button">Proyectos</a>
        <a href="" class="nav-button">Sobre Mi</a>
    `;
    let navButtons = document.querySelectorAll(".nav-button");
    if (!navButtons) {
        console.error("Nav buttons not found");
        return;
    }
    navButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            let target = e.target.getAttribute("href");
            if (target === "") {
                console.error("Target not found");
                return;
            }
            window.location.href = target;
        });
    });
    console.log("Nav buttons loaded...");
    return navButtons;
}
