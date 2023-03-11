'use strict';

// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

(() => {
  console.log("My content script is running!");

const button = document.createElement("button");
button.textContent = "Click me!";
button.className = "Daquioag";

// // Find all elements with the class name "artdeco-entity-lockup__subtitle ember-view"
let myVar = document.querySelectorAll(".artdeco-entity-lockup__subtitle.ember-view");
console.log(myVar);
console.log(myVar.length);

const test = document.getElementsByClassName("entity-content");
console.log(test.length);

if (test.length > 0) {
  console.log("The element exists");
} else {
  console.log("The element does not exist");
}

const elements = document.querySelectorAll(".entity-content");
console.log(elements.length);

// Add the button element to each element found
elements.forEach((element) => {
  element.appendChild(button.cloneNode(true));
});
console.log("My end function again");

})();
