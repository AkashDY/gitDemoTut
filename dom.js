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

// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// // items[1].style.fontWeight = 'bold';
// // li[2].style.backgroundColor = 'lightgreen';

// for(let i = 0; i< li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
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

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'lightgreen';

let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';


// QUERYSELECTORALL //

// let titles = document.querySelectorAll('.title');
// titles[0].textContent = 'Hello';

let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

for(let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'lightgreen';
    // even[i].style.backgroundColor = '#ccc';
}