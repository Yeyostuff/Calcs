const cantidadPesos = document.querySelector("#pesos");
const btn = document.querySelector("#calcularButton");
const pResult = document.querySelector("#result");
const dResult = document.querySelector('#deposito')

const envioForza = 28;
const comision = .035;

if(btn){
    btn.addEventListener("click", conversionPesos);
}


function conversionPesos() {
    const menosEnvio = cantidadPesos.value - envioForza;
    pResult.innerText = menosEnvio + " Quetzales";
    const aDepositar = menosEnvio * comision;
    const totalTotal = menosEnvio - aDepositar;
    dResult.innerText = totalTotal + ' Quetzales';
}
