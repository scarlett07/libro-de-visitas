$(document).ready(function() {
  $('#icon_prefix2').keyup(visualizarPost);
  $('#large').click(changeFontZise);
  $('#medium').click(changeFontZise);
  $('#small').click(changeFontZise);
  $('#center').click(changeAling);
  $('#rigth').click(changeAling);
  $('#left').click(changeAling);

});

function visualizarPost(event) {
  var comentario = $(this).val();
  var comentEtitado = $('#coment-edit');
  comentEtitado.html(comentario);
}

// estilos
var comment = $('#coment-edit');

function changeFontZise() {
  switch (this.name) {
    case 'large':
      comment.css('font-size', '40px');
      break;
    case 'medium':
      comment.css('font-size', '20px');
      break;
    case 'small':
      comment.css('font-size', '10px');
      break;
  }
}

function changeAling() {
  switch (this.name) {
    case 'right':
      comment.css('text-align', 'righ');
      break;
    case 'left':
      comment.css('text-align', 'left');
      break;
    case 'center':
      comment.css('text-align', 'center');
      break;

  }
}









//
//
//         case 'color':
//             comment.css('color', this.value);
//             break;
//         case 'background-text':
//             comment.css('background-color', this.value)
//             break;
//         case 'left':
//             comment.css('text-align', 'left');
//             break;
//         case 'center':
//             comment.css('text-align', 'center');
//             break;
//         case 'right':
//             comment.css('text-align', 'right');
//             break;
//
//     }
// }
