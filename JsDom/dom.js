let form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event /////////

form.addEventListener('submit', addItem);

// Add item

function addItem(e){
    e.preventDefault();

    // get input value
    let newItem = document.getElementById('item').value;

    // create new li element
    let li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // add text node with the input value
    li.appendChild(document.createTextNode(newItem));

    // create del button element
    let deleteBtn = document.createElement('button');

    // add class to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deleteBtn);

    // append li to list
    itemList.appendChild(li);
}

// Delete event ///////////////

itemList.addEventListener('click', removeItem);

// remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// ------------------------------------------------------------------------

// Add edit button next to delete button

li = document.getElementsByClassName('list-group-item');
let editBtn = document.createElement('button');
editBtn.className = 'btn btn-danger btn-sm float-right delete';
editBtn.appendChild(document.createTextNode('Edit'));
li.appendChild(editBtn);
itemList.appendChild(li);