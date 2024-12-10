// - Dom  Basics
window.onload = function() {
// Window is the global object in DOM
console.log(window);

// Document Object
// console.log(window.document);
console.log(document);

// Access the title
console.log(document.title);

// Head and Body
console.log(document.head);

// Body
console.log(document.body);

// Access the inner HTML of the body
// console.log(document.body.innerHTML);

// Modify what is inside of the tag
// document.body.innerHTML = '<h3>I changed the header. Get bent scrubs<h3>'

console.log(document.getElementById('main'));


};