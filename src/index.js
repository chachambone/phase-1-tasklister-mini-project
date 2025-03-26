document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById('new-task-description');  
  const userInput = document.getElementById('user-name');

  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    const description = taskInput.value;
    const user = userInput.value;

    addTask(description,user)
    form.reset();

  })
});

function addTask(description,user){
  let tasks = [];
  tasks.push(description)

  const list = document.getElementById('tasks')
  const taskItem = document.createElement("li");

  taskItem.textContent = `${description} done by -  ${user} `
  
  deleteItem(taskItem)
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
