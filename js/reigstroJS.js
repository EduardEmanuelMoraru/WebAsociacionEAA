
function confirmarDatos(){
 var nombre=document.getElementById("nombre").value;
 var apellidos=document.getElementById("apellido").value;
 var correo=document.getElementById("correo").value;
 var respuesta=confirm("¿Desea enviar esta información?"+"\n"+nombre+","+apellidos+","+correo);
 return respuesta;
}