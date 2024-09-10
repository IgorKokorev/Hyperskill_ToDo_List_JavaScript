const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const addTaskButton = document.getElementById('add-task-button');

let lastId = 0;

function Task(taskName) {
    this.id = ++lastId;
    this.taskName = taskName;
    this.completed = false;
}

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(id) {
    let index = tasks.findIndex(task => task.id === id);
    let task = tasks[index];
    tasks.splice(index, 1);
    let li = document.getElementById('task-' + task.id);
    li.remove();
    saveTasks();
}

function createTask(task) {
    let li = document.createElement("li");
    li.id = 'task-' + task.id;
    li.innerHTML = '<input type="checkbox"><span class="task">' + task.taskName + '</span><button class="delete-btn">X</button>';
    let button = li.getElementsByTagName('button')[0];
    let checkBox = li.getElementsByTagName('input')[0];
    checkBox.checked = task.completed;
    let text = li.getElementsByTagName('span')[0];
    text.style.textDecoration = checkBox.checked ? "line-through" : "none";
    button.addEventListener('click', () => {
        deleteTask(task.id);
    })
    checkBox.addEventListener('change', () => {
            text.style.textDecoration = checkBox.checked ? "line-through" : "none";
            task.completed = checkBox.checked;
            saveTasks()
    });
    taskList.appendChild(li);
    saveTasks()
}

tasks.forEach((task) => {
    createTask(task);
})

addTaskButton.addEventListener('click', (e) => {
    let newTask = inputTask.value;
    if (newTask === '') { }
    else {
        let task = new Task(newTask);
        tasks.push(task);
        createTask(task);
    }
    inputTask.value = "";
})