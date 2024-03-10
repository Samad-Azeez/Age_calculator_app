let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");
let requiredNotice = document.querySelectorAll("required-notice");
let calculateButton = document.querySelector("#calculate");

inputs.forEach( (item, index) => {
    item.addEventListener("input", (event)=> {
        const { target } = event;

        
        if (!target.value) {
            item.classList.add("border-error");
            item.previousElementSibling.classList.add("text-error");
            item.nextElementSibling.classList.remove("hidden")
            item.nextElementSibling.classList.add("text-error");
        }else {
            if (target.value.length >= target.maxLength) {
                target.value = target.value.slice(0, target.maxLength)
                inputs[index +1]?.focus()
            }

            item.classList.remove("border-error");
            item.previousElementSibling.classList.remove("text-error");
            item.nextElementSibling.classList.add("hidden")
            item.nextElementSibling.classList.remove("text-error");
        }

    })
});



calculateButton.addEventListener("click", calculator);

function calculator(){
    const today = new Date()
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    const inputDay = parseInt(document.querySelector("#day").value);
    const inputMonth = document.querySelector("#month").value;
    const inputYear = document.querySelector("#year").value;

    if (!inputDay || !inputMonth || !inputYear) return alert("😒😒😒😒😒😒");

    const data = {};

    // if (Math.abs(inputDay - currentDay) > 0 && Math.abs(inputMonth - currentMonth))



    // let years = currentYear - document.querySelector("#year").value;
    // let months = document.querySelector("#month").value - currentMonth;
    // let days = document.querySelector("#day").value - currentDay;

    // let age = (years*365) + (months*31) + days;
    // let yearsLived = age / years;
    // console.log(yearsLived)

    // console.log(yearsLived);
    //  document.querySelector("#years-lived").innerText = years;
    // document.querySelector("#months-lived").innerText = months;
    // document.querySelector("#days-lived").innerText = days;
}