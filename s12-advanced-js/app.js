// console.dir(document);
// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById('external-link');
anchorElement.innerHTML = 'google link';
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('#external-link');
// anchorElement = document.querySelector('a');
// anchorElement = document.querySelector('p a');
anchorElement.href = 'https://academind.com';