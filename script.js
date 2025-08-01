document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Create li and set text
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            // Onclick to remove task
            removeBtn.onclick = () => {
                taskList.removeChild(li);
            };

            // Append remove button to li, then li to taskList
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            // Clear input
            taskInput.value = '';
        }
    }

    // Event listener for Add button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
