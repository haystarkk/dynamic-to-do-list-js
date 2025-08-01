document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ✅ Define addTask function
    function addTask() {
        const taskText = taskInput.value.trim(); // ✅ Trim input and store in taskText

        // ✅ Check if taskText is empty
        if (taskText === "") {
            alert("Please enter a task."); // ✅ Alert if empty
            return;
        }

        // ✅ Create li element and set text
        const li = document.createElement('li');
        li.textContent = taskText;

        // ✅ Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // ✅ Remove li on click
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // ✅ Append button to li, then li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // ✅ Clear input field
        taskInput.value = '';
    }

    // ✅ Add button click event
    addButton.addEventListener('click', addTask);

    // ✅ Enter key event
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
