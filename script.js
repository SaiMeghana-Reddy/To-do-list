function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <span onclick="removeTask(this)">❌</span>`;
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function removeTask(element) {
  element.parentElement.remove();
}
