const p1 = {
  fName: "Jack",
  lName: "White",
  weight: null,
  height: null,
  calcBMI(w, h) {
    this.weight = w;
    this.height = h;
    return (w / h ** 2).toFixed(1);
  },
};

const p2 = {
  fName: "Mike",
  lName: "Black",
  weight: null,
  height: null,
  calcBMI(w, h) {
    this.weight = w;
    this.height = h;
    return (w / h ** 2).toFixed(1);
  },
};

p1.calcBMI(79, 1.7);
p2.calcBMI(91, 1.93);

const winner = p1.calcBMI(79, 1.7) > p2.calcBMI(91, 1.93) ? p1 : p2;
const loser = p1.calcBMI(79, 1.7) > p2.calcBMI(91, 1.93) ? p2 : p1;

console.log(
  `${winner.fName} ${winner.lName} (${winner.calcBMI(
    winner.weight,
    winner.height
  )}) is higher than ${loser.fName} ${loser.lName} (${loser.calcBMI(
    loser.weight,
    loser.height
  )})`
);
