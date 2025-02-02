const header = document.querySelector("header");
const aside = document.querySelector("aside");
const nav = document.querySelector("#nav");
const overly = document.querySelector("#overly");

overly.onclick = () => {
    aside.classList.toggle("mobile-menu");
    overly.classList.toggle("overly");
};
nav.onclick = () => {
    aside.classList.toggle("mobile-menu");
    overly.classList.toggle("overly");
};
