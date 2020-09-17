let numeroFila;
var tituloRegistro = document.getElementById("tituloRegistro");
var btn = document.getElementById("btnagregar");
var tabla = document.getElementById("tabla");

	tituloRegistro.innerHTML ="Agregar Registro";
	btn.addEventListener("click", function(){
	var ced = document.getElementById("cedula").value;
	var nom1 = document.getElementById("nombre1").value;
	var nom2 = document.getElementById("nombre2").value;
	var ape1 = document.getElementById("apellido1").value;
	var ape2 = document.getElementById("apellido2").value;
	var ema = document.getElementById("email").value;
	var fec = document.getElementById("fecha").value;
	var dir = document.getElementById("direccion").value;
	var tel = document.getElementById("telefono").value;
	var cel = document.getElementById("celular").value;
	var san = document.getElementById("sangre").value;
	var sex = document.getElementById("sexo").value;
	var rel = document.getElementById("religion").value;

	if (btn.innerHTML == "Guardar"){
		guardarModificacion();
	}else{
	tabla.insertRow(-1).innerHTML = "<td>"+ced+"</td><td>"+nom1+"</td><td>"+nom2+"</td><td>"+ape1+"</td><td>"+ape2+"</td><td>"+ema+"</td><td>"+fec+"</td><td>"+dir+"</td><td>"+tel+"</td><td>"+cel+"</td><td>"+san+"</td><td>"+sex+"</td><td>"+rel+'</td><td><button class="btn btn-info" data-toggle="modal" data-target="#registro" id="btnagregar" onclick="nuevaFila();"><i class="far fa-file"></i></button> <button class="btn btn-warning" data-toggle="modal" data-target="#registro" onclick="modificarFila(this);"><i class="far fa-edit"></i></button> <button class="btn btn-danger" onclick="borrarFila(this);"><i class="far fa-trash-alt"></i></button></td>';
	}
})

function nuevaFila(){
	tituloRegistro.innerHTML="Nuevo Registro";
	btn.innerHTML = "Agregar";
	document.getElementById("cedula").value = "";
	document.getElementById("nombre1").value = "";
	document.getElementById("nombre2").value = "";
	document.getElementById("apellido1").value = "";
	document.getElementById("apellido2").value = "";
	document.getElementById("email").value = "";
	document.getElementById("fecha").value = "";
	document.getElementById("direccion").value = "";
	document.getElementById("telefono").value = "";
	document.getElementById("celular").value = "";
	document.getElementById("sangre").value = "";
	document.getElementById("sexo").value = "";
	document.getElementById("religion").value = "";
}
function modificarFila(fila){

	var numFila = fila.parentNode.parentNode.rowIndex;
	var miFila = document.getElementsByTagName("tr")[numFila];
	var miCelda = miFila.getElementsByTagName("td");

	document.getElementById("cedula").value = miCelda[0].innerHTML;
	document.getElementById("nombre1").value = miCelda[1].innerHTML;
	document.getElementById("nombre2").value = miCelda[2].innerHTML;
	document.getElementById("apellido1").value = miCelda[3].innerHTML;	
	document.getElementById("apellido2").value = miCelda[4].innerHTML;
	document.getElementById("email").value = miCelda[5].innerHTML;
	document.getElementById("fecha").value = miCelda[6].innerHTML;
	document.getElementById("direccion").value = miCelda[7].innerHTML;	
	document.getElementById("telefono").value = miCelda[8].innerHTML;
	document.getElementById("celular").value = miCelda[9].innerHTML;
	document.getElementById("sangre").value = miCelda[10].innerHTML;
	document.getElementById("sexo").value = miCelda[11].innerHTML;	
	document.getElementById("religion").value = miCelda[12].innerHTML;	

	tituloRegistro.innerHTML ="Modificar Registro";
	btn.innerHTML = "Guardar";
}
function guardarModificacion(){
	var ced = document.getElementById("cedula").value;
	var nom1 = document.getElementById("nombre1").value;
	var nom2 = document.getElementById("nombre2").value;
	var ape1 = document.getElementById("apellido1").value;
	var ape2 = document.getElementById("apellido2").value;
	var ema = document.getElementById("email").value;
	var fec = document.getElementById("fecha").value;
	var dir = document.getElementById("direccion").value;
	var tel = document.getElementById("telefono").value;
	var cel = document.getElementById("celular").value;
	var san = document.getElementById("sangre").value;
	var sex = document.getElementById("sexo").value;
	var rel = document.getElementById("religion").value;


	var xced=tabla.rows[parseInt(numeroFila,10)].cells;
	var xnom1=tabla.rows[parseInt(numeroFila,10)].cells;
	var xnom2=tabla.rows[parseInt(numeroFila,10)].cells;
	var xape1=tabla.rows[parseInt(numeroFila,10)].cells;
	var xape2=tabla.rows[parseInt(numeroFila,10)].cells;
	var xema=tabla.rows[parseInt(numeroFila,10)].cells;
	var xfec=tabla.rows[parseInt(numeroFila,10)].cells;
	var xdir=tabla.rows[parseInt(numeroFila,10)].cells;
	var xtel=tabla.rows[parseInt(numeroFila,10)].cells;
	var xcel=tabla.rows[parseInt(numeroFila,10)].cells;
	var xsan=tabla.rows[parseInt(numeroFila,10)].cells;
	var xsex=tabla.rows[parseInt(numeroFila,10)].cells;
	var xrel=tabla.rows[parseInt(numeroFila,10)].cells;


	xced[parseInt(0,10)].innerHTML = ced
	xnom1[parseInt(1,10)].innerHTML = nom1
	xnom2[parseInt(2,10)].innerHTML = nom2
	xape1[parseInt(3,10)].innerHTML = ape1
	xape2[parseInt(4,10)].innerHTML = ape2
	xema[parseInt(5,10)].innerHTML = ema
	xfec[parseInt(6,10)].innerHTML = fec
	xdir[parseInt(7,10)].innerHTML = dir
	xtel[parseInt(8,10)].innerHTML = tel
	xcel[parseInt(9,10)].innerHTML = cel
	xsan[parseInt(10,10)].innerHTML = san
	xsex[parseInt(11,10)].innerHTML = sex
	xrel[parseInt(12,10)].innerHTML = rel
}
function borrarFila(fila){
	var numFila = fila.parentNode.parentNode.rowIndex;
	tabla.deleteRow(numFila);	
}