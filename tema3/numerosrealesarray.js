let numeros = [];
    function anadirElemento() {
        const numeroInput = document.getElementById('numeroReal');
        const numero = parseFloat(numeroInput.value);

        if (!isNaN(numero)) {
            numeros.push(numero);
            actualizarArrayDisplay();
            numeroInput.value = '';
        } else {
            alert('Por favor, introduce un número válido.');
        }
    }

    // Actualizar el array
    function actualizarArrayDisplay() {
        const arrayDisplay = document.getElementById('arrayDisplay');
        arrayDisplay.textContent = `[${numeros.join(', ')}]`;
    }

    // Realizar operación
    function realizarOperacion(operacion) {
        const resultadoElement = document.getElementById('resultado');

        let resultado;
        if (operacion === 'Sumar') {
            resultado = numeros.reduce((total, num) => total + num, 0);
        } else if (operacion === 'Multiplicar') {
            resultado = numeros.reduce((producto, num) => producto * num, 1);
        }

        resultadoElement.textContent = `Resultado de ${operacion}: ${resultado}`;
    }