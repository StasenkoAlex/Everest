$(document).ready(function(){

  var modal = $('.js-modal-simple'),
      modalName = $('.js-modal-name'),
      modalDescription = $('.js-modal-desciption');

  function addText(name, description) {
    modalName.text(name),
    modalDescription.html(description);
  }

  $(document).on('click','.js-modal-link-simple', function(e) {
    $('body').addClass('is-scroll');
    e.preventDefault();
    $('.js-modal-simple').addClass('is-active');

    //опереедляем индекс населенного пунтка в массиве
    var modalIndex = $(this).data('modal');
      console.log(townships[modalIndex].name);
      addText(townships[modalIndex].name,townships[modalIndex].desc);
   

  });

  $('body').click(function(e) {
    if($('.js-modal-simple').has(e.target).length == 0 && $('.js-modal-link-simple').has(e.target).length == 0) {
      $('.js-modal-simple').removeClass('is-active');
      $('body').removeClass('is-scroll');
    }
  });

});


  




