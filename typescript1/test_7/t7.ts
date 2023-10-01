function toString<T>(par: T): string {
  return JSON.stringify(par)
}

console.log(typeof toString(1));
console.log(typeof toString('1'));
console.log(typeof toString(true));
console.log(typeof toString([1,2,3,4]));
console.log(typeof toString({name: 'Kiryl'}));

