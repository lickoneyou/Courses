import "bootstrap/dist/css/bootstrap.css";
import "../css/style.css";

import UI from "./config/UI";
import { validate } from "./helpers/validate";
import { showInputError, removeInputError } from "./views/form";

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  onSubmit();
});
inputs.forEach((el) =>
  el.addEventListener("focus", () => removeInputError(el))
);

function onSubmit() {
  const isValidForm = inputs.every((el) => {
    const isValidInput = validate(el);
    if (!isValidInput) showInputError(el);
    return isValidInput;
  });
  console.log(isValidForm);
}
