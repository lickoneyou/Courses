const data1 = [49, 51, 63];
const data2 = [31, 29, 43, 58, 52];

function printHumidities(arr) {
  const arrString = [];
  arr.forEach((el, index) => {
    arrString.push(`${el}% humiditi in ${index + 1} days`);
  });
  return `... ${arrString.join(" ... ")} ...`;
}

console.log(printHumidities(data1));
console.log(printHumidities(data2));
