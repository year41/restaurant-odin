import contactImg from "./img/contact.png";
import { Contact } from "./contact.js";

function Home() {
    const content = document.getElementById("content");

    const titleDiv = document.createElement("div");
    const titleName = document.createElement("h1");
    const slogan = document.createElement("p");

    const aboutDiv = document.createElement("div");
    const aboutTitle = document.createElement("h2");
    const aboutText = document.createElement("p");

    const hoursDiv = document.createElement("div");
    const hoursTitle = document.createElement("h2");
    const hoursList = document.createElement("ul");

    const imgDiv = document.createElement("div");
    const imgButton = document.createElement("button");
    const img = document.createElement("img");

    const addSchedule = (day, times) => {
        const hoursItem = document.createElement("li");
        hoursList.append(hoursItem);
        hoursItem.textContent = day + " " + times;
    };

    titleDiv.classList.toggle("title-div");
    titleName.classList.toggle("title");
    slogan.classList.toggle("slogan");
    aboutDiv.classList.toggle("about-div");
    aboutTitle.classList.toggle("about-title");
    hoursDiv.classList.toggle("hours-div");
    imgDiv.classList.toggle("img-div");
    imgButton.classList.toggle("img-btn");

    content.append(titleDiv, aboutDiv, hoursDiv, imgDiv);
    titleDiv.append(titleName, slogan);
    aboutDiv.append(aboutTitle, aboutText);
    hoursDiv.append(hoursTitle, hoursList);
    imgDiv.append(imgButton);
    imgButton.append(img);

    titleName.textContent = "Nonna Crust";
    slogan.textContent = "More than pizza, it's generations in the making.";

    aboutTitle.textContent = "About Us";
    aboutText.textContent = "At Nonna Crush, we bring generations of Italian family tradition to the table with handmade pizzas crafted from fresh local ingredients, house-made dough, and recipes inspired by mothers and grandmothers whose cooking was built on simplicity, warmth, and real flavour. More than pizza — it's generations in the making.";

    hoursTitle.textContent = "Hours";
    addSchedule("Monday", "12:00 - 21:00");
    addSchedule("Tuesday", "12:00 - 21:00");
    addSchedule("Wednesday", "12:00 - 22:00");
    addSchedule("Thursday", "12:00 - 23:00");
    addSchedule("Friday", "11:00 - 00:00");
    addSchedule("Saturday", "10:00 - 23:00");
    addSchedule("Sunday", "11:00 - 21:00");

    img.src = contactImg;
    img.alt = "Contact image link to contact page.";

    imgButton.addEventListener('click', () => {
        content.textContent = "";
        Contact();
    });
}

export { Home };