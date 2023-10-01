import { allTheSame } from './helper.js';

console.log(allTheSame(true, true, true));     // true
console.log(allTheSame(true, false, false));   // false
console.log(allTheSame(false, false, false));  // true
