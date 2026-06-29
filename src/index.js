import "./styles.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { Contact } from "./contact.js";

const content = document.getElementById("content");
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

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