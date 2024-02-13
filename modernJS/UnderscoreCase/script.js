const textarea = document.createElement("textarea");
textarea.value = `underscore_case
first_name
next_Variable
 Calculate_AGE
arrived_flight
`;
document.body.append(textarea);
const btn = document.createElement("button");
btn.textContent = "BTN";
document.body.append(btn);

const camelCasefn = () => {
  const arr = textarea.value
    .split("\n")
    .filter((el) => el)
    .map((el) => {
      el = el.split("_");
      el[0] = el[0].toLowerCase().trim();
      el[1] = el[1].slice(0, 1).toUpperCase() + el[1].slice(1).toLowerCase();
      return el.join("");
    });
  arr.forEach((el) => console.log(el));
};

btn.addEventListener("click", camelCasefn);
