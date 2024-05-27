document.getElementById('convertForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fileInput = document.getElementById('fileInput').files[0];
    const conversionType = document.getElementById('conversionType').value;
    
    if (!fileInput) {
        alert("Por favor, selecciona un archivo.");
        return;
    }

    const formData = new FormData();
    formData.append('file', fileInput);
    formData.append('conversionType', conversionType);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Procesando...";

    fetch('https://api.pdf.co/v1/file/convert', {
        method: 'POST',
        headers: {
            'x-api-key': 'TU_API_KEY'
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            resultDiv.innerHTML = "Error: " + data.message;
        } else {
            const link = document.createElement('a');
            link.href = data.url;
            link.textContent = 'Descargar archivo convertido';
            resultDiv.innerHTML = "";
            resultDiv.appendChild(link);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = "Hubo un error procesando tu solicitud.";
    });
});