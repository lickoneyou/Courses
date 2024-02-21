function calculateTips(bill) {
  const tips = bill.map((el) => (el < 20 ? 20 : 15));
  const total = bill.reduce((acc, el, ind) => {
    const t = (el / 100) * tips[ind];
    acc.push(el + t);
    return acc;
  }, []);
  console.log(total);
}

const billsArr = [11, 20, 47];

calculateTips(billsArr);
