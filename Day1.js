let userName = "Eduard";
let userAge = 22;
let userGender;
console.log(userGender + "," + userAge);
console.log(`Next age is ${userAge + 1}`);
let ageCheck = false;
console.log(typeof (true + ageCheck));
console.log(typeof (+userName));
console.log(userGender || ageCheck || userAge);// Первое истинное значени слева направо
console.log(1 && 0);//Если есть ложное, выводит его
console.log(1 && 5);//Если оба истинные, выводит последнее слева направо
console.log(null == undefined)//Равны друг другу и не равны ничему больше
console.log(null == 0);//Ложно
console.log(null >= 0);//Истинно, потому что сравнение приводит null к числу 0

