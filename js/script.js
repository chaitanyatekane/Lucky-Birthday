const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky");
const output = document.querySelector(".output");
const form = document.querySelector("#birthday-form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  if(luckyNumber.value == 0) {
      const message = "Enter Number Greater Than 0";
      printResult(message);
      clearInput();
      return;
    
  }
  const result = findIfLucky(dob.value.replaceAll("-", ""), luckyNumber.value);
  printResult(result);
  clearInput();
}

function clearInput() {
  dob.value = "";
  luckyNumber.value = "";

  setTimeout(() => output.classList.remove("active"), 3000);
}

const findIfLucky = (dob, luckyNumber) => {
  const sum = dob.split("").reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  const divideResult = sum % parseInt(luckyNumber, 10);
  if (divideResult) return "Your Birthday Is Not Lucky 😕";

  return "Your Birthday Is Lucky 🥳 ";
};

function printResult(result) {
  output.innerHTML = result;
  output.classList.add("active");
}