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
  console.log(description)
}