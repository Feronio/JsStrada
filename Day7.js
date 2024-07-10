const statusList = {
    IS_PROGRESS: "In progress",
    IS_DONE: "Done",
    IS_TODO: "To do"
};
const priorityList = {
    IS_HIGH: 'high',
    IS_LOW: 'low'
}
const todoList = [
    { name: 'create a post', status: statusList.IS_PROGRESS, priority: priorityList.IS_LOW },
    { name: 'test', status: statusList.IS_DONE, priority: priorityList.IS_HIGH }
];
const progress = [];
const done = [];
const todo = [];
function changeStatus(name, status) {
    let checkPriority = '';
    if (status == statusList.IS_PROGRESS) {
        checkPriority = priorityList.IS_HIGH;
    }
    else {
        checkPriority = priorityList.IS_LOW;
    }
    const changeIndex = todoList.findIndex(nameTask => nameTask.name == name);
    todoList[changeIndex] = { name: name, status: status, priority: checkPriority };
}
function addTask(name) {
    try {
        if (3 > name.length || name.length > 30) {
            throw new Error("Недпустимая длина строки");
        }
        todoList.push({ name: name, status: statusList.IS_TODO, priority: priorityList.IS_LOW });
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Функция прошла проверку")
    }
}
function deleteTask(name) {
    const deleteIndex = todoList.findIndex(nameTask => nameTask.name == name);
    todoList.splice(deleteIndex, 1);
}
function showList() {
    console.log(`${statusList.IS_TODO}:`);
    for (task of todoList) {
        if (task.status == statusList.IS_TODO) {
            todo.push(task.name);
        }
    }
    if (todo.length === 0) {
        console.log("    -");
    } {
        for (const name of todo) {
            console.log(`    ${name}`);
        }
    }
    console.log(`${statusList.IS_PROGRESS}:`);
    for (task of todoList) {
        if (task.status == statusList.IS_PROGRESS) {
            progress.push(task.name);
        }
    }
    if (progress.length === 0) {
        console.log("    -");
    } {
        for (const name of progress) {
            console.log(`    ${name}`);
        }
    }
    console.log(`${statusList.IS_DONE}:`);
    for (task of todoList) {
        if (task.status == statusList.IS_DONE) {
            done.push(task.name);
        }
    }
    if (done.length === 0) {
        console.log("    -");
    } {
        for (const name of done) {
            console.log(`    ${name}`);
        }
    }
    for (const name of done) {
        const deleteIndex = done.findIndex(nameTask => nameTask.name == name);
        done.splice(deleteIndex, 1);
    }
    for (const name of todo) {
        const deleteIndex = todo.findIndex(nameTask => nameTask.name == name);
        todo.splice(deleteIndex, 1);
    }
    for (const name of progress) {
        const deleteIndex = progress.findIndex(nameTask => nameTask.name == name);
        progress.splice(deleteIndex, 1);
    }
}
// showList();
// console.log("---------------------")
// changeStatus('create a post', statusList.IS_DONE);
// addTask("make the bed");
addTask("Go");
// deleteTask("test");
// showList();
// console.log("---------------------")
// deleteTask('create a post');
// showList();
