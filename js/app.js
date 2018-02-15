
// Publicar texto
var come = $('#icon_prefix2').val();



$(document).ready(function() {
  $('#icon_prefix2').keyup(comentEdit(come));
  $('#icon_prefix2').keyup(getComent());

});

function getComent(event){
//  event.preventDefault();
//  console.log(comentario);
  //
  // if (comentario.length>0){
  //   $('#icon_prifix2').keyup(comentEdit(comentario));
  //
  // }

}

function comentEdit(comentario){
  var comentEtitado = $('#coment-edit');
  comentEtitado.html(comentario);

}
