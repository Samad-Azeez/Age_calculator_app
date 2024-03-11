let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");
let requiredNotice = document.querySelectorAll("required-notice");
let calculateButton = document.querySelector("#calculate");

inputs.forEach((item, index) => {
  item.addEventListener("input", (event) => {
    const { target } = event;

    if (!target.value) {
      item.classList.add("border-error");
      item.previousElementSibling.classList.add("text-error");
      item.nextElementSibling.classList.remove("hidden");
      item.nextElementSibling.classList.add("text-error");
    } else {
      if (target.value.length >= target.maxLength) {
        target.value = target.value.slice(0, target.maxLength);
        inputs[index + 1]?.focus();
      }

      item.classList.remove("border-error");
      item.previousElementSibling.classList.remove("text-error");
      item.nextElementSibling.classList.add("hidden");
      item.nextElementSibling.classList.remove("text-error");
    }
  });
});

calculateButton.addEventListener("click", calculator);

function calculator() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const inputDay = parseInt(document.querySelector("#day").value);
  const inputMonth = parseInt(document.querySelector("#month").value);
  const inputYear = parseInt(document.querySelector("#year").value);

  const years = currentYear - inputYear;
  const months = Math.abs(currentMonth - inputMonth);
  const days = currentDay - inputDay;

  // Adjust for months if birthdate is in a future month
  if (months < 0) {
    years -= 1;
    months += 12;
  }

//   Optional leap year adjustment
  if (
    inputMonth === 2 &&
    inputDay === 29 &&
    currentMonth < 3 &&
    currentYear % 4 === 0 &&
    (currentYear % 100 !== 0 || currentYear % 400 === 0)
  ) {
    days -= 1;
  }

  const totalDays = years * 365 + months * 31 + days;

  let approximateYearsLived = Math.floor(totalDays / 365); // Approximate age in years (integer division)
  const approximateDaysLived = totalDays % 365;

  const approximateMonthsLived = Math.floor(approximateDaysLived / 31); // Approximate months from remaining days
  const remainingDaysInMonth = approximateDaysLived % 31;

  console;

  if ((currentMonth <= inputMonth) && (currentDay < inputDay)){
    approximateYearsLived = approximateYearsLived - 1;
  }

  document.querySelector("#years-lived").innerText = approximateYearsLived;
  document.querySelector("#months-lived").innerText = approximateMonthsLived;
  document.querySelector("#days-lived").innerText = remainingDaysInMonth;
}
