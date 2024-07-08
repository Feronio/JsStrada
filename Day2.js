let userName = "Eduard";
let userList = [];
let isDone = 0;
function pushUser(userName) {
    if (userName) {
        console.log(`Записывается имя - ${userName} `);
        userList.push(userName);
        // userName = '';
        isDone = 1;
    }
    if (isDone) {
        console.log("Имя записано");
    }
}
function getResult() {
    return isDone ? console.log(userList) : console.log("Добавьте запись");
};
pushUser(userName);
userName = "Diana";
pushUser(userName);
let result = getResult();