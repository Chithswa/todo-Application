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
        } else if (e.target.classList.contains('edit-task')) {
            const item = e.target.closest('li');
            editTask(item);
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = task;

        const btnGroup = document.createElement('div');

        const doneBtn = document.createElement('button');
        doneBtn.className = 'btn btn-success btn-sm done-task';
        doneBtn.textContent = 'Done';
        btnGroup.appendChild(doneBtn);

        const editBtn = document.createElement('button');
        editBtn.className = 'btn btn-warning btn-sm edit-task';
        editBtn.textContent = 'Edit';
        btnGroup.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm delete-task';
        deleteBtn.textContent = 'Delete';
        btnGroup.appendChild(deleteBtn);

        li.appendChild(btnGroup);
        taskList.appendChild(li);
    }

    function editTask(item) {
        const currentText = item.childNodes[0].nodeValue.trim();
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.value = currentText;

        item.childNodes[0].nodeValue = '';

        const saveBtn = document.createElement('button');
        saveBtn.className = 'btn btn-primary btn-sm save-task';
        saveBtn.textContent = 'Save';

        item.insertBefore(input, item.firstChild);
        item.appendChild(saveBtn);

        saveBtn.addEventListener('click', function () {
            const updatedText = input.value.trim();
            if (updatedText) {
                item.childNodes[0].nodeValue = updatedText;
                item.removeChild(input);
                item.removeChild(saveBtn);
            }
        });
    }
});
