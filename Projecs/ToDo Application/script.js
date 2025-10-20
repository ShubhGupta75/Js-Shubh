document.addEventListener("DOMContentLoaded", () => {
  // Selecting all the DOM elements

  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // this will let our todolist remember tasks even after a browser refresh.
  // parse => converts it back into array.

  tasks.forEach((task) => renderTask(task));

  // Assinging what the button does
  // (after clicking the button => the input task will be added to the ul. )
  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    savedTasks();
    renderTask(newTask); // it will auto render(display) the task without refreshing.
    todoInput.value = ""; // clear input
    console.log(tasks);
  });

  // Creating function to render the task to DOM, so that we can see it in the webpage

  function renderTask(task) {
    // Displaying the things on the DOM

    const li = document.createElement("li");

    li.setAttribute("data-id", task.id);
    // Sets a custom HTML attribute, This makes it easy to identify the element later if you need to update or delete it.

    if (task.completed) {
      li.classList.add("completed");
    }
    // If the task’s completed property is true, adds a class "completed".

    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;

    // Add an event listener for marking as complete(a strike-through will appear)
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;

      // prevents running this code when you click the delete button

      task.completed = !task.completed;

      li.classList.toggle("completed");

      // visually toggles the “completed” CSS class (adds or removes the strike-through effect).

      savedTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();

      // stops the click event from bubbling up and triggering the li’s click listener.

      tasks = tasks.filter((t) => t.id !== task.id);

      // removes the clicked task from the tasks array by keeping all tasks except the one that matches this ID.

      li.remove();
      savedTasks();
    });
    todoList.appendChild(li);
  }

  // As soon as the page loads, I want to read from the local storage, grab all the tasks and store it in the array and run a loop that reads all the individual task in the array and then call the method to render every task.

  // Pushing the values in array to a local storage.
  function savedTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});

// document.addEventListener("DOMContentLoaded")
//  =>  This waits until the HTML document is fully loaded before running the code inside

// classList  =>  It’s basically a list (or collection) of all the classes that element currently has.
// It lets you view, add, remove, or toggle CSS classes on the element.
// .toggle()  =>  If the element already has this class, remove it. If it doesn’t have this class, add it.
