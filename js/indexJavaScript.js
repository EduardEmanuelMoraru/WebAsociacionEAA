  //Calendario
  function calendar(){
    var m,a,d;
		a=leerIntervaloPositivo(1500,2100,"Introduzca el año en el que se van a hacer las actividades (1500-2100)");
		m=leerIntervaloPositivo(1,12,"Introduzca el mes (1-12)");
		d=conocerLimiteDia(m,a);
		pintarCalendario(a,m,d);
   }
   function pintarCalendario(a,m,d){
        const DIAS="L  M  M  J  V  S  D";
		var dias="";
		var n;
		var hayEspacios=false;
		var diasAculumador="";
		if(m==1 || m==2){
			n=parseInt(a+31*(m-1)+d+(a-1)/4-3*((a+99)/100)/4); //formula del profe miguel que te da los espacios en blanco para cuando empieza el dia (Falla al contarlos). 
        }
		else{
			n=parseInt(a+31*(m-1)+d-(4*m+23)/10+a/4-(3*(a/100+1))/4);
        }
		
	for(var i=1;i<=d;i++) 
	{
        //recorro los días
			for(var j=0;j<DIAS.length && i<=d ;j+=3) 
			{
                //recorro el dia L  M  M  J  V  S  D o la constante DIAS.longitud hasta el resto de n  y no haya espacios en blanco
				for(var k=0;k<n%7 && !hayEspacios;k++) 
				{
                    //recorro los espacios en blanco para empezar el dia y aumento la j para no tener en cuenta esto de los espacios en blanco
					dias+=" "+"   ";
					j+=3;
				}
                    //si dia es mayor a nueve acumulo el dia y pongo espacios en blanco para coincidir con el dia de la semana sino solo pongo un espacio en blanco
					if(i<9){
						dias+=i+"   ";
                    }
					else{ 
						dias+=i+" ";
                    }
                    //aumento el dia y pongo hayEspacios en verdadero
				i++;
				hayEspacios=true;
			}
            //Disminuyo el día por si ha llegado al domingo y ese dia no ha sido representado en el bucle lo hará en la siguiente iteración.
				i-=1;
				diasAculumador+=dias+"\n";
				dias="";
	}	
    alert(DIAS+"\n"+diasAculumador+"\nLos Fanarts son los (Lúnes),la crianza pokémon son los (Jueves),las herramientas del competitivo son los (Viernes) y la creación de nuevos tipos son los (Domingos)");	
   }
   function leerIntervaloPositivo(min,max,msg){
    var valor;
        do{
            valor=parseInt(prompt(msg));
        }while(valor<min || valor>max);
    return valor;
   }
   function conocerLimiteDia(m,a){
    var d=0;
		switch(m) {
			case 1,3,5,7,8,10,12:
				d=31;
				break;
			case 2:
				d=esBisiesto(a)?29:28;
				break;
				default:
					d=30;
		}
		return d;
   }
   function esBisiesto(a){
    return a%4==0 ||(a%400==0&& a%100!=0);
   }
   //mostrar Y ocultar el div del login
   function rellenarDatos(){
        var elemento =document.getElementById("login");
        if(elemento.style.visibility=="hidden"){
            elemento.style.visibility="visible";
        }else{
            elemento.style.visibility="hidden";
        }
    }
