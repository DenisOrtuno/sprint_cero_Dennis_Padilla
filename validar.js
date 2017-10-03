/*window.onload = saludar;
alert("Registre sus datos");
//funcion para saludar desde archivo externo
function saludar()
{
	document.getElementById("saludar").innerHTML = "Bienvenido";//le mandamos un id desde nuestro html
}
*/
function validar(){//validar formulario del lado del client
	var nombre, apellido, correo, usuario, contraseña, expresion;
	nombre = document.getElementById("nombre").value;//el valor del campo se guarda en la var nombre
	apellido = document.getElementById("apellido").value;
	correo = document.getElementById("correo").value;
	usuario = document.getElementById("usuario").value;
	contraseña = document.getElementById("contraseña").value;

	expresion = /\w+@\w+\.+[a-z]/;//las expresiones regulares nos ayudan a validar el correo debidamente ingresado

	if(nombre === "" || apellido==="" || correo==="" || usuario==="" || contraseña===""){
		alert("Todos los campos son obligatorioss");
		return false;
	}
	else if(nombre.length>20){
		alert("El nombre es demasiado largo");
		return false;
	}
	else if(apellido.length>30){
		alert("El apellido es demasiado largo");
		return false;
	}
	else if(correo.length>100){
		alert("El correo es demasiado largo");
		return false;
	}
	else if(!expresion.test(correo)){//con test evaluo que correo cumpla el formato de la expresion regular que definimos
		alert("El correo no es valido");
		return false;
	}
	else if(usuario.length>20){
		alert("El usuario es demasiado largo");
		return false;
	}
	else{
		alert("Los datos fueron registrados exitosamente");
	}
	/*
	else if(isNaN(telefono)){
		alert("El telefono que ingreso no es un numero");
		return false;
	}*/
}
