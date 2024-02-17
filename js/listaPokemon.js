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
