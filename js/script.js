let formElement = document.querySelector(".js-form")
let currencyElement = document.querySelector(".js-currency")
let amountElement = document.querySelector(".js-amount")
let resultElement = document.querySelector(".js-result")

let rateEUR = 4.49;
let rateUSD = 4.12;
let rateNOK = 0.38;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = +amountElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "EUR":
            result = amount * rateEUR;
            break;
        case "USD":
            result = amount * rateUSD;
            break;
        case "NOK":
            result = amount * rateNOK;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)}PLN`;
});