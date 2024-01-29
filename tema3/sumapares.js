// Función para calcular la suma de números pares en un array
function sumaNumerosPares(array) {
  let suma = 0;

  // Iterar a través del array
  for (let i = 0; i < array.length; i++) {
    // Verificar si el número es par
    if (esPar(array[i])) {
      // Sumar al total
      suma += array[i];
    }
  }

  // Devolver la suma de números pares
  return suma;
}

// Función para verificar si un número es par
function esPar(numero) {
  return numero % 2 === 0;
}

// Solicitar al usuario un array de números
const inputArray = prompt("Ingrese un array de números separados por comas (por ejemplo: 1, 2, 3):");

// Convertir la cadena de entrada en un array de números
const numeros = inputArray.split(',').map(Number);

// Calcular la suma de números pares utilizando la función
const resultado = sumaNumerosPares(numeros);

// Mostrar el resultado al usuario
alert(`La suma de números pares en el array es: ${resultado}`);