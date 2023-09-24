const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();
    const newItemInput = document.getElementById('new-item-text');
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItemInput.value));
    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn-del btn-danger btn-sm float-right delete';
    if (newItemInput.value != '') {
        delBtn.appendChild(document.createTextNode('X'));
        li.appendChild(delBtn);
        itemList.appendChild(li);
        newItemInput.value = '';
    }
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    const text = e.target.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function (item) {
        const itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
