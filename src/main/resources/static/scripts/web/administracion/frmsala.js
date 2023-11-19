$(document).on("click", "#btnnuevo", function(){
    $("#txtdescsala").val("");
    $("#hddidsala").val("0");
    $("#txtasientos").val("");
    $("#modalregistro").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
   $("#txtdescsala").val($(this).attr("data-descsala"));
   $("#hddidsala").val($(this).attr("data-idsala"));
   $("#txtasientos").val($(this).attr("data-asientos"));
   $("#modalregistro").modal("show");
});
$(document).on("click", "#btnguardar", function(){
   $.ajax({
   type: "POST",
   contentType: "application/json",
   url: "/administracion/estado/registrar",
   data: JSON.stringify({
       idsala: $("#hddidsala").val(),
       descsala: $("#txtdescsala").val(),
       asientos: $("#txtasientos").val(),
       idestado: $("#cboestado").val()
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
                    "<button type='button' class='btn btn-danger btneliminar' "+
                    "data-idestado='"+value.idestado+"' "+
                    "data-descestado='"+value.descestado+"'>"+
                    "<i class='bi bi-trash-fill'></i></button>"+
                    "</td>"+
                    "</tr>");
            });
        }
    });
}