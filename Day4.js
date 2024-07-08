const statusList = {
    IS_ADMIN: "Administator",
    IS_USER: "User",
    IS_GUEST: "Guest"
}
const Nikita = statusList.IS_USER;
const userList = {
    list: {
"Eduard": statusList.IS_ADMIN,
"Diana": statusList.IS_GUEST,
Nikita
    },
    add(name,status) {
        this.list[name] = status;
    },
    delete(name){
        delete this.list[name];
    },
    show(){
        for(const name in this.list){
            console.log(`${name}: ${this.list[name]}`);
        }
    }
}
userList.show();
console.log("---------------");
userList.add("Kamil",statusList.IS_USER);
userList.delete("Eduard");
userList.show();