$(document).on("click", "#btnnuevo", function(){
    $("#txtdescsala").val("");
    $("#hddidsala").val("0");
    $("#txtasientos").val("");
    $.ajax({
        type: "GET",
        url: "/administracion/estado/listar",
        dataType: "json",
        success: function(resultado){

        }
    });
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
            listarSalas();
        }
        alert(resultado.mensaje);
        $("#modalregistro").modal("hide");
   }
   });
});

function listarSalas(){
    $.ajax({
        type: "GET",
        url: "/administracion/sala/listar",
        dataType: "json",
        success: function(resultado){
            $("#tblsala > tbody").html("");
            $.each(resultado, function(index, value){
                $("#tblsala > tbody").append("<tr>"+
                    "<td>"+value.idsala+"</td>"+
                    "<td>"+value.descsala+"</td>"+
                    "<td>"+value.asientos+"</td>"+
                    "<td>"+value.estado.descestado+"</td>"+
                    "<td>"+
                    "<button type='button' class='btn btn-info btnactualizar' "+
                    "data-idsala='"+value.idsala+"' "+
                    "data-descsala='"+value.descsala+"' "+
                    "data-asientos='"+value.asientos+"' "+
                    "data-idestado='"+value.estado.idestado+"'>"+
                    "<i class='bi bi-pencil-square'></i></button>"+
                    "</td>"+
                    "</tr>");
            });
        }
    });
}