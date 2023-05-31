{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.49;
        const rateUSD = 4.12;
        const rateNOK = 0.38;

        switch (currency) {
            case "EUR":
                return amount * rateEUR;

            case "USD":
                return amount * rateUSD;

            case "NOK":
                return amount * rateNOK;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)}PLN`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const currency = currencyElement.value;
        const amount = +amountElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}