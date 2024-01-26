function inputErrorTemplate(msg) {
  return `
    <div class='invalid-feedback'>${msg}</div>
    `;
}

export function showInputError(el) {
  const parrent = el.parentElement;
  const msg = el.dataset.invalidMessage || "Invalid input";
  const template = inputErrorTemplate(msg);
  el.classList.add("is-invalid");
  parrent.insertAdjacentHTML("beforeend", template);
}

export function removeInputError(el) {
  const parrent = el.parentElement;
  const err = parrent.querySelector(".invalid-feedback");
  if (!err) return;

  el.classList.remove("is-invalid");
  parrent.removeChild(err);
}
