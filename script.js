// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.classList.toggle("redText");
redParagraph.textContent = "Hey I’m red!";

container.appendChild(redParagraph);

const blueHeading = document.createElement("h3");
blueHeading.classList.toggle("blueText");
blueHeading.textContent = "I’m a blue h3!";

container.appendChild(blueHeading);

const card = document.createElement("div");
card.classList.toggle("card");

const cardHeading = document.createElement("h1");
cardHeading.textContent = "I’m in a div";

const cardParagraph = document.createElement("p");
cardParagraph.textContent = "ME TOO!";

card.append(cardHeading, cardParagraph);
container.appendChild(card);