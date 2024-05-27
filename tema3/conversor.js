/* Código
Javascript del conversor
*/
function convertir(divisa){
    let valor = document.getElementById("cantidad").value;
    let resultado = 0;
    if (divisa=="euro"){
        //Convierto a euros
        resultado = valor * 0.91;
        document.getElementById("resultado").innerHTML = resultado + "€";
    }
    else{
        //Convierto a dólares
        resultado = valor * 1.09;
        document.getElementById("resultado").innerHTML = resultado + "$";
    }
}