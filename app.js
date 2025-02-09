// Lista donde se guardan los nombres
let amigos = [];

function agregarAmigo() {
    // Agarrar el input y obtener el nombre escrito
    let ingresoAmigo = document.getElementById('amigo');
    let nombreAmigo = ingresoAmigo.value.trim();

    // Revisar que no esté vacío
    if (nombreAmigo === "") {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Guardar el nombre en la lista
    amigos.push(nombreAmigo);
    // Borrar el texto del input
    ingresoAmigo.value = "";

    // Mostrar la lista actualizada
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    // Obtener la lista en el HTML y limpiarla
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    // Recorrer la lista de amigos y agregarlos al HTML
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Si no hay amigos en la lista, avisar
    if (amigos.length === 0) {
        alert("Por favor, agregue amigos antes de sortear.");
        return;
    }

    // Elegir un nombre al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>${amigoSorteado}</li>`;
}
