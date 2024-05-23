let notas = [];

        function agregarNota() {
            const notaInput = document.getElementById('notaInput');
            const errorMessage = document.getElementById('error-message');

            const nota = parseFloat(notaInput.value);

            if (isNaN(nota) || nota < 0 || nota > 10) {
                errorMessage.textContent = 'La calificación debe estar entre 0 y 10.';
            } else {
                notas.push(nota);
                errorMessage.textContent = '';
                notaInput.value = '';
            }
        }

        function borrarNotas() {
            notas = [];
            document.getElementById('resultadoMedia').textContent = '';
        }

        function calcularMedia() {
            const resultadoMedia = document.getElementById('resultadoMedia');

            if (notas.length === 0) {
                resultadoMedia.textContent = 'Aún no hay calificaciones para calcular la media.';
            } else {
                const total = notas.reduce((acc, curr) => acc + curr, 0);
                const resultado = total / notas.length;
                resultadoMedia.textContent = `Nota Media: ${resultado.toFixed(2)}`;
            }
        }