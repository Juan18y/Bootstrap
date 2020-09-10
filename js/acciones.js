var btn = document.getElementById("btnagregar");
var tabla = document.getElementById("tabla");

btn.addEventListener("click", function(){

	var cod = document.getElementById("codigo").value;
	var nom = document.getElementById("nombre").value;
	var tel = document.getElementById("telefono").value;
	var dir = document.getElementById("direccion").value;

	tabla.insertRow(-1).innerHTML = "<td>"+cod+"</td><td>"+nom+"</td><td>"+tel+"</td><td>"+dir+'</td><td><button class="btn btn-info" data-toggle="modal" data-target="#registro" id="btnagregar"><i class="far fa-file"></i></button> <button class="btn btn-warning"><i class="far fa-edit"></i></button> <button class="btn btn-danger"><i class="far fa-trash-alt"></i></button></td>';
})

