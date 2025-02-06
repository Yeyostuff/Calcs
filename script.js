const cantidadPesos = document.querySelector("#pesos");
const btn = document.querySelector("#calcularButton");
const pResult = document.querySelector("#result");
const dResult = document.querySelector('#deposito')

const totalPesos = document.querySelector("#total");
const btn2 = document.querySelector("#porcentajeButton");
const costoProducto = document.querySelector("#calculo");
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
    const aDepositar = menosEnvio * comision;
    const totalTotal = menosEnvio - aDepositar;
    dResult.innerText = totalTotal + ' Quetzales';
}

function calculoPorcentajes() {
    // Convertir los valores a números
    const totalPesosValue = parseFloat(totalPesos.value);
    const porcentajeValue = parseFloat(porcentaje.value)/100; // Asegúrate de que esto sea un input
    const tipoDeCambioValue = parseFloat(tipoDeCambio.value);

    // Verificar que los valores sean números válidos
    if (isNaN(totalPesosValue) || isNaN(porcentajeValue) || isNaN(tipoDeCambioValue)) {
        costoProducto.innerText = "Error: Valores inválidos";
        return;
    }

    const menosPorcentaje = totalPesosValue - (totalPesosValue * porcentajeValue);
    const totalQuetzales = menosPorcentaje / tipoDeCambioValue;

    // Verificar que el resultado no sea NaN
    if (isNaN(totalQuetzales)) {
        costoProducto.innerText = "Error en el cálculo";
    } else {
        costoProducto.innerText = totalQuetzales + " Quetzales";
    }
}