const massa = prompt("Твой вес в кг");
const height = prompt("Твой вес в см");

massa / (height / 100) ** 2 > 25 ? alert("Ты толстый") : alert("Ты норм");
