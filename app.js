console.log("To-Do app loaded successfully!");

// DOM Elements

const form = document.getElementById("todo-form");

const input = document.getElementById("todo-input");

const todoList = document.getElementById("todo-list");

const itemsLeft = document.getElementById("items-left");

const filters = document.querySelectorAll(".filter");

console.log("Filters found:", filters.length);
console.log(filters);

const clearCompletedBtn = document.getElementById("clear-completed");


// State

let todos = [];

let currentFilter = "all";


console.log(form);

console.log(input);

console.log(todoList);

console.log(itemsLeft);

console.log(filters);

console.log(clearCompletedBtn);

// ===================================
// Add Todo
// ===================================

// ===================================
// Update Items Left
// ===================================

// ===================================
// Update Active Items Count
// ===================================

function updateItemsLeft() {

    const tasks = todoList.querySelectorAll("li");

    let activeCount = 0;

    tasks.forEach(function(task) {

        const taskText = task.querySelector("span");

        if (!taskText.classList.contains("completed")) {
            activeCount++;
        }

    });

    itemsLeft.textContent =
        `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;

}

// ===================================
// Filter Todos
// ===================================

function filterTodos() {

    const tasks = todoList.querySelectorAll("li");

    tasks.forEach(function(task) {

        const taskText = task.querySelector("span");

        if (currentFilter === "all") {

            task.style.display = "flex";

        } 
        
        else if (currentFilter === "active") {

            if (taskText.classList.contains("completed")) {
                task.style.display = "none";
            } else {
                task.style.display = "flex";
            }

        } 
        
        else if (currentFilter === "completed") {

            if (taskText.classList.contains("completed")) {
                task.style.display = "flex";
            } else {
                task.style.display = "none";
            }

        }

    });

}


// ===================================
// Clear Completed Tasks
// ===================================

clearCompletedBtn.addEventListener("click", function() {

    const tasks = todoList.querySelectorAll("li");

    tasks.forEach(function(task) {

        const taskText = task.querySelector("span");

        if (taskText.classList.contains("completed")) {
            task.remove();
        }

    });

    updateItemsLeft();

});

// ===================================
// Filter Buttons
// ===================================

filters.forEach(function(button) {

    console.log("Adding listener to:", button.textContent);

    button.addEventListener("click", function() {

        console.log("Button clicked!");

        currentFilter = button.dataset.filter;

console.log("Current Filter:", currentFilter);

filterTodos();
    });

});

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const newTask = document.createElement("li");

const taskSpan = document.createElement("span");
taskSpan.textContent = taskText;

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

newTask.appendChild(taskSpan);
newTask.appendChild(deleteButton);

todoList.appendChild(newTask);

updateItemsLeft();

    console.log("Task added:", taskText);

    input.value = "";

});

// ===================================
// Delete Task
// ===================================


todoList.addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {

        event.target.parentElement.remove();

        updateItemsLeft();

    } else if (event.target.tagName === "SPAN") {

        event.target.classList.toggle("completed");

updateItemsLeft();

    }

});