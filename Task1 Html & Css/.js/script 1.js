let calci = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += `${operator}`;
}

function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(
      display.value.replace(/(\d+)\s*\%\s*(\d+)/g, "($1%$2)")
    );
  } catch (error) {
    alert("Invalid Expression");
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key >= "0" && event.key <= "9") {
    appendNumber(event.key);
  } else if (["+", "-", "*", "/", "/", "%"].includes(event.key)) {
    appendOperator(event.key);
  } else if (event.key === "Enter") {
    event.preventDefault();
    calculate();
  } else if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else {
    alert("Only numbers and basic operators are allowed");
  }
});
