//Marerialize

$('#textarea1').val('New Text');
$('#textarea1').trigger('autoresize');


// Publicar texto

$(document).ready(function() {
  $('#enviar').click(getComent);
});

function getComent(event){
  event.preventDefault();
  var cometario = $('#icon_prefix2').val()

  console.log(cometario);

}
