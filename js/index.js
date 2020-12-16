//El interval no me dio aqui en el script, asi que mirando la documentacion de Boostrap pude ver que lo podia colocar como un data atribute en el carousel
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $("[data-toggle='popover']").popover();
    $('#contactoBtn').on('show.bs.modal', function (e) {
        console.log("El modal se esta mostrando");
        $('#contactoBtn').removeClass('btn-outline-success');
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disabled', true);  
    });
    $('#contactoBtn').on('shown.bs.modal', function (e) {
        console.log("El modal se mostro");
    });
    $('#contactoBtn').on('hide.bs.modal', function (e) {
        console.log("El modal se oculta");
    });
    $('#contactoBtn').on('hidden.bs.modal', function (e) {
        console.log("El modal se ocultó");
        $('#contactoBtn').prop('disabled', true);
    });
  });