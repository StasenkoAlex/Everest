$(document).ready(function(){

  var $document = $(document),
      $body = $('body'),
      modal = $('.js-modal'),
      modalWindow;
  
  //Функция с набором инструкций для закрытия модального окна
  function closeModal(){
    modalWindow.removeClass('is-active');
    modal.removeClass('is-opened');
    $body.removeClass('is-scroll');
  }
  
  $document.on('click', '.js-modal-link', function(){
    var self = $(this),
        modalContent = self.data('content'),
        modalGallery;
    //запоминаем активную модалку
    modalWindow = $('#'+self.data('window'));
    //открываем модалку
    modal.addClass('is-opened');
    modalWindow.addClass('is-active');
    $body.addClass('is-scroll');
    //подставляем контент из массива, если есть
    if (typeof(modalContent) !== 'undefined') {
      for(var i=0; i<projectsData.length; i++) {
        if ( projectsData[i].name == modalContent) {
          modalContent = projectsData[i].content;
          modalWindow.html(modalContent);
        }
      }
    } else {
      return;
    }
    //формируем из изображений слайдер
    modalGallery = modalWindow.find('.js-gallery');
    modalGallery.slick({
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false
          }
        }
      ]
    });
  });
  
  //Закрываем модалку по клику вне области
  $body.on('click', function(e){
    var $target = $(e.target);
    if (modalWindow && $target.closest(modalWindow).length == 0) {
      closeModal();
    }
  });
  //Закрываем модалку по клику на крестик
  $document.on('click', '.js-modal-close', closeModal);

});