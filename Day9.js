const str = 3;
function stringConverter(str) {
    if (typeof str !== 'string') {
       throw new Error( "Ошибка: входное значение не является строкой");
     }
     if (str.length > 50) {
       throw new Error ("Строка слишком длинная");
     }
   
     // другой код
   }
   
   stringConverter(1); // "Ошибка: входное значение не является строкой"
   // программа прервется
