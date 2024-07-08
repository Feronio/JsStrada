// const userList = ["Eduard", "Diana", "Tosia"];
// console.log(userList);
// console.log("-------------------------------");
// const deleteLastUser = userList.pop();
// const deleteFirstUser = userList.shift();
// userList.push("Frosia");
// userList.unshift("Lisa");
// const firstUser = userList.slice(0, 1);
// userList.splice(2, 1);
// userList.splice(2, 0, "Nikita");
// console.log(userList);
// console.log(deleteFirstUser);
// console.log(deleteLastUser);
// console.log(firstUser);
// console.log("-------------------------------");

// for (const user of userList) {
//     console.log(user);
// }
// console.log("-------------------------------");
// console.log("FOREACH");
// const numberList = [1, 4, 5, 6, 9, 11, 0, 41, 44, 65, 64];
// console.log(numberList);
// numberList.forEach(number => {
//     console.log(`Number is ${number}`);
// })
// const numbers = [
//     { name: 'Ivan', age: 18 },
//     { name: 'Petr', age: 25 },
//     { name: 'Anna', age: 20 }
// ];
// const firstNegativeNumber = numbers.find(number => number.age = 18);
// console.log(firstNegativeNumber); // -2
// const numbers = [1, 11, -2, 3, -10, 4];
// const firstNegativeNumberIndex = numbers.findIndex(number => number < 0);
// console.log(firstNegativeNumberIndex); // 2
// const eduardIndex = userList.indexOf("Eduard",0);
// console.log(eduardIndex);
// const isDianaIncluded = userList.includes("Diana");
// console.log(isDianaIncluded);
// console.log("find animal using FIND()")
// const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
// const findedAnimal = animals.find(animal => animal.toString().length > 7);
// console.log(findedAnimal);
// console.log("---------------------------")
// console.log("find animal using FOR OF")
// for (let animal of animals) {
//     if (animal.length > 7) {
//         console.log(animal);
//         break;
//     }

// }
// const numberList = [1, 11, -2, 3, -10, 4];
// // const negativeNumber = numberList.filter(number => number < 0 );
// // console.log(negativeNumber);
// // const absNumber = numberList.map(number => Math.abs(number));
// // console.log(absNumber);
// const sortNumberList = numberList.sort((a, b) => a - b);
// console.log(sortNumberList);
// const animals1 = ['cat', 'dog', 'elephant'];
// const animals2 = ['tiger', 'lion'];
// const animals = animals1.concat(animals2);
// console.log(animals); // ['cat', 'dog', 'elephant', 'tiger', 'lion']
// const string = 'cat,dog,elephant';
// const animals = string.split(',');
// console.log(animals); // ['cat', 'dog', 'elephant']
// const animals = ['cat', 'dog', 'elephant'];
// const string = animals.join('-');
// console.log(string); // 'cat-dog-elephant'
// const words = ['cat', 'dog', 'elephant'];
// const reversedWords = words.reverse();
// console.log(reversedWords); // ['elephant', 'dog', 'cat']
const animals = ['cat', 'dog', 'elephant'];
const isArray = Array.isArray(animals);
console.log(isArray); // true








