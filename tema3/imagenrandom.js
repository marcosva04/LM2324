const imagenes = [
    'burguer.png',
    'banner.png',
    'nodo.png',
];

function obtenerImagenAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    return imagenes[indiceAleatorio];
}

function cargarImagenAleatoria() {
    const imagen = obtenerImagenAleatoria();
    const imgElement = document.createElement('img');
    imgElement.src = imagen;
    document.body.innerHTML = '';
    document.body.appendChild(imgElement);
}
window.addEventListener('load', cargarImagenAleatoria);