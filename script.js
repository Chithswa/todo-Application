document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('todo-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();

        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-task')) {
            const item = e.target.closest('li');
            taskList.removeChild(item);
        } else if (e.target.classList.contains('done-task')) {
            const item = e.target.closest('li');
            item.classList.toggle('done');
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = task;

        const doneBtn = document.createElement('button');
        doneBtn.className = 'btn btn-success btn-sm done-task';
        doneBtn.textContent = 'Done';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm delete-task';
        deleteBtn.textContent = 'Delete';

        const btnGroup = document.createElement('div');
        btnGroup.appendChild(doneBtn);
        btnGroup.appendChild(deleteBtn);

        li.appendChild(btnGroup);
        taskList.appendChild(li);
    }
});
