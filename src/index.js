document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("test")
  })
});