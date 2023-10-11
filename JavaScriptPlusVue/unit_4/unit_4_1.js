// Чему равно а, почему?

let a = 0 || 'string'; // 'string'
console.log(a);
a = 1 && 'string'; //'string'
console.log(a);
a = null || 25; // 25
console.log(a);
a = null && 25; // null
console.log(a);
a = null || 0 || 35; // 35
console.log(a);
a = null && 0 && 35; // null
console.log(a);


// Что отобразится в консоли. Почему?

console.log(12 + 14 + '12') // 2612
console.log(3 + 2 - '1') // 4
console.log('3' + 2 - 1) // 31
console.log(true + 2) // 3
console.log(+'10' + 1) // 11
console.log(undefined + 2) // NaN
console.log(null + 5) // 5
console.log(true + undefined) // NaN
