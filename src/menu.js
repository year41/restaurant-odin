function Menu() {
    const content = document.getElementById("content");

    const titleDiv = document.createElement("div");
    const titleName = document.createElement("h1");
    const slogan = document.createElement("p");

    const menuDiv = document.createElement("div");
    const menuHeader = document.createElement("h2");

    const addMenuItem = (item, description, price) => {
        const menuItem = document.createElement("div");
        const itemName = document.createElement("h4");
        const itemDesc = document.createElement("p");
        const itemPrice = document.createElement("p");

        menuItem.classList.toggle("menu-item");

        menuDiv.append(menuItem);
        menuItem.append(itemName, itemDesc, itemPrice);

        itemName.textContent = item;
        itemDesc.textContent = description;
        itemPrice.textContent = price;
    }

    titleDiv.classList.toggle("title-div");
    titleName.classList.toggle("title");
    slogan.classList.toggle("slogan");
    menuDiv.classList.toggle("menu-div");
    menuHeader.classList.toggle("menu-header");


    content.append(titleDiv, menuDiv);
    titleDiv.append(titleName, slogan);
    menuDiv.append(menuHeader);

    titleName.textContent = "Nonna Crust";
    slogan.textContent = "More than pizza, it's generations in the making."

    menuHeader.textContent = "Menu";
    addMenuItem("Nonna Margherita",
        "San Marzano tomato sauce, fresh mozzarella, basil, extra virgin olive oil.",
        "$10");
    addMenuItem("The Nonna Pepperoni",
        "Wood-fired pepperoni, mozzarella, roasted chili honey, oregano.",
        "$13");
    addMenuItem("Truffle Funghi",
        "Wild mushrooms, truffle cream, mozzarella, parmesan, thyme.",
        "$16");
    addMenuItem("Burrata Fresca",
        "Cherry tomatoes, basil pesto, stracciatella, fresh burrata, olive oil.",
        "$17");
    addMenuItem("Calabria Heat",
        "Spicy salami, nduja-style chili spread, smoked mozzarella, hot honey.",
        "$15");
    addMenuItem("Prosciutto Verde",
        "Prosciutto, rocket, parmesan shavings, lemon olive oil.",
        "$17");
    addMenuItem("Garden Nonna",
        "Zucchini, roasted capsicum, olives, mushrooms, whipped ricotta.",
        "$13");
    addMenuItem("Da Nang Bianca",
        "White pizza with garlic cream, local seafood, parsley, mozzarella, chili oil.",
        "$19");
}

export { Menu };