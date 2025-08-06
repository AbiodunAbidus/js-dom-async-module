// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add a new todo item
addBtn.addEventListener('click', () => {
  const task = todoInput.value.trim();
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;

    // Add remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent =