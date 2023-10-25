// console.dir(document);
// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById("external-link");
anchorElement.innerHTML = "google link";
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("#external-link");
// anchorElement = document.querySelector('a');
// anchorElement = document.querySelector('p a');
anchorElement.href = "https://academind.com";

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "this leads to google";

let fpara = document.querySelector("p");

fpara.append(newAnchorElement);

let fh1Element = document.querySelector("h1");
fh1Element.remove();
// fh1Element.parentElement.removeChild(fh1Element);
