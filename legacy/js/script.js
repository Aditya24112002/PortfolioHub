console.log("Portfolio Loaded");
// Animationg the Logo Card
const logo = document.getElementById("mainLogo");
const modal = document.getElementById("logoModal");
const closeBtn = document.getElementById("closeModal");
const card = document.querySelector(".logo-card");

logo.addEventListener("click", () => {
    modal.classList.add("active");
    card.classList.remove("closing");
    card.classList.add("opening");
});

closeBtn.addEventListener("click", () => {
    card.classList.remove("opening");
    card.classList.add("closing");

    setTimeout(() => {
        modal.classList.remove("active");
    }, 300);
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        card.classList.remove("opening");
        card.classList.add("closing");

        setTimeout(() => {
            modal.classList.remove("active");
        }, 300);
    }
});

//Close button also works for "esc" button
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        card.classList.remove("opening");
        card.classList.add("closing");
        
        setTimeout(() => {
            modal.classList.remove("active");
        }, 300);

    }

});
// Scrolling
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});