const searchButton = document.querySelector("#page-home .content main a");
const modal = document.querySelector("#modal");
const closeModalButton = document.querySelector("#modal .content .header a");

searchButton.addEventListener("click", () => {
    modal.classList.remove("hide");
});

closeModalButton.addEventListener("click", () => {
    modal.classList.add("hide");
});