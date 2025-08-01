document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

// Load tasks from Local Storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
}

// Add a new task
function addTask(taskText = null, save = true) {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (!taskText) {
        taskText = taskInput.value.trim();
    }

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create <li> element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create Remove Button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => {
        li.remove();
        removeFromLocalStorage(taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save to Local Storage
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    taskInput.value = '';
}

// Remove task from Local Storage
function removeFromLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
