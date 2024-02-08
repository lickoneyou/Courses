const age = prompt("Сколько вам лет?");

age >= 18
  ? myAlert("Ты можешь купить алкоголь", true)
  : myAlert("Подрости", false);

function myAlert(text, bool) {
  alert(text);
  console.log(text, bool);
}
