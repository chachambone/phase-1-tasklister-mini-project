document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById('new-task-description');  

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
  deleteItem(taskItem)

  tasks.push(description)
  list.appendChild(taskItem)

}

function deleteItem(taskItem){
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "X"
  deleteButton.addEventListener("click",()=>{
    taskItem.remove();
  });
  taskItem.appendChild(deleteButton);
}
