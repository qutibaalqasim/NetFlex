const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => {
menu.classList.toggle("hidden");
if (menu.classList.contains("hidden")) {
menuToggle.innerHTML = `<img src="./assets/Home/navbar/Icon.svg" alt="menu toggle">`;
} else {
menuToggle.innerHTML = `<i class="material-icons">close</i>`;
}
});


const movieBut = document.getElementById("movie-button");
const showBut = document.getElementById("show-button");
const movie = document.getElementById("movies");
const show = document.getElementById("shows");
console.log(movieBut);
movieBut.addEventListener("click", () => {
    movie.classList.remove("hidden");
    show.classList.add("hidden");
});

showBut.addEventListener("click", () => {
    show.classList.remove("hidden");
    movie.classList.add("hidden");
});