document.addEventListener("DOMContentLoaded", () => {
  // Select the form element
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById("tasks");
  const prioritySelect = document.getElementById('task-priority');
  const dueDateInput = document.getElementById('task-due-date');

  const sortAscBtn = document.getElementById("sort-asc");
  const sortDescBtn = document.getElementById("sort-desc");

  let tasks = [];
  const priorityValues = {
    'low': 1,
    'medium': 2,
    'high': 3
  };
  
  
  // Add submit event listener to the form
  form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the task description, priority, and due date from the input fields
    const description = taskInput.value;
    const priority = prioritySelect.value;
    const dueDate = dueDateInput.value;

    if (!description) {
      alert('Please enter a task description');
      return;
    }
    addTask(description, priority, dueDate);
      form.reset();
  });
  
  function addTask(description, priority, dueDate) {
    const task = { description, priority, dueDate };
    tasks.push(task);

    const li = document.createElement('li');
    li.className = `task-item priority-${priority}`;

    const taskText = document.createElement('span');
    taskText.className = 'task-description';
    taskText.textContent = description;
    li.appendChild(taskText);

    if (priority) {
      // Add a more noticeable space between description and priority
      const spacer = document.createElement('span');
      spacer.innerHTML = '&nbsp;&nbsp;';  // Add non-breaking spaces for more visible separation
      li.appendChild(spacer);
      
      const priorityBadge = document.createElement('span');
      priorityBadge.className = `priority-badge ${priority}`;
      priorityBadge.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
      li.appendChild(priorityBadge);
    }

    // Add due date if it exists
    if (dueDate) {
      const dueDateElement = document.createElement('span');
      dueDateElement.className = 'due-date';
      dueDateElement.textContent = `Due: ${formatDate(dueDate)}`;
      li.appendChild(dueDateElement);
    }

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      // Populate form with task data for editing
      taskInput.value = task.description;
      prioritySelect.value = task.priority;
      
      // Remove the current task
      const index = tasks.indexOf(task);
      if (index > -1) {
        tasks.splice(index, 1);
      }
      li.remove();
    });
    li.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      // Remove from tasks array
      const index = tasks.indexOf(task);
      if (index > -1) {
        tasks.splice(index, 1);
      }
      // Remove from DOM
      li.remove();
    });
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  }

  // Format date to be more readable
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
 
  sortAscBtn.addEventListener('click', () => {
    sortTasks('asc');
  });

  sortDescBtn.addEventListener('click', () => {
    sortTasks('desc');
  });

  function sortTasks(direction) {
    // Clear current list
    taskList.innerHTML = '';
    
    // Sort tasks array
    const sortedTasks = [...tasks].sort((a, b) => {
      if (direction === 'asc') {
        return priorityValues[a.priority] - priorityValues[b.priority];
      } else {
        return priorityValues[b.priority] - priorityValues[a.priority];
      }
    });
    
    // Re-render all tasks
    sortedTasks.forEach(task => {
      addTask(task.description, task.priority, task.dueDate);
    });
    
    // Remove duplicates from tasks array
    tasks = sortedTasks;
  }
  
});

