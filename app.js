function agregarAmigo(){
    //capturar el valor del campo de entrada
    let input = document.getElementById('entrada');
    let nombreAmigo = input.value.trim();
    alert(nombreAmigo);
}

//validar si el campo esta vacio 
if(!nombreAmigo){
    alert('El campo no puede estar vacio');
    return;
}

//obtener la lista de amigos existente 
let amigos = JSON.parse(localStorage.getItem)
