function add() {
  const taskname = document.querySelector(".taskinput").value;
  const deadline = document.querySelector(".date-input").value;
  let priority = "";

  if (document.querySelector(".high-box").checked) {
    priority = "High";
  } 
  else if (document.querySelector(".medium-box").checked) {
    priority = "Medium";
  } 
  else if (document.querySelector(".low-box").checked) {
    priority = "Low";
  }

  const newTask = document.createElement("div");
  newTask.classList.add("task");

  newTask.innerHTML = `
    <div class="taskname"><span>${taskname}</span></div>
    <div class="deadline">${deadline}</div>
    <div class="priority">${priority}</div>
    <div class="status"><input class="check" type="checkbox"></div>
  `;

  const taskList = document.querySelector(".task-list");
  taskList.appendChild(newTask);
}
