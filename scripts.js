const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const correncyValueToConvert = document.querySelector(".currency-value-to-conver"); // valor em real
    const correncyValueConverted = document.querySelector(".currency-value"); // valor em Dollar

    const dolarToday = 5.2
    const euroToday = 6.2


    if (currencySelect.value == "dolar") { // (if)Se o select estiver selecionado o valor de dollar, entre aqui.
        correncyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") { // (if)Se o select estiver selecionado o valor de euro, entre aqui.
        correncyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    correncyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}
function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dollar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro "
        currencyImage.src = "./assets/euro.png"
    }
    if(currencySelect.value == "bit") {
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if(currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/Real.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues);