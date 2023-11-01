const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.addEventListener("load", () => {
  createUser(JSON.parse(xhr.responseText));
});

xhr.send();

const container = document.querySelector(".container");

function createUser(res) {
  const fr = document.createDocumentFragment();
  res.forEach((el) => {
    const user = document.createElement("div");

    const userName = document.createElement("h2");
    userName.textContent = el.name;
    userName.addEventListener("click", () => {
      userPhone.classList.toggle("active");
      userEmail.classList.toggle("active");
      userWeb.classList.toggle("active");
    });
    user.append(userName);

    const userPhone = document.createElement("p");
    userPhone.textContent = `Phone: ${el.phone}`;
    userPhone.style.visibility = "hidden";
    user.append(userPhone);

    const userEmail = document.createElement("p");
    userEmail.textContent = `Email: ${el.email}`;
    userEmail.style.visibility = "hidden";
    user.append(userEmail);

    const userWeb = document.createElement("p");
    userWeb.textContent = `Web: ${el.website}`;
    userWeb.style.visibility = "hidden";
    user.append(userWeb);

    fr.append(user);
  });
  container.append(fr);
}
