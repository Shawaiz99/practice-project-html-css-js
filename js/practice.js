window.onload = function () {

// Being able to create the elements in DOM dynamically via JS

// create an element in the container

const myDivElement = document.createElement('div');
// add attributes
myDivElement.className = 'new-item';
myDivElement.id = 'item-1';

//adding content
myDivElement.textContent = 'zug zug';

// adding html inside as content
myDivElement.innerHTML = `<p>TNew tag boy</p>`

// creating the new paragraph with function
const p = document.createElement('P');
p.innerText = 'zug zug';
myDivElement.appendChild(p);

// to actually get the element created by js into the dom.
// we need to append it. We could first locate the parent element
// and then add it to the element

const newContainer = document.querySelector(`.container`);
newContainer.appendChild(myDivElement);

console.log(myDivElement);





};