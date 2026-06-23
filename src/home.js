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
    const daysWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    for (let i = 0; i < 7; i++) {
        const hoursItem = document.createElement("li");
        hoursList.append(hoursItem);
        hoursItem.textContent = daysWeek[i] + " " + "11:00 - 23:00"
    }

    titleDiv.classList.toggle("title-div");
    titleName.classList.toggle("title");
    slogan.classList.toggle("slogan");
    aboutDiv.classList.toggle("about-div");
    hoursDiv.classList.toggle("hours-div");

    content.append(titleDiv, aboutDiv, hoursDiv);
    titleDiv.append(titleName, slogan);
    aboutDiv.append(aboutTitle, aboutText);
    hoursDiv.append(hoursTitle, hoursList);

    titleName.textContent = "Nonna Crust";
    slogan.textContent = "More than pizza, it's generations in the making."

    aboutTitle.textContent = "About Us";
    aboutText.textContent = "At Nonna Crush, we bring generations of Italian family tradition to the table with handmade pizzas crafted from fresh local ingredients, house-made dough, and recipes inspired by mothers and grandmothers whose cooking was built on simplicity, warmth, and real flavour. More than pizza — it's generations in the making."

    hoursTitle.textContent = "Hours";
}

export { Home };