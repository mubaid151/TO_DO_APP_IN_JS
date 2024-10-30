var todoId = 1;

function addTodo() {
    var todoInput = document.getElementById('todo-input');
    var todoText = todoInput.value.trim();

    if (todoText === '') {
        alert("Please enter a task");
        return;
    }

    var todoList = document.getElementById('todo-list');

    // Create a container for each to-do item
    var todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.setAttribute('id', `todo-${todoId}`);

    // Create a paragraph for the to-do text
    var todoTextElem = document.createElement('p');
    todoTextElem.textContent = todoText;

    // Create button to change color (Highlight)
    var colorButton = document.createElement('button');
    colorButton.textContent = 'Highlight';
    colorButton.onclick = () => changeColor(todoItem.id);

    // Append the text and color button to the to-do item
    todoItem.appendChild(todoTextElem);
    todoItem.appendChild(colorButton);

    // Append the to-do item to the list
    todoList.appendChild(todoItem);

    // Clear the input field and increment the ID counter
    todoInput.value = '';
    todoId++;
}

function changeColor(id) {
    var todoItem = document.getElementById(id);

    // Check if the item already has the "highlight" class
    if (todoItem.classList.contains('highlight')) {
        todoItem.classList.remove('highlight'); // Remove color if it exists
    } else {
        todoItem.classList.add('highlight'); // Add color if it doesn't exist
    }
}
