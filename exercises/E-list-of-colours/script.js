function listOfColours(colours) {
  // Write your code here...
  let contentEl = document.querySelector("#content");
  let selectEl = document.createElement("select");
  let pEl = document.createElement("p");
  contentEl.appendChild(selectEl);
  contentEl.appendChild(pEl);
  for (let colour of colours) {
    let optionEl = document.createElement("option");
    optionEl.innerText = colour;
    selectEl.appendChild(optionEl);
    selectEl.addEventListener("change", changeTheColour);
  }
  function changeTheColour(event) {
    pEl.innerText = `color is now changed to ${event.target.value}`;
    pEl.style.color = event.target.value;
  }
}
const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
