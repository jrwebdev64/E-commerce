const togglebtn = document.querySelector(".menubtn");
const navlink = document.querySelector(".list-nav");
const searchbtn = document.querySelector(".search-icon");
const marketZone = document.querySelector(".market-zone");
const search = document.querySelector(".search-input");
const cart = document.querySelector(".cart-style");
const searchArea = document.querySelector(".Search-area");

togglebtn.addEventListener("click", () => {
    navlink.classList.toggle("active");
    console.log("Menu button clicked");
});

searchbtn.addEventListener("click", () => {

    console.log("Search button clicked");
    searchArea.classList.toggle("active");
    search.classList.toggle("active");
    marketZone.classList.toggle("active");
    cart.classList.toggle("active");
});