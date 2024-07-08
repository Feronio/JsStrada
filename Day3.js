let userName = "Diana";
let userStatus = "";
let isAdmin = false;
let isNormalUser = true;
const statusList = {
    IS_ADMIN: "Administator",
    IS_USER: "User",
    IS_GUEST: "Guest"
}
const checkStatus = () => {
    if (isAdmin) {
        userStatus = statusList.IS_ADMIN;
    }
    else if (isNormalUser) {
        userStatus = statusList.IS_USER;
    }
    else {
        userStatus = statusList.IS_GUEST;
    }
}
checkStatus();
switch (userStatus) {
    case statusList.IS_ADMIN:
        console.log(`Добро пожаловать, ${userName} `);
        console.log(`Ваша роль: ${statusList.IS_ADMIN}`);
        console.log("Пора раздавать задачи неграм")
        break;
    case statusList.IS_USER:
        console.log(`Добро пожаловать, ${userName} 
Ваша роль: ${statusList.IS_USER}
Солнце светит, негры пашут, за работу!`);
        // console.log(`Ваша роль: ${statusList.IS_USER}`);
        // console.log("Солнце светит, негры пашут, за работу!");
        break;
    case statusList.IS_GUEST:
        console.log(`Добро пожаловать, ${userName} `);
        console.log(`Ваша роль: ${statusList.IS_GUEST}`);
        console.log("Пока вы не местный раб системы, но все еще впереди!");
        break;

}
// for (i = 1; i <= 100; i++) {
//     if (i % 2 != 0) continue;
//     console.log(i);
// }
// let i=1;
// do {
//     console.log(i);
//     i++;
// }while(i<=100)
// let i=1;
// while(i<=100){
//     console.log(i);
//     i++;
// }