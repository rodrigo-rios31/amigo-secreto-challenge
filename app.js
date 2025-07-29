function agregarAmigo(){
    alert('Entraste a la funcion');
    //capturar el valor del campo de entrada
    let input = document.getElementById('entrada');
    let nombreAmigo = input.value;
    alert(nombreAmigo);

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