$(document).ready(function() {
    $('#icon_prefix2').keyup(visualizarPost);

});

function visualizarPost(event) {
    var comentario = $(this).val();
    var comentEtitado = $('#coment-edit');
    comentEtitado.html(comentario);
}
