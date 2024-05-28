document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const foodChoices = [];
    document
      .querySelectorAll("input[type=checkbox]:checked")
      .forEach((checkbox) => {
        foodChoices.push(checkbox.value);
      });

    if (foodChoices.length < 2) {
      alert("Please choose at least two food options.");
      return;
    }

    const food = foodChoices.join(", ");
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const table = document.getElementById("dataTable");
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = firstName;
    newRow.insertCell(1).textContent = lastName;
    newRow.insertCell(2).textContent = email;
    newRow.insertCell(3).textContent = address;
    newRow.insertCell(4).textContent = pincode;
    newRow.insertCell(5).textContent = gender;
    newRow.insertCell(6).textContent = food;
    newRow.insertCell(7).textContent = state;
    newRow.insertCell(8).textContent = country;

    document.getElementById("dataForm").reset();
  });
