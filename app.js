// Declaración del arreglo para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo.
 * 1. Captura el valor ingresado en el input.
 * 2. Valida que no esté vacío.
 * 3. Agrega el nombre al arreglo.
 * 4. Limpia el campo de entrada.
 * 5. Actualiza la lista en el HTML.
 */
function agregarAmigo() {
    // Obtener el input
    let ingresoAmigo = document.getElementById('amigo');
    // Acceder al valor (sin paréntesis) y eliminar espacios extra
    let nombreAmigo = ingresoAmigo.value.trim();

    // Validar que se haya ingresado un nombre
    if (nombreAmigo === "") {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Agregar el nombre al arreglo
    amigos.push(nombreAmigo);
    // Limpiar el campo de entrada
    ingresoAmigo.value = "";

    // Actualizar la lista de amigos en el HTML
    actualizarListaAmigos();
}

/**
 * Función para actualizar la lista de amigos en el HTML.
 * 1. Obtiene el elemento <ul> de la lista.
 * 2. Limpia la lista existente.
 * 3. Recorre el arreglo de amigos y crea un elemento <li> por cada nombre.
 * 4. Agrega cada <li> a la lista.
 */
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    // Limpiar la lista para evitar duplicados
    lista.innerHTML = "";

    // Recorrer el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li>
        const li = document.createElement('li');
        // Asignar el nombre del amigo al contenido del <li>
        li.textContent = amigos[i];
        // Agregar el <li> a la lista
        lista.appendChild(li);
    }
}

/**
 * Función para sortear un amigo de manera aleatoria.
 * 1. Valida que haya amigos disponibles.
 * 2. Genera un índice aleatorio usando Math.random() y Math.floor().
 * 3. Obtiene el nombre correspondiente del arreglo.
 * 4. Muestra el resultado en el HTML.
 */
function sortearAmigo() {
    // Validar que el arreglo no esté vacío
    if (amigos.length === 0) {
        alert("Por favor, agregue amigos antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>${amigoSorteado}</li>`;
}
