const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectUp = document.querySelector(".currency-btn")

function selectValues() {
    const correncyValueConvert = document.querySelector(".currency-value-to-conver"); // valor em real

    console.log(correncyValueConvert) // primeiro passo é pegar checar se a função ta chegando
   
}

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
    }
    if (currencySelect.value == "euro") { // (if)Se o select estiver selecionado o valor de euro, entre aqui.
        correncyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "real") { // (if)Se o select estiver selecionado o valor de Real, entre aqui.
        correncyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday)
    }
    if (currencySelect.value == "iene") { // (if)Se o select estiver selecionado o valor de Iene, entre aqui.
        correncyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue * ieneToday)
    }
    if (currencySelect.value == "libra") {
        correncyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    correncyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}
function changeCurrency() {
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


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)