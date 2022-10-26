const cantidadPesos = document.querySelector("#pesos");
const btn = document.querySelector("#calcularButton");
const pResult = document.querySelector("#result");

const dolas = document.querySelector("#usdinput");
const btnUsd = document.querySelector("#usdbtn");
const UsdResult = document.querySelector("#resultUSD");

const cambio = 0.42;
const cambioUsd = 8.10;


if(btn){
    btn.addEventListener("click", conversionPesos);
}

if(btnUsd){
    btnUsd.addEventListener("click", conversionUsd);
}

function conversionPesos() {
    const convertion = parseFloat(cantidadPesos.value) * cambio;
    pResult.innerText = convertion + " Quetzales";
    console.log(convertion);
}

function conversionUsd() {
    const convertion = parseFloat(dolas.value) * cambioUsd;
    UsdResult.innerText = convertion + " Quetzales";
}

