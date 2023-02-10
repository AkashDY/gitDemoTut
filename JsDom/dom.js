let form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event /////////

form.addEventListener('submit', addItem);

// Filter event

filter.addEventListener('keyup', filterItems);

// Add item

function addItem(e){
    e.preventDefault();

    // get input value
    let newItem = document.getElementById('item').value;
    let disItem = document.getElementById('discription').value;

    // create new li element
    let li = document.createElement('li');

    // add class
    li.className = 'list-group-item';

    // add text node with the input value
    li.appendChild(document.createTextNode(newItem));
    li.append(document.createTextNode(disItem));


    // create del button element
    let deleteBtn = document.createElement('button');

    // add class to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deleteBtn);

    // edit button

    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.append(editBtn);
    // itemList.appendChild(li);

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


// Filter items

function filterItems(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();

    // get list
    let items = itemList.getElementsByTagName('li');

    // convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        let disName = item.childNodes[1].textContent;

        if(itemName.toLowerCase().indexOf(text) != -1 || disName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });
}
