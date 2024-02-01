// Array de números
let numeros=[1, 2, 3, 4, 5, 6, 7, 8];

function sumaPares(numeros){
  let total = 0.0;
  for (var i=0;i<numeros.length;i++){
    if (numeros[i]%2 == 0)
    total = total + numeros[i];
  }
  document.getElementById("resultado").innerHTML = total;
}

sumaPares(numeros);