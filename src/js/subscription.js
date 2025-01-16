const basicButton = document.getElementById("basicButton");
const standardButton = document.getElementById("standardButton");
const premiumButton = document.getElementById("premiumButton");
const standard = document.getElementById("standard");
const basic = document.getElementById("basic");
const premium = document.getElementById("premium");

basicButton.addEventListener("click",()=>{
    basic.classList.remove("hidden");
    standard.classList.add("hidden");
    premium.classList.add("hidden");
});

standardButton.addEventListener("click",()=>{
    standard.classList.remove("hidden");
    basic.classList.add("hidden");
    premium.classList.add("hidden");
});

premiumButton.addEventListener("click",()=>{
    premium.classList.remove("hidden");
    basic.classList.add("hidden");
    standard.classList.add("hidden");
});