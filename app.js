// Select the elements from the DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

/**
* Function to add a new task to the list
*/
function addTask() {
const text = taskInput.value.trim();

// 1. Check if the input is empty
if (text === "") {
alert("You must write something!");
return;
}

// 2. Create the list item (li) element
const li = document.createElement('li');

// 3. Set the inner HTML (Task text + Delete button)
li.innerHTML = `
<span class="task-text">${text}</span>
<button class="delete-btn">Delete</button>
`;

// 4. Add "Click to Toggle" functionality
// This looks for the text span and toggles the 'completed' class
li.querySelector('.task-text').addEventListener('click', function() {
this.parentElement.classList.toggle('completed');
});

// 5. Add "Delete" functionality
// This removes the entire li when the red button is clicked
li.querySelector('.delete-btn').addEventListener('click', () => {
li.remove();
});

// 6. Append the new task to the list and clear the input field
taskList.appendChild(li);
taskInput.value = "";
taskInput.focus(); // Puts the cursor back in the box for the next task
}

/**
* Event Listeners
*/

// Trigger addTask when the "Add" button is clicked
addBtn.addEventListener('click', addTask);

// Trigger addTask when the "Enter" key is pressed inside the input field
taskInput.addEventListener('keypress', (e) => {
if (e.key === 'Enter') {
addTask();
}
});