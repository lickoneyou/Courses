const getAverageHumanAge = (catAges) =>
  catAges
    .map((el) => (el <= 2 ? el * 10 : el * 7))
    .filter((el) => el > 18)
    .reduce((acc, el, index, arr) => {
      if (arr.length == index + 1) {
        acc = (acc + el) / arr.length;
        return acc;
      }
      acc = acc + el;
      return acc;
    }, 0);

const arr1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const arr2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

console.log(getAverageHumanAge(arr1));
console.log(getAverageHumanAge(arr2));
