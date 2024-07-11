const form = document.querySelector("form");
const employeeList = document.querySelector("#employeeList");
const resetBtn = document.querySelector(".form__btns button[type='reset']");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  let firstName = formData.get("firstname");
  let lastName = formData.get("lastname");
  let email = formData.get("email");
  let hireDate = formData.get("hire_date");
  let photo = formData.get("photo");

  const content = document.createElement("tr");
  content.innerHTML = `
   <td><img src="../images/${photo.name}"></td>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${email}</td>
    <td>${hireDate}</td>
    <td><button class='delete'>delete</button></td>
   `;

  employeeList.append(content);
});

employeeList.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    if (!confirm("Are you sure you want to delete this employee?")) {
      return;
    }

    e.target.parentElement.parentElement.remove();
    return;
  }
});

resetBtn.addEventListener("click", (e) => {
  employeeList.remove();
});
