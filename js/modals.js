$(document).ready(function(){

  var modal = $('.js-modal-simple') || $('.js-modal-expanded'),
      modalName = $('.js-modal-name'),
      modalDescription = $('.js-modal-desciption');

  function addText(name, description) {
    modalName.text(name),
    modalDescription.html(description);
  }

  $(document).on('click','.js-modal-link-expanded', function(e) {
    $('body').addClass('is-scroll');
    e.preventDefault();
    $('.js-modal-expaned').addClass('is-active');

    //опереедляем индекс населенного пунтка в массиве
    var modalIndex = $(this).data('modal');
      console.log(projects[modalIndex]);
      addText( projects[modalIndex].name,  projects[modalIndex].desc);
   
  });


  $(document).on('click','.js-modal-link-simple', function(e) {
    $('body').addClass('is-scroll');
    e.preventDefault();
    $('.js-modal-simple').addClass('is-active');

    //опереедляем индекс населенного пунтка в массиве
    var modalIndex = $(this).data('modal');
      console.log(townships[modalIndex].name);
      addText(townships[modalIndex].name,townships[modalIndex].desc);
   
  });

 //Закрытие модальных окон при клике вне области контента
   $('body').click(function(e) {
    if($('.js-modal-expaned').has(e.target).length == 0 && $('.js-modal-link-expanded').has(e.target).length == 0) {
      $('.js-modal-expaned').removeClass('is-active');
      $('body').removeClass('is-scroll');
    }
  });
   
  $('body').click(function(e) {
    if($('.js-modal-simple').has(e.target).length == 0 && $('.js-modal-link-simple').has(e.target).length == 0) {
      $('.js-modal-simple').removeClass('is-active');
      $('body').removeClass('is-scroll');
    }
  });

  // РЕАЛИЗАЦИЯ ТАБОВ В МОДАЛЬНОМ ОКНЕ
  $('.js-tab-content').hide();
  $('.js-tab').click(function(){
    $('.js-content').hide();
    $('.js-tab').removeClass('is-active').eq($(this).index()).addClass('is-active');
    $('.js-tab-content').hide().eq($(this).index()).fadeIn();
  });

  $('.js-project').click(function(){
    console.log("sasha");
    $('.js-tab').removeClass('is-active');
    $('.js-tab-content').hide();
    $('.js-content').show();
  });

 //SLICK SLIDER для вкладки ПОСТРОЕННЫЕ ДОМА
  $('.js-slider-houses').slick();
});


  




