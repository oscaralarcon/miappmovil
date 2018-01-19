$(document).ready(function(){
	var getlista = function(){
		var datax={
			"Accion":"listar"	
		}
		$.ajax({
			data:datax,
			type:"GET",
			datatype:"json",
			url:"http://localhost/miappss/controllers/controllercceleste.php"
		})
		.done(function(data,textStatus,jqXHR){
			console.log("data success" + data.success
				+ "\n data msg " + data.message);

			for(var i=0; i < data.datos.length; i++) {
				$("#texto").append(data.datos[i].cc_nombre);
			}
		})
		.fail(function(jqXHR,textStatus,data)){
			console.log("conexion a fallado " + textStatus);
		})
	}
	getlista();
});