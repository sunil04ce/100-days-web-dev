let paraElement = document.querySelector("p");

function changeParagraphText(event) {
  console.log("clicked called..");
  paraElement.textContent = "Clicked!";
  console.log(event);
}

paraElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");
function inputChangedListener(event) {
  // let text = inputElement.value;
  let text = event.target.value;
  // let text = event.data; // This gives only single typed character
  console.log(text);
  console.log(event);
}

inputElement.addEventListener("input", inputChangedListener);
