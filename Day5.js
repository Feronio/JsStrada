const timestamp = () => console.log(new Date()); // new Date() - возвращает текущую дату и время
timestamp();
// возвращает случайное число от 0 до 1
console.log(Math.random()); // 0.1534768990322
// возвращает минимальное число
console.log(Math.min(1, 2)); // 1
// возвращает максимальное число
console.log(Math.max(1, 2)); // 2
// возвращает число возведенное в степень
console.log(Math.pow(2, 8)); // 256
// округление в меньшую сторону
Math.floor(2.3); // 2;
Math.floor(2.9); // 2;
// округление в большую сторону
Math.ceil(1.2); // 2
Math.ceil(0.1); // 1
// округление до ближайшего числа
Math.round(2.4); // 2
Math.round(2.5); // 3
Math.trunc(5.4) // 5
Math.trunc(9.9) // 9
Math.trunc(-1.1) // -1
let num = 12.34;
console.log( num.toFixed(1) ); // "12.3"(до ближайшего)
console.log( isNaN(NaN) ); // true
console.log( isNaN("str") ); // true
console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false, потому что специальное значение: NaN
console.log( isFinite(Infinity) ); // false, потому что специальное значение: Infinity
console.log( Number.isNaN("str") ); // false, так как "str" является строкой, а не числом
console.log( isNaN("str") ); // true, так как isNaN сначала преобразует строку "str" в число и в результате преобразования получает NaN
console.log( Number.isFinite("123") ); // false, так как "123" является строкой, а не числом
console.log( isFinite("123") ); // true, так как isFinite сначала преобразует строку "123" в число 123
console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5
console.log( parseInt('12.3') ); // 12, вернётся только целая часть
console.log( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке
console.log( parseInt('a123') ); // NaN, на первом символе происходит остановка чтения
let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
console.log( 7.3e9 );  // 7.3 миллиардов (7,300,000,000)

// перевод строки добавлен с помощью символа перевода строки
let str1 = "Hello\nWorld";
// многострочная строка, созданная с использованием обратных кавычек
let str2 = `Hello
World`;

console.log(str1 == str2); // true
let str = `Hello`;

// получаем первый символ
console.log( str[0] ); // H
console.log( str.at(0) ); // H

// получаем последний символ
console.log( str[str.length - 1] ); // o
console.log( str.at(-1) ); // o