// Examine the document object

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// document.title = 'ITEMLISTS';

// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

// console.log(document.forms);
// console.log(document.links);

// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);


// headerTitle.textContent = "None";
// // headerTitle.innerText = 'Hello';
// headerTitle.innerHTML = '<h3>Hi</h3>';
// console.log(headerTitle);

// header.style.borderBottom = 'solid 3px #000';

// const titlee = document.querySelector('.titlee');

// titlee.style.color = ('green');
// titlee.style.fontWeight = 'bold';

// GETELEMENTBYCLASSNAME //

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// // items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'lightgreen';

// To change the HTML of list elements, we use loops //

// for(let i = 0; i< items.length; i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.color = 'blue';
// }

// GETELEMENTBYTAGENAME //

// let li2 = document.getElementsByTagName('li2');
// console.log(li2);
// console.log(li2[1]);
// // items[1].style.fontWeight = 'bold';
// // li2[2].style.backgroundColor = 'lightgreen';

// for(let i = 0; i< li2.length; i++){
//     li2[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello world';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'lightgreen';

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';


// QUERYSELECTORALL //

// let titles = document.querySelectorAll('.title');
// titles[0].textContent = 'Hello';

// let odd = document.querySelectorAll('li2:nth-child(odd)');
// let even = document.querySelectorAll('li2:nth-child(even)');

// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'lightgreen';
//     // even[i].style.backgroundColor = '#ccc';
// }


// TRAVERSING THE DOM //

// let itemList = document.querySelector('#items');

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// ParentElement //

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// ChildNodes //

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild //
// console.log(itemList.firstChild);

// FirstelementChild //
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// LastChild //

// console.log(itemList.lastChild);

// lastElementChild //

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling //

// console.log(itemList.nextSibling);

// nextElementSibling //

// console.log(itemList.nextElementSibling);

// previousElementSibling //

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


// CREATE ELEMENT ////
// create div //
let newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

// Add attribute
newDiv.setAttribute('title', 'Hello Div');

// create text node
let newDivText = document.createTextNode('HEllo Word');

// Add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '30px';

// console.log(newDiv);


// Add hello word before item 1 //

let newLi = document.createElement('li');
let newLiText = document.createTextNode('Hello World');
newLi.appendChild(newLiText);
let listt = document.querySelector('items');
let li = document.querySelector('items li');
listt.insertBefore(newLi, li);
console.log(newLi);