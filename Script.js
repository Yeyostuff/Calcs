const cantidadPesos = document.querySelector("#pesos");
const btn = document.querySelector("calcularButton");
const cambio = 0.42;
const cambioUsd = 8.10;
const pResult = document.querySelector("#result")
const clear = document.querySelector("#clear")
const clearBtn = document.querySelector("#clear")
const UsdResult = document.querySelector("#resultUSD")
const dolas = document.querySelector("#usdinput")

function conversionPesos(){
    const convertion = parseFloat(cantidadPesos.value) * cambio;
    pResult.innerText = convertion + " Quetzales";
}

function conversionUsd(){
    const convertion = parseFloat(dolas.value) * cambioUsd;
    UsdResult.innerText = convertion + " Quetzales";
}