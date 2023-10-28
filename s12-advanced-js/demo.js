const productInput = document.getElementById("product-name");
const remainingCharElement = document.getElementById("remaining-chars");
const maxLength = productInput.maxLength;

// console.dir(productInput);

function updateRemainingCharsListner(event) {
  const enteredTextLength = event.target.value.length;
  const remainingChars = maxLength - enteredTextLength;
  remainingCharElement.textContent = remainingChars;
}

productInput.addEventListener("input", updateRemainingCharsListner);
