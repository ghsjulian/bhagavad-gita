const header = document.querySelector("header");
const aside = document.querySelector("aside");
const menu = document.querySelector(".menu-list");
const nav = document.querySelector("#nav");
const overly = document.querySelector("#overly");
const main = document.querySelector("main");
const logo = document.querySelector(".logo");
const input = document.querySelector("input");
const searchBtn = document.querySelector("#go");
const list = document.querySelectorAll("li");

const getDataSet = async () => {
    var count = 15;
    const chapters = document.querySelector(".menu-list");
    const req = await fetch("./dataset/gita-data.json");
    const res = await req.json();
    localStorage.setItem("GITA", JSON.stringify(res));
    /*
    for (var i = 0; i < res?.length; i++) {
        if (count <= i) {
            break;
        }
        const li = document.createElement("li");
        li.textContent = "Chapter No - " + res[i].id;
        chapters.appendChild(li);
    }
    */
};

window.onload = async () => {
    await getDataSet();
};

const closeMenu = () => {
    aside.classList.toggle("mobile-menu");
    overly.classList.toggle("overly");
};

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
                      <div class="hr"></div>
                    <p>
                        यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।
                        अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥ परित्राणाय
                        साधूनां विनाशाय च दुष्कृताम् ।
                    </p>
                      <div class="hr"></div>
                </div>
    `;
};
const appendChapter = id => {
    const GITA = JSON.parse(localStorage.getItem("GITA"));
    const index = Math.floor(Math.random() * 7);

    main.innerHTML = `
                <div class="page">
                 <img src="./images/${index !==0 ? index  : 1}.png" />
                    <h3>Page ID - ${GITA[id].id}</h3> 
                    <h3>External ID- ${GITA[id].externalId}</h3> 
                    <h3>Chapter ID - ${GITA[id].chapter_id}</h3> 
                    <h3>Chapter Number - ${GITA[id].chapter_number}</h3> 
                    <h3>Chapter Title - ${GITA[id].title}</h3> 
                    <h3>Verse Number - ${GITA[id].verse_number}</h3> 
                    <h3>Verse Order - ${GITA[id].verse_order}</h3> 
                    <h3>Parts : Shreemad Bhagavad Gita</h3>
                    <div class="hr"></div>
                    <h3>In Hindi</h3>
                    <strong>
                    ${GITA[id].text}
                    </strong>
                    <div class="hr"></div>
                    <h3>In Transliteration</h3>
                    <strong>
                    ${GITA[id].transliteration}
                    </strong>
                    <div class="hr"></div>
                    <h3>In English Meaning</h3>
                    <strong>
                    ${GITA[id].word_meanings}
                    </strong>
                    <div class="hr"></div> 
                </div>
    `;
    closeMenu();
};
input.addEventListener("focus", () => {
    menu.style.height = "78%";
});
input.addEventListener("keyup", e => {
    const type = e.keyCode;
    const value = e.target.value;
    if (value && value !== "0") {
        if (type == 13) {
            appendChapter(value.trim() - 1);
        }
    }
});
searchBtn.onclick = () => {
    const value = parseInt(input.value);
    appendChapter(value - 1);
};
list.forEach(li => {
    li.onclick = () => {
        let id = li.getAttribute("id");
        appendChapter(parseInt(id) - 1);
    };
});
