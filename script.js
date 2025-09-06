const cantidadPesos = document.querySelector("#pesos");
const costoProd = document.querySelector("#costoProd");
const btn = document.querySelector("#calcularButton");
const pResult = document.querySelector("#result");
const dResult = document.querySelector('#deposito')
const utilidad = document.querySelector('#utilidad')

const totalPesos = document.querySelector("#total");
const btn2 = document.querySelector("#porcentajeButton");
const costoProducto = document.querySelector("#calculo");
const costoCliente = document.querySelector("#calculoCliente");
const tipoDeCambio = document.querySelector("#cambio");
const porcentaje = document.querySelector("#porcentaje");

const envioForza = 27.5;
const comision = .04;

if(btn){
    btn.addEventListener("click", conversionPesos);
}

if(btn2){
    btn2.addEventListener("click", calculoPorcentajes);
}


function conversionPesos() {
    const menosEnvio = cantidadPesos.value - envioForza;
    pResult.innerText = menosEnvio + " Quetzales";
    const aDepositar = cantidadPesos.value * comision;
    const totalTotal = menosEnvio - aDepositar;
    dResult.innerText = totalTotal + ' Quetzales';
    const utilidadNeta = totalTotal - costoProd.value;
    utilidad.innerText = utilidadNeta + " Quetzales";

}

function calculoPorcentajes() {
    // Convertir los valores a números
    const totalPesosValue = parseFloat(totalPesos.value);
    const porcentajeValue = parseFloat(porcentaje.value); // Asegúrate de que esto sea un input
    const tipoDeCambioValue = parseFloat(tipoDeCambio.value);

    // Verificar que los valores sean números válidos
    if (isNaN(totalPesosValue) || isNaN(porcentajeValue) || isNaN(tipoDeCambioValue)) {
        costoProducto.innerText = "Error: Valores inválidos";
        return;
    }

    const totalQuetzales = totalPesosValue / tipoDeCambioValue;
    const calculoGanancia = porcentajeValue - totalQuetzales;

    // Verificar que el resultado no sea NaN
    if (isNaN(totalQuetzales) || isNaN(calculoGanancia)) {
        costoProducto.innerText = "Error en el cálculo";
    } else {
        costoCliente.innerText = totalQuetzales.toFixed(2) + " Quetzales"; // Agregado espacio
        costoProducto.innerText = calculoGanancia.toFixed(2) + " Quetzales";
        ganancia.innerText = calculoGanancia.toFixed(2) + " Quetzales"; // Agregado espacio
    }
}