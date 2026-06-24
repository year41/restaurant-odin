function Contact() {
    const content = document.querySelector("#content");

    const titleDiv = document.createElement("div");
    const titleName = document.createElement("h1");
    const slogan = document.createElement("p");

    const contactDiv = document.createElement("div");
    const contactHeader = document.createElement("h2");

    const addContact = (contact, intro, email) => {
        const contactItem = document.createElement("div");
        const contactName = document.createElement("h4");
        const contactDesc = document.createElement("p");
        const contactEmail = document.createElement("p");

        contactItem.classList.toggle("contact");

        contactDiv.append(contactItem);
        contactItem.append(contactName, contactDesc, contactEmail);

        contactName.textContent = contact;
        contactDesc.textContent = intro;
        contactEmail.textContent = email;
    };

    titleDiv.classList.toggle("title-div");
    titleName.classList.toggle("title");
    slogan.classList.toggle("slogan");
    contactDiv.classList.toggle("contact-div");
    contactHeader.classList.toggle("contact-header");


    content.append(titleDiv, contactDiv);
    titleDiv.append(titleName, slogan);
    contactDiv.append(contactHeader);

    titleName.textContent = "Nonna Crust";
    slogan.textContent = "More than pizza, it's generations in the making."

    contactHeader.textContent = "Our People";
    addContact("Luciana Bellori",
        "A lifelong collector of family recipes and traditions, Luciana spent decades learning handmade Italian cooking from mothers and grandmothers across generations, inspiring the heart and soul behind Nonna Crush.",
        "nonna@nonnacrust.com");
    addContact("Marco Bellori",
        "Luciana’s son, Marco, turned his mother’s dream into reality by building a warm and welcoming space where people can gather to share authentic pizza, family traditions, and great food.",
        "admin@nonnacrust.com");
    addContact("Elia Romano",
        "Trained alongside Luciana, Elia combines traditional Italian techniques with a deep passion for handmade food, bringing warmth, creativity, and honest flavours to every pizza served at Nonna Crush.",
        "kitchen@nonnacrust.com");
    addContact("General Enquires",
        "",
        "contact@nonnacrust.com");
};

export { Contact };