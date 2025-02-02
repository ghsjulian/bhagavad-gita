const header = document.querySelector("header");
const aside = document.querySelector("aside");
const menu = document.querySelector(".menu-list");
const nav = document.querySelector("#nav");
const overly = document.querySelector("#overly");
const main = document.querySelector("main");
const logo = document.querySelector(".logo");
const input = document.querySelector("input");

overly.onclick = () => {
    aside.classList.toggle("mobile-menu");
    overly.classList.toggle("overly");
};
nav.onclick = () => {
    aside.classList.toggle("mobile-menu");
    overly.classList.toggle("overly");
};
logo.onclick = () => {
    main.innerHTML = `
                <div class="page">
                    <img src="./images/1.png" />
                    <p>
                        यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।
                        अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥ परित्राणाय
                        साधूनां विनाशाय च दुष्कृताम् ।
                    </p>
                </div>
    `;
};
input.addEventListener("focus", () => {
    menu.style.height = "78%";
});
input.addEventListener("keyup", e => {
    const type = e.keyCode;
    const value = e.target.value;
    if (value) {
        console.log(value);
    }
});
