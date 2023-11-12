$(document).on("click", "#btnnuevo", function(){
    $("#txtdescestado").val("");
    $("#hddidestado").val("0");
    $("#modalregistro").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
   $("#txtdescestado").val($(this).attr("data-descestado"));
   $("#hddidestado").val($(this).attr("data-idestado"));
   $("#modalregistro").modal("show");
});

$(document).on("click", ".btneliminar", function(){
   $("#modalregistro").modal("show");
});

$(document).on("click", "#btnguardar", function(){
   $.ajax({
   type: "POST",
   contentType: "application/json",
   url: "/administracion/estado/registrar",
   data: JSON.stringify({
       idestado: $("#hddidestado").val(),
       descestado: $("#txtdescestado").val()
   }),
   success: function(resultado){
        if(resultado.respuesta){
            listarEstados();
        }
        alert(resultado.mensaje);
        $("#modalregistro").modal("hide");
   }
   });
});

function listarEstados(){
    $.ajax({
        type: "GET",
        url: "/administracion/estado/listar",
        dataType: "json",
        success: function(resultado){
            $("#tblestado > tbody").html("");
            $.each(resultado, function(index, value){
                $("#tblestado > tbody").append("<tr>"+
                    "<td>"+value.idestado+"</td>"+
                    "<td>"+value.descestado+"</td>"+
                    "<td>"+
                    "<button type='button' class='btn btn-info btnactualizar' "+
                    "data-idestado='"+value.idestado+"' "+
                    "data-descestado='"+value.descestado+"'>"+
                    "<i class='bi bi-pencil-square'></i></button>"+
                    "</td>"+
                    "<td>"+

                    "</td>"+
                    "</tr>");
            });
        }
    });
}