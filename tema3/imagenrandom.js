let archivos=["mario1.jpg", "mario2.jpg", "mario3.jpg", "mario4.jpg"];
function random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
function seleccionaMario(){
    let numero = random(0,archivos.length - 1);
    document.getElementById("mario").src = "../images/" + archivos[numero];
}