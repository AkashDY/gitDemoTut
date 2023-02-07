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

let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
// items[1].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'lightgreen';

// To change the HTML of list elements, we use loops //

for(let i = 0; i< items.length; i++){
    items[i].style.fontWeight = 'bold';
    items[i].style.color = 'blue';
}

