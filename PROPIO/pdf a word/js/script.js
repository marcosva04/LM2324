document.getElementById('convertBtn').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Por favor, selecciona un archivo.');
        return;
    }

    // Suponiendo que hay un backend para manejar la conversión
    // Aquí solo se muestra cómo mostrar el enlace de descarga después de la conversión
    // En la práctica, enviarías el archivo a un servidor que realiza la conversión y luego recibirías el archivo convertido

    // Simulación de un archivo convertido
    setTimeout(() => {
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = URL.createObjectURL(file);  // En la práctica, esto sería la URL del archivo convertido
        downloadLink.download = `converted_${file.name}`;

        document.getElementById('resultSection').classList.remove('hidden');
    }, 2000);
});