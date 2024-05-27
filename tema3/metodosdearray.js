let array = [];

  function actualizarLista() {
    const lista = document.getElementById('arrayList');
    lista.innerHTML = '';
    
    array.forEach((elemento, index) => {
      const li = document.createElement('li');
      li.textContent = `Elemento "(index + 1)": "(elemento)"`;
      lista.appendChild(li);
    });
  }

  function agregarElemento() {
    const nuevoElemento = document.getElementById('elementoInput').value;
    if (nuevoElemento.trim() !== '') {
      array.push(nuevoElemento);
      actualizarLista();
    }
  }

  function buscarElemento() {
    const buscarTexto = document.getElementById('buscarInput').value;
    const indice = array.indexOf(buscarTexto);
    if (indice == -1) {
      alert(`El elemento "(buscarTexto)" se encuentra en la posición "(indice + 1)".`);
    } else {
      alert(`El elemento "(buscarTexto)" no se encuentra en el array.`);
    }
  }

  function ordenarCreciente() {
    array.sort();
    actualizarLista();
  }

  function ordenarDecreciente() {
    array.sort();
    array.reverse();
    actualizarLista();
  }