var tasksToDoEl = document.querySelector("#tasks-to-do")
// variable to target the button by id
var formEl = document.querySelector("#task-form");
// variable for list; can be global
var listEl = document.querySelector(".task-list");  
// target user input in form
var input = document.querySelector("#userInput")

// function that creates new task item
var createTaskHandler = function(event) {
  // prevents the browswer form automatically refreshing after hitting submit
  event.preventDefault();
  
  // variable for creating item in list; must be local to createTask function
  var listItemEl = document.createElement('li');
  // the textContent of list item is the value of the userInput
  listItemEl.textContent = input.value
  // add css style by className
  listItemEl.className = "task-item"
  // add li child element to ul parent element
  listEl.appendChild(listItemEl);
};

// when user clicks button, new task created
formEl.addEventListener("submit", createTaskHandler);