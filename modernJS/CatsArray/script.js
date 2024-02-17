const cats = [
  { catWeight: 3, foodWeight: 20, owners: ["Наташа"] },
  { catWeight: 6, foodWeight: 90, owners: ["Марина", "Алиса"] },
  { catWeight: 4, foodWeight: 45, owners: ["Алекс", "Ирина"] },
  { catWeight: 7, foodWeight: 80, owners: ["Борис"] },
];

cats.forEach((el) => (el.recomendFood = el.catWeight * 0.75 * 12));

cats.push({
  catWeight: 7,
  foodWeight: 80,
  owners: ["Кирилл"],
  recomendFood: 80,
}),
  console.log(cats);

cats.forEach((el) => {
  if (el.owners.includes("Алекс")) {
    console.log(
      `Кошка ест очень ${el.recomendFood < el.foodWeight ? "много" : "мало"}`
    );
  }
});

const catsEatTooMuchOwners = [];
const catsEatTooLittleOwners = [];

cats.forEach((el) =>
  el.recomendFood < el.foodWeight
    ? catsEatTooMuchOwners.push(el)
    : catsEatTooLittleOwners.push(el)
);

console.log(
  catsEatTooMuchOwners
    .reduce((acc, el) => {
      acc.push(...el.owners);
      return acc;
    }, [])
    .join(" ") +
    ` ${
      catsEatTooMuchOwners.length < 2 ? "хозяин" : "хозяева"
    } кошек, которые едят слишком много!`
);
console.log(
  catsEatTooLittleOwners
    .reduce((acc, el) => {
      acc.push(...el.owners);
      return acc;
    }, [])
    .join(" ") +
    ` ${
      catsEatTooLittleOwners.length <= 1 ? "хозяин" : "хозяева"
    } кошек, которые едят слишком много!`
);

console.log(cats.some((el) => el.foodWeight == el.recomendFood));

function checkNormalCatsF(el) {
  return (
    el.recomendFood * 0.9 < el.foodWeight &&
    el.foodWeight < el.recomendFood * 1.1
  );
}

console.log(cats.some(checkNormalCatsF));

const catsNormalF = cats.filter(checkNormalCatsF);

console.log(catsNormalF);

const shallowCats = [...cats].sort((a, b) => a.recomendFood - b.recomendFood);

console.log(shallowCats);
