const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectUp = document.querySelector(".currency-btn");


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const correncyValueToConvert = document.querySelector(".currency-value-to-conver"); // valor em real
    const correncyValueConverted = document.querySelector(".currency-value"); // valor em Dollar

    const dolarToday = 5.2
    const euroToday = 5.37
    const realToday = 1
    const ieneToday = 0.033
    const libraToday = 6.33


    if (currencySelect.value == "dolar") { // (if)Se o select estiver selecionado o valor de dollar, entre aqui.
        correncyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    } else
        if (currencySelect.value == "euro") { // (if)Se o select estiver selecionado o valor de euro, entre aqui.
            correncyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday)
        } else
            if (currencySelect.value == "real") { // (if)Se o select estiver selecionado o valor de Real, entre aqui.
                correncyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL"
                }).format(inputCurrencyValue * realToday)
            } else
                if (currencySelect.value == "iene") { // (if)Se o select estiver selecionado o valor de Iene, entre aqui.
                    correncyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
                        style: "currency",
                        currency: "JPY"
                    }).format(inputCurrencyValue / ieneToday)
                } else {
                    correncyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                        style: "currency",
                        currency: "GBP"
                    }).format(inputCurrencyValue / libraToday)
                }





    if (currencySelectUp.value == "dolar") { // (if)Se o select estiver selecionado o valor de dollar, entre aqui.
        correncyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (currencySelectUp.value == "euro") { // (if)Se o select estiver selecionado o valor de euro, entre aqui.
        correncyValueToConvert.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencySelectUp.value == "real") { // (if)Se o select estiver selecionado o valor de Real, entre aqui.
        correncyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    if (currencySelectUp.value == "iene") { // (if)Se o select estiver selecionado o valor de Iene, entre aqui.
        correncyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
    }
    if (currencySelectUp.value == "libra") {
        correncyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

}
function changeCurrencyTo() {
    const currencyName = document.getElementById("currency-to")
    const currencyImage = document.querySelector("#currency-img-to")

    if (currencySelectUp.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dollar.png"
    }
    if (currencySelectUp.value == "euro") {
        currencyName.innerHTML = "Euro "
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelectUp.value == "bit") {
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if (currencySelectUp.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/Real.png"
    }
    if (currencySelectUp.value == "iene") {
        currencyName.innerHTML = "Iene"
        currencyImage.src = "./assets/Iene.png"
    }
    if (currencySelectUp.value == "libra") {
        currencyName.innerHTML = "Libra UK"
        currencyImage.src = "./assets/libra.png"
    }

    convertValues()

}
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector("#currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dollar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro "
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "bit") {
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/Real.png"
    }
    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene"
        currencyImage.src = "./assets/Iene.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra UK"
        currencyImage.src = "./assets/libra.png"
    }

    convertValues()

}

currencySelectUp.addEventListener("change", changeCurrencyTo)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)