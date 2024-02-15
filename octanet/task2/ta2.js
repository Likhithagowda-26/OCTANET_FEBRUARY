document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addTodoBtn").addEventListener("click", addTodo);
  });
  
  function addTodo() {
    var todoInput = document.getElementById("todoInput");
    var todoList = document.getElementById("todoList");
  
    if (todoInput.value === "") {
      alert("Please enter a todo!");
      return;
    }
  
    var li = document.createElement("li");
    li.innerHTML = `
      <span>${todoInput.value}</span>
      <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(li);
  
    todoInput.value = "";
  
    li.querySelector(".delete-btn").addEventListener("click", function() {
      todoList.removeChild(li);
    });
  }