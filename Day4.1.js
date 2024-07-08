const statusList = {
    IS_PROGRESS: "In progress",
    IS_DONE: "Done",
    IS_TODO: "To do"
};
const progress = {};
const done = {};
const todo = {};
const todoList = {
    list: {
        "Learn the lesson": statusList.IS_PROGRESS,
        "Complete the task": statusList.IS_DONE,
        "Check todoList": statusList.IS_TODO
    },
    changeStatus(name, status) {
        this.list[name] = status;
    },
    addTask(name) {
        this.list[name] = statusList.IS_TODO;
    },
    deleteTask(name) {
        delete this.list[name];
    },
    // showList() {
    //     for (const name in this.list) {
    //         console.log(`${name}: ${this.list[name]}`)
    //     }
    // }
    showList() {
        console.log(`${statusList.IS_TODO}:`);
        for (const name in this.list) {
            if (this.list[name] == statusList.IS_TODO) {
                todo[name] = statusList.IS_TODO;
            }
        }
        if (Object.keys(todo).length === 0) {
            console.log("    -");
        }
        else {
            for (const name in todo) {
                console.log(`    ${name}`);
            }
        }
        console.log(`${statusList.IS_PROGRESS}:`);
        for (const name in this.list) {
            if (this.list[name] == statusList.IS_PROGRESS) {
                progress[name] = statusList.IS_PROGRESS;
            }
        }
        if (Object.keys(progress).length === 0) {
            console.log("    -");
        }
        else {
            for (const name in progress) {
                console.log(`    ${name}`);
            }
        }
        console.log(`${statusList.IS_DONE}:`);
        for (const name in this.list) {
            if (this.list[name] == statusList.IS_DONE) {
                done[name] = statusList.IS_DONE;
            }
        }
        if (Object.keys(done).length === 0) {
            console.log("    -");
        }
        else {
            for (const name in done) {
                console.log(`    ${name}`);
            }
        } 
        for (const name in done) {
            delete done[name];
        }
        for (const name in todo) {
            delete todo[name];
        } 
        for (const name in progress) {
            delete progress[name];
        }
    }
}
todoList.showList();
console.log("------------------------------");
todoList.changeStatus("Learn the lesson", statusList.IS_DONE);
todoList.addTask("Brew tea");
todoList.deleteTask("Complete the task");
todoList.showList();

