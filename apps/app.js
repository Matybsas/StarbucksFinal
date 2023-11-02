//COMIENZA EL MENU
// Al dar clic muestra el menú
$('.open').click(function(){
    $(this).css('display', 'none');
    $('.close').css('display', 'block');
   /* $('.menu').css('transform', 'translateY(125px) translateX(0)');*/
  })
  
  // Al dar clic cierra oculta el menú
  $('.close').click(function(){
      $(this).css('display', 'none');
      $('.open').css('display', 'block');
     /* $('.menu').css('transform', 'translateY(125px) translateX(-100%)');*/
  })
  
  /*
  // Compara el ancho de la página como un media query en CSS
  $(window).resize(() => {
      // Restaura los valores base
      if($(window).width() > 900){
          $('.open').css('display', 'none');
          $('.close').css('display', 'none');
          $('.menu').css('transform', 'translateY(0) translateX(0)');
      } else {
          $('.open').css('display', 'block');
          $('.menu').css('transform', 'translateY(125px) translateX(-100%)');
      }
  });

*/
  //FINALIZA EL MENU
