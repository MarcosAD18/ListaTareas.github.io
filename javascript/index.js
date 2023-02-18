//Tareas
const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const addNewTask1 = event => {
    event.preventDefault();
    const { value } = event.target.taskText1;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer1.prepend(task);
    event.target.reset();
};

const addNewTask2 = event => {
    event.preventDefault();
    const { value } = event.target.taskText2;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer2.prepend(task);
    event.target.reset();
};

const addNewTask3 = event => {
    event.preventDefault();
    const { value } = event.target.taskText3;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer3.prepend(task);
    event.target.reset();
};

const addNewTask4 = event => {
    event.preventDefault();
    const { value } = event.target.taskText4;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer4.prepend(task);
    event.target.reset();
};

const addNewTask5 = event => {
    event.preventDefault();
    const { value } = event.target.taskText5;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer5.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

