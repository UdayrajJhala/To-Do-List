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

  if (!taskname || !deadline || !priority) {
    alert("Please enter all details for the task.");
    return;
  }

  const newTask = document.createElement("div");
  newTask.classList.add("task");

  newTask.innerHTML = `
    <div class="taskname"><span>${taskname}</span></div>
    <div class="deadline">${deadline}</div>
    <div class="priority">${priority}</div>
    <div class="status"><input class="check" type="checkbox"></div>
    <div class="delete-container"> <button class="delete">DELETE</button></div>
  `;

  const taskList = document.querySelector(".task-list");
  taskList.appendChild(newTask);

  newTask.querySelector(".delete").addEventListener("click", () => {
    newTask.remove();
  });

  const statusInput = newTask.querySelector(".check");
  statusInput.addEventListener("change", () => {
    if (statusInput.checked) {
      newTask.querySelector(".taskname").style.textDecoration="line-through";
      newTask.querySelector(".taskname").style.color="grey";
      newTask.querySelector(".deadline").style.textDecoration="line-through";
      newTask.querySelector(".deadline").style.color="grey";
      newTask.querySelector(".priority").style.textDecoration="line-through";
      newTask.querySelector(".priority").style.color="grey";
    } else {
      newTask.style.textDecoration="none";
      newTask.querySelector(".taskname").style.textDecoration="none";
      newTask.querySelector(".taskname").style.color="white";
      newTask.querySelector(".deadline").style.textDecoration="none";
      newTask.querySelector(".deadline").style.color="white";
      newTask.querySelector(".priority").style.textDecoration="none";
      newTask.querySelector(".priority").style.color="white";
    }
  });
}

