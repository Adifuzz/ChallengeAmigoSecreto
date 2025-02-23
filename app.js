// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.querySelector('#amigo').value;
    
    if(nombreAmigo === ''){
        return alert(' "Por favor, inserte un nombre."');
    }else{
        listaAmigos.push(nombreAmigo);
    } 
    console.log(listaAmigos);
    limpiarCaja();
    actualizarLista();
}

function limpiarCaja(){
    document.querySelector('#amigo').value='';
    
}


function actualizarLista() {
    let lista = document.getElementById('listaAmigos'); // Obtener la lista UL
    lista.innerHTML = ''; // Limpiar la lista para evitar duplicados

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = listaAmigos[i]; // Asignar el nombre del amigo como texto
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Debe agregar al menos un amigo para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Generar un índice aleatorio
    let amigoSorteado = listaAmigos[indiceAleatorio]; // Obtener el nombre correspondiente

    let resultado = document.getElementById('resultado'); // Obtener el elemento donde se muestra el resultado
    resultado.innerHTML = `<li>🎉 ${amigoSorteado} ha sido sorteado! 🎉</li>`; // Mostrar el resultado
}