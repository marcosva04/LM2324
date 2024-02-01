function validar(elementos){
    let estanCorrectos = true;
    for (var i=0; i<elementos.length; i++){
        if (elementos[i].value == ""){
            document.getElementById("campo " + (i+1) .toString() ).innerHTML = "EL campo " + elementos[i] + "está vacio"
            estanCorrectos = false;
        }
    }
    return estanCorrectos;
}