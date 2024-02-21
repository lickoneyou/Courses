const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
const tips = [];
const total = [];

function calculateTips(bills) {
  bills.forEach((el, index) => {
    el > 20 ? tips.push(20) : tips.push(15);
    const t = (el / 100) * tips[index];
    total.push(t + el);
  });
}

calculateTips(bills);

console.log(tips);
console.log(total);

function calculateAverage(arr) {
  return arr.reduce((acc, el) => acc + el, 0) / arr.length;
}

console.log(calculateAverage(total));
