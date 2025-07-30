function agregarAmigo(){
    //capturar el valor del campo de entrada
    let input = document.getElementById('entrada');
    let nombreAmigo = input.value;

    if (nombreAmigo === ""){
    alert(' Por favor escribe el nombre');
    return;
}
hacerLista(nombreAmigo);
}
function hacerLista(nombreAmigo){
//Guardar el nombre en una lista simple
let listaAmigos = document.getElementById('listaAmigos');
let nuevoAmigo = document.createElement('li');
nuevoAmigo.textContent = nombreAmigo;
listaAmigos.appendChild(nuevoAmigo);
//limpiar el campo de entrada 
document.getElementById('entrada').value = "";
}
function seleccionAmigo(){
    let listaAmigos = document.getElementById('listaAmigos');
    let amigos = listaAmigos.getElementsByTagName('li');
    let nombres = []

    for(let i = 0; i <= amigos.length-1; i++){
        console.log (amigos [i].textContent);
        nombres.push(amigos [i].textContent);
    }
    let numeroAleatorio = Math.floor(Math.random()*(amigos.length-1));
    console.log(numeroAleatorio);
    console.log(amigos.length-1);
    alert(`El amigo que salio del sorteo fue: ${nombres[numeroAleatorio]}`);
}

