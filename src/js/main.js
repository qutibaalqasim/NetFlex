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

/*
const movieBut = document.querySelector("#movie-button");
const showBut = document.querySelector("#show-button");
const movie = document.querySelector("#movies");
const show = document.querySelector("#shows");
console.log(movieBut);
movieBut.addEventListener("click", () => {
movie.classList.remove("hidden");
show.classList.add("hidden");
});

showBut.addEventListener("click", () => {
show.classList.remove("hidden");
movie.classList.add("hidden");
});*/



const basicButton = document.querySelector("#basicButton");
const standardButton = document.querySelector("#standardButton");
const premiumButton = document.querySelector("#premiumButton");
const standard = document.querySelector("#standard");
const basic = document.querySelector("#basic");
const premium = document.querySelector("#premium");
//console.log(premiumButton);

basicButton.addEventListener("click", () => {
    basic.classList.remove("hidden");
    standard.classList.add("hidden");
    premium.classList.add("hidden");
});

standardButton.addEventListener("click", () => {
    standard.classList.remove("hidden");
    basic.classList.add("hidden");
    premium.classList.add("hidden");
});

premiumButton.addEventListener("click", () => {
    standard.classList.add("hidden");
    basic.classList.add("hidden");
    premium.classList.remove("hidden");
});


