document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#taskInput");
  const addBtn = document.querySelector("#addBtn");
  const list = document.querySelector("ul");

  const createTaskItem = () => {
    const task = input.value;
    const todoItem = `<li class="todo-item">
        <span class="item">${task}</span>
        <button class="closeBtn">X</button>
    </li>`;

    list.insertAdjacentHTML("afterbegin", todoItem);
    input.value = "";
    input.focus();
  };

  addBtn.addEventListener("click", () => {
    createTaskItem();
  });

  list.addEventListener("click", (e) => {
    const target = e.target;
    if (target.nodeName === "BUTTON") {
      target.parentNode.remove();
    }
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      createTaskItem();
    }
  });
});
