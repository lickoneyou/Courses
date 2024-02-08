function getAverage(sales) {
  return sales.reduce((acc, el) => acc + el, 0);
}

function printBonus(dept1, dept2) {
  let lid = null;
  let lidName = null;
  if (dept1 > dept2) {
    lid = dept1 - dept2;
    lidName = dept1;
  } else {
    lid = dept2 - dept1;
    lidName = dept2;
  }
  const val = (lid / lidName) * 100;

  console.log(val < 30 ? 'Премии не будет' : `Премия ${val.toFixed(0)}%`);
}

const q1t1 = [45467, 29842, 38501];
const q1t2 = [70533, 50121, 33899];

const q2t1 = [50301, 21984, 19207];
const q2t2 = [72381, 41562, 29465];

printBonus(getAverage(q1t1), getAverage(q1t2));

printBonus(getAverage(q2t1), getAverage(q2t2));
