$(document).ready(function(){

  $('.js-header_slider').slick({
    dots: true,
    arrows: false
  });

   /*Переключатели*/
  $(document).on('click', '.js-switch-link', function(){
    var $this = $(this),
            switchContent;
    //Определяем блок с контентом
    if ( typeof($this.data('target')) !== 'undefined' ) {
      switchContent = $('#' + $this.data('target'));
    } else if( $this.closest('.js-switch-container').length ) {
      switchContent = $this.closest('.js-switch-container').find('.js-switch-content').first();
    } else {
      switchContent = $this.next();
    }
    $this.toggleClass('is-active');
    switchContent.toggleClass('is-active');
    if( switchContent.closest('.js-switch-container').length ) {
      switchContent.closest('.js-switch-container').toggleClass('is-active');
    }
    //Задаем способ отображения если, указан
    if ( typeof($this.data('action')) !== 'undefined' ) {
      if ( $this.data('action') === 'slide' ) {
        switchContent.slideToggle();
      } else {
        switchContent.fadeToggle();
      }
    }
    //Переключаем класс у документа, если указан тип
    if ( typeof($this.data('type')) !== 'undefined') {
      $body.toggleClass($(this).data('type')+'-open');
    }
  });

  //Закрываем переключатель и его контент при клике. Наличие этой кнопки не обязательно
  $(document).on('click', '.js-switch-close', function(){
    var $this = $(this),
            switchContent = $this.closest('.js-switch-content'),
      switchLink;
    //Определяем кнопку вызова
    if ( typeof(switchContent.attr('id')) !== 'undefined' ) {
      switchLink = $('.js-switch-link[data-target="'+switchContent.attr('id')+'"]');
    } else if( switchContent.closest('.js-switch-container').length ) {
      switchLink = $this.closest('.js-switch-container').find('.js-switch-link').first();
    } else {
      switchLink = switchContent.prev();
    }
    switchLink.removeClass('is-active');
    switchContent.removeClass('is-active');
    if( switchContent.closest('.js-switch-container').length ) {
      switchContent.closest('.js-switch-container').removeClass('is-active');
    }
    //Задаем способ скрытия если, указан
    if ( typeof(switchLink.data('action')) !== 'undefined' ) {
      if ( switchContent.data('action') === 'slide' ) {
        switchContent.slideUp();
      } else {
        switchContent.fadeOut();
      }
    }
    $('body').removeClass('is-scroll');
  });

  //Закрываем триггеры с классом close_outside по клику вне их области
  $('body').on('click', function(e) {
    var switchLink = $('.js-switch-link.is-active[data-close_outside="true"]'),
      switchContent;  
    //Определяем блок с контентом
    if ( typeof(switchLink.data('target')) !== 'undefined' ) {
      switchContent = $('#' + switchLink.data('target'));
    } else if( switchLink.closest('.js-switch-container').length ) {
      switchContent = switchLink.closest('.js-switch-container').find('.js-switch-content').first();
    } else {
      switchContent = switchLink.next();
    }
    //Закрываем контент по клику вне его области и вне области переключателя
    if( switchLink.length && ($(e.target).closest(switchLink).length === 0) && ($(e.target).closest(switchContent).length === 0) ) {
      switchLink.removeClass('is-active');
      switchContent.removeClass('is-active');
      if( switchContent.closest('.js-switch-container').length ) {
        switchContent.closest('.js-switch-container').removeClass('is-active');
      }
      //Задаем способ скрытия если, указан
      if ( typeof(switchLink.data('action')) !== 'undefined' ) {
        if ( switchLink.data('action') === 'slide' ) {
          switchContent.slideUp();
        } else {
          switchContent.fadeOut();
        }
      }
    }
  });
  /*/Переключатели*/


  //Блок рассчета ипотеки MORTGAGE
  $(document).on('click', '.js-calculation-switch', function(){
    $('.js-calculation-img').css('display', 'none');
  });


  //SLIDER SLICK GALLERY - ГАЛЕРЕЯ
  $('.js-gallery').slick({
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

  //SLIDER SLICK REVIEWS - БЛОК ОТЗЫВОВ
  $('.js-review_slider').slick({
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });

  //Реализация кнопки SCROLLUP
  $('.btn-scrollup').click( function() {
  	$('body').animate({'scrollTop': 0}, 1000);
  	$('html').animate({'scrollTop': 0}, 1000);
  });

  $(window).scroll( function() {
  	if($(window).scrollTop()>5000) {
  		$('.btn-scrollup').addClass('is-active');
  	}
  	else {
  		$('.btn-scrollup').removeClass('is-active');
  	}
  });

});


  




