// import swal from 'sweetalert2'
$(document).ready(function(){
  $("#diseno1").click(function(){
    $("#diseno3").animate({
      opacity: 0
    },200);
    $("#diseno2").animate({
      opacity: 0
    },200, function(){
      $("#diseno1").removeClass("col-lg-4").addClass("padding-diseno");
      $("#explicacion-diseno1").removeClass("hide").addClass("explicacion-diseno");
      $("#diseno2").addClass("hide").removeClass("noHide");
      $("#diseno3").addClass("hide").removeClass("noHide");
    });
  });

  $("#diseno2").click(function(){
    $("#diseno3").animate({
      opacity: 0
    },200);
    $("#diseno1").animate({
      opacity: 0
    },200, function(){
      $("#diseno2").removeClass("col-lg-4").addClass("padding-diseno");
      $("#explicacion-diseno2").removeClass("hide").addClass("explicacion-diseno");
      $("#diseno1").addClass("hide");
      $("#diseno3").addClass("hide");
    });
  });

  $("#diseno3").click(function(){
    $("#diseno2").animate({
      opacity: 0
    },200);
    $("#diseno1").animate({
      opacity: 0
    },200, function(){
      $("#diseno3").removeClass("col-lg-4").addClass("padding-diseno");
      $("#explicacion-diseno3").removeClass("hide").addClass("explicacion-diseno");
      $("#diseno2").addClass("hide");
      $("#diseno1").addClass("hide");
    });
  });

  $("#atras-diseno1").click(function(e){
    $("#diseno1").addClass("col-lg-4").removeClass("padding-diseno");
    $("#explicacion-diseno1").addClass("hide").removeClass("explicacion-diseno");
    $("#diseno2").removeClass("hide").addClass("noHide");
    $("#diseno3").removeClass("hide").addClass("noHide");

    $("#diseno2").animate({
      opacity: 1
    },200);
    $("#diseno3").animate({
      opacity: 1
    },200);
    console.log("simon")
    e.stopImmediatePropagation();
    return false;
  });
  $("#atras-diseno2").click(function(e){
    $("#diseno2").addClass("col-lg-4").removeClass("padding-diseno");
    $("#explicacion-diseno2").addClass("hide").removeClass("explicacion-diseno");
    $("#diseno1").removeClass("hide");
    $("#diseno3").removeClass("hide");
    $("#diseno1").animate({
      opacity: 1
    },200);
    $("#diseno3").animate({
      opacity: 1
    },200);
    e.stopImmediatePropagation();
    return false;
  });
  $("#atras-diseno3").click(function(e){
    $("#diseno3").addClass("col-lg-4").removeClass("padding-diseno");
    $("#explicacion-diseno3").addClass("hide").removeClass("explicacion-diseno");
    $("#diseno1").removeClass("hide");
    $("#diseno2").removeClass("hide");
    $("#diseno1").animate({
      opacity: 1
    },200);
    $("#diseno2").animate({
      opacity: 1
    },200);
    e.stopImmediatePropagation();
    return false;
  });
});

function registrar(){
  $(document).ready(function(){
    const payload ={
      correo: $("#correo").val(),
      comentario: $("#comentario").val()
    }
    $.post( "https://dondecomemos-suscribe.herokuapp.com/v1/agregar", payload ).done(function(data){
      if (data === 'ok') {
        swal(
          '¡Muchas Gracias!',
          'Tus comentarios son valiosos para nosotros',
          'success'
        )
      }
    });
    $("#correo").val("")
    $("#comentario").val("")
  });
}

function comprar(){
  swal({
    title: 'No Hay Inventario',
    html:
    '<p>Lamentablemente no tenemos inventario disponible. Por favor te invitamos a dejar tu correo y un comentario y nosotros te avisaremos cuando tengamos disponibilidad.</p>'+
    '<label for="swal-input1">Correo:</label>'+
    '<input id="swal-input1" class="swal2-input">' +
    '<label for="swal-input2">Comentario:</label>'+
    '<input id="swal-input2" class="swal2-input">',
    focusConfirm: false,
    preConfirm: function () {
      return new Promise(function (resolve) {
        resolve([
          $('#swal-input1').val(),
          $('#swal-input2').val()
        ])
      })
    }
  }).then(function (result) {
    console.log(result);
    if (result.dismiss !== "esc") {
      if (result.value[0] !== "" || result.value[1] !== "") {
        const payload ={
          correo: result.value[0],
          comentario: result.value[1]
        }
        $.post( "https://dondecomemos-suscribe.herokuapp.com/v1/agregar", payload ).done(function(data){
          if (data === 'ok') {
            swal(
              '¡Muchas Gracias!',
              'Nosotros te avisaremos cuando tengamos inventario disponible',
              'success'
            )
          }
        });
      }
    }
    // swal(JSON.stringify(result))
  }).catch(swal.noop)

}
