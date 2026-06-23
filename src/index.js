import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { Contact } from "./contact.js";

const content = document.getElementById("content");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");

homeBtn.addEventListener('click', () => {
    content.textContent = "";
    Home();
});

menuBtn.addEventListener('click', () => {
    content.textContent = "";
    Menu();
});

contactBtn.addEventListener('click', () => {
    content.textContent = "";
    Contact();
});

content.textContent = "";
Home();