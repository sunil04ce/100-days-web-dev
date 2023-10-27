let paraElement = document.querySelector("p");

function changeParagraphText() {
  console.log("clicked called..");
  paraElement.textContent = "Clicked!";
}

paraElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");
function inputChangedListener() {
  let text = inputElement.value;
  console.log(text);
}

inputElement.addEventListener("input", inputChangedListener);
