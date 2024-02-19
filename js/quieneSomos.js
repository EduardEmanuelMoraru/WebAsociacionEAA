//mostrar Y ocultar el div del login
function rellenarDatos(){
    var elemento =document.getElementById("login");
    if(elemento.style.visibility=="hidden"){
        elemento.style.visibility="visible";
    }else{
        elemento.style.visibility="hidden";
    }
}

function irInicio() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function mostrarInformacion(id) {
    var informacion = document.getElementById('info' + id.substr(-1));

    // Oculta todas las informaciones
    var todasLasInformaciones = document.querySelectorAll('.informacion');
    todasLasInformaciones.forEach(function(info) {
        info.style.display = 'none';
    });

    // Muestra la información correspondiente
    informacion.style.display = 'block';
}