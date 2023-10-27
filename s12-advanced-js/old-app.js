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

let firstH1Element = document.querySelector("h1");
firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element);

fpara.parentElement.append(fpara);

console.log("first paragraph innerHTML : ", fpara.innerHTML);

fpara.innerHTML = "Hi! This is <strong>important!</strong>";
