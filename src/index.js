import "./style.css";
import {createHome} from "./home.js";
import {createMenu} from "./menu.js";
import {createAbout} from "./about.js";
import { createContact } from "./contact.js";
import {render} from "./render.js";


render(createHome());

const homeButton = document.querySelector('#home');
const aboutButton = document.querySelector('#about');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

homeButton.addEventListener('click', () => render(createHome()));
menuButton.addEventListener('click', () => render(createMenu()));
aboutButton.addEventListener('click', () => render(createAbout()));
contactButton.addEventListener('click', () => render(createContact()));