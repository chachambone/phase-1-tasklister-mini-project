document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById('new-task-description');
  const list = document.getElementById('tasks')

  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    const description = taskInput.value;
    addTask(description)
    form.reset();

  })
});

function addTask(description){
  let tasks = [];
  const list = document.getElementById('tasks')
  const taskItem = document.createElement("li");
  taskItem.textContent = description

  tasks.push(description)
  list.appendChild(taskItem)

}