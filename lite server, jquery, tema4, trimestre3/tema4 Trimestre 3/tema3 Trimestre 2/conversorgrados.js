function resultado(){
    let valor = document.getElementById("cantidad").value;
    let resultado = 0;

    resultado = valor * 9/5 + 32;
    document.getElementById("resultado").innerHTML = resultado;

}