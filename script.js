const icon = document.querySelector("#icon");
const bg = document.querySelector(".bg");

icon.addEventListener("click", () => {
  document.body.classList.toggle("sun-theme");
  if (document.body.classList.contains("sun-theme")) {
    icon.src = "images/icon-moon.svg";
    bg.src = "images/bg-desktop-light.jpg";
  } else {
    icon.src = "images/icon-sun.svg";
    bg.src = "images/bg-desktop-dark.jpg";
  }
});

window.addEventListener("load", () => {
  const form = document.querySelector("#form");
  const input = document.querySelector("#input");
  const list_el = document.querySelector(".todo-task-list");
  const num = document.querySelector(".num");

  let a = 0;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    a += 1;

    num.innerText = a;

    const task = input.value;

    if (!task) {
      alert("Please fill out the task");
      return;
    }

    const todo_task_el = document.createElement("div");
    todo_task_el.classList.add("todo-task");

    const task_wrap = document.createElement("div");
    task_wrap.classList.add("todo-task-wrap");

    const task_circle_el = document.createElement("div");
    task_circle_el.classList.add("todo-task-circle");
    task_wrap.appendChild(task_circle_el);

    const task_circle_img_el = document.createElement("img");
    task_circle_el.appendChild(task_circle_img_el);

    task_circle_el.addEventListener("click", () => {
      task_circle_img_el.src = "images/icon-check.svg";
      task_circle_img_el.style.height = "10px";
      task_circle_img_el.style.width = "10px";
      task_circle_img_el.style.marginLeft = "5px";
      task_circle_el.style.background =
        "linear-gradient(to right, hsl(192, 100%, 67%) , hsl(280, 87%, 65%)";
      task_input_el.style.textDecoration = "line-through";
    });

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("task-input");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");
    task_wrap.appendChild(task_input_el);

    const todo_delete_el = document.createElement("div");
    todo_delete_el.classList.add("todo-delete");

    todo_delete_el.addEventListener("click", () => {
      list_el.removeChild(todo_task_el);

      if (a > 0) {
        a -= 1;
      }

      num.innerText = a;
    });

    const todo_delete_img_el = document.createElement("img");
    todo_delete_img_el.src = "images/icon-cross.svg";
    todo_delete_el.appendChild(todo_delete_img_el);

    todo_task_el.appendChild(task_wrap);
    todo_task_el.appendChild(todo_delete_el);
    list_el.appendChild(todo_task_el);
  });
});
