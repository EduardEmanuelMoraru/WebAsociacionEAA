
function confirmarDatos(){
 var nombre=document.getElementById("nombre").value;
 var apellidos=document.getElementById("apellido").value;
 var correo=document.getElementById("correo").value;
 var nie=document.getElementById("documento").value;
 var respuesta=confirm("¿Desea enviar esta información?"+"\n"+nombre+","+apellidos+","+correo+","+nie);
 return respuesta;
}