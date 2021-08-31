const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky");
const output = document.querySelector(".output");
const form = document.querySelector("#birthday-form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
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
  if (divideResult) return `${luckyNumber} is not that lucky! 😕`;

  return `${luckyNumber} is a lucky number!! 🥳 `;
};

function printResult(result) {
  output.innerHTML = result;
  output.classList.add("active");
}