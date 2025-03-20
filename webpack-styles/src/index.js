import './style.scss';
import './woof.css';
import icon from "./icon.png";

const headline = "Welcome to the webpage";
document.querySelector('h1').innerText = headline;

const myIcon = new Image ();
myIcon.src = icon;

document.querySelector(".container").appendChild(myIcon);
