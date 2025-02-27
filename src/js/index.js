const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => {
menu.classList.toggle("hidden");
if (menu.classList.contains("hidden")) {
menuToggle.innerHTML = `<img src="./src/assets/Home/navbar/Icon.svg" alt="menu toggle">`;
} else {
menuToggle.innerHTML = `<i class="material-icons">close</i>`;
}
});