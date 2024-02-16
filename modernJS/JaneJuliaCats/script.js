const jane1Arr = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const julia1Arr = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];

const jane2Arr = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
const julia2Arr = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

const verifyCats = (arr1, arr2) => {
  const newArr1 = [...arr1];
  newArr1.pop();
  newArr1.shift();
  const newAllArr = newArr1.concat(arr2);
  newAllArr.forEach((el, index) =>
    console.log(
      `Кошка № ${index + 1} ${
        el >= 2
          ? `взрослая, ей ${el} ${el <= 4 ? "года" : "лет"}`
          : "ещё котёнок"
      }`
    )
  );
};

verifyCats(jane1Arr, julia1Arr);

console.log("================");

verifyCats(jane2Arr, julia2Arr);
