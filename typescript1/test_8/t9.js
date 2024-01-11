"use strict";
function mySort(a, sort) {
    if (sort === 'up')
        return a.sort((a, b) => a.id - b.id);
    else
        return a.sort((a, b) => b.id - a.id);
}
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
console.log(mySort(data, 'up'));
console.log(mySort(data, 'down'));
