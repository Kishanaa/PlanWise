function addTask() {
  const description = document.getElementById("description").value;
  const deadline = document.getElementById("deadline").value;
  const duration = document.getElementById("duration").value;

  if (description === "" || deadline === "" || duration === "") {
    alert("Please fill in all fields.");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.textContent = `${description} | Deadline: ${deadline} | Duration: ${duration}`;
  
  document.getElementById("taskList").appendChild(taskItem);

  // Clear fields
  document.getElementById("description").value = "";
  document.getElementById("deadline").value = "";
  document.getElementById("duration").value = "";
}
