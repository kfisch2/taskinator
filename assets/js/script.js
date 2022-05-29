// variable to target the button by id
var buttonEl = document.querySelector("#save-task");
// variable for list; can be global
var listEl = document.querySelector(".task-list");  


// function that creates new task item
var createTaskHandler = function() {
  // variable for creating item in list; must be local to createTask function
  var listItemEl = document.createElement('li');
  // var input = userInput.value
  listItemEl.textContent = ('')// input
  // add css style by className
  listItemEl.className = "task-item"
  // add li child element to ul parent element
  listEl.appendChild(listItemEl);
};

// when user clicks button, new task created
buttonEl.addEventListener("click", createTaskHandler);