/* IMPLEMENTACIÓN DEL CÓDIGO CON NOTAS PERSONALES

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear un array para almacenar los nombres

let amigos = [];
let nombre = '';

//console.log(amigos);

//Implementa una función para agregar amigos

function agregarAmigo() {

    //alert('Click desde el botón') - Probando el botón según lo aprendido
    const nombre = document.getElementById('amigo').value; // Se obtiene el valor de la caja de texto o del campo de entrada
    //console.log(`Se ha añadido a ${nombre} como amigo.`); Probando si se añade el nombre
    
    if (nombre === '') {  
        alert('Por favor añade un nombre');  // Validar la entrada
    // Actualizar el array de amigos
    } else if (amigos.includes(nombre)) {  
            alert('Este amigo ya ha sido añadido');  
            return;
    } else {
        amigos.push(nombre);
        //console.log(`Se ha añadido a ${nombre} como amigo.`);  
    }  

    limpiarCaja();
    listaActualizada(amigos); 
}

//Limpiar el campo de entrada 
function limpiarCaja() {
    document.querySelector('#amigo').value = ''; // Se limpia el contenido de la caja de texto
} // Se crea una función para que al dar click en el botón seleccionado en el html se limpie la caja de texto

// Implementa una función para actualizar la lista de amigos
function listaActualizada(amigos) {
    const listaHTML = document.getElementById('listaAmigos'); // Se obtiene el elemento de la lista de amigos
    listaHTML.innerHTML = ''; // Se limpia la lista de amigos
    for (let i = 0; i < amigos.length; i++) { // Se crea un ciclo for para recorrer la lista de amigos y añadirlos a la lista de amigos en el html
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaHTML.appendChild(li); // Se añade el nombre del amigo a la lista de amigos en el html
    } 
}

//Implementa una función para sortear los amigos
function sortearAmigo() {  
    // Validar que haya amigos disponibles  
    if (amigos.length === 0) {  
        alert('No hay amigos disponibles para seleccionar, escribe un nombre en la caja de texto y presiona el botón "AÑADIR AMIGO"');
        return;  
    }  

    // Limpiar la lista de amigos antes de hacer el sorteo  
    const listaHTML = document.getElementById('listaAmigos');  
    if (listaHTML) {  
        listaHTML.innerHTML = ''; // Limpiar el contenido  
    } 

    // Generar un índice aleatorio  
    const indice = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado      
    const amigoSeleccionado = amigos[indice]; 

    // Mostrar el resultado
    const resultadoSorteo = document.getElementById('resultado');  
    if (resultadoSorteo) {  
        resultadoSorteo.innerHTML = `El amigo secreto seleccionado es: ${amigoSeleccionado}`;  
    } 
}  */

// CÓDIGO ORGANIZADO
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.  
// Aquí deberás desarrollar la lógica para resolver el problema.  

// Declaración del array para almacenar los nombres de amigos  
let amigos = [];  
let nombre = '';  

// Función para agregar un amigo a la lista  
function agregarAmigo() {  
    // Obtener el nombre desde el campo de entrada  
    const nombre = document.getElementById('amigo').value;  
    
    // Validar que se haya ingresado un nombre  
    if (nombre === '') {  
        alert('Por favor añade un nombre');  
        return;  
    } else if (amigos.includes(nombre)) {  
        // Validar que el nombre no esté duplicado  
        alert('Este amigo ya ha sido añadido');  
        return;  
    } else {  
        // Agregar el nombre a la lista de amigos  
        amigos.push(nombre);  
    }  

    // Limpiar la caja de texto y actualizar la lista de amigos mostrada  
    limpiarCaja();  
    listaActualizada(amigos);   
}  

// Función para limpiar la caja de entrada de texto  
function limpiarCaja() {  
    document.querySelector('#amigo').value = '';  
}  

// Función para actualizar la lista de amigos en el HTML  
function listaActualizada(amigos) {  
    const listaHTML = document.getElementById('listaAmigos');  
    listaHTML.innerHTML = ''; // Limpiar la lista existente  
    
    // Iterar sobre el array de amigos y agregar cada uno como un elemento de lista  
    amigos.forEach(amigo => {  
        const li = document.createElement('li');  
        li.textContent = amigo;  
        listaHTML.appendChild(li);  
    });  
}  

// Función para sortear un amigo aleatoriamente  
function sortearAmigo() {  
    // Verificar que haya amigos disponibles para seleccionar  
    if (amigos.length === 0) {  
        alert('No hay amigos disponibles para seleccionar. Escribe un nombre en la caja de texto y presiona el botón "AÑADIR AMIGO"');  
        return;  
    }  

    // Limpiar la lista de amigos en el HTML antes de mostrar el resultado del sorteo  
    const listaHTML = document.getElementById('listaAmigos');  
    if (listaHTML) {  
        listaHTML.innerHTML = ''; // Limpiar el contenido de la lista de amigos  
    }   

    // Generar un índice aleatorio para seleccionar un amigo  
    const indice = Math.floor(Math.random() * amigos.length);  
    const amigoSeleccionado = amigos[indice]; // Obtener el nombre sorteado  

    // Mostrar el resultado del sorteo en el elemento HTML correspondiente  
    const resultadoSorteo = document.getElementById('resultado');  
    if (resultadoSorteo) {  
        resultadoSorteo.innerHTML = `El amigo secreto seleccionado es: ${amigoSeleccionado}`;  
    }   
}