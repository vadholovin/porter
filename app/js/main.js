/*------------------------------------*\
  #Menu
\*------------------------------------*/

(function ($) {
  
  $('.hamburger').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.mobile-nav').toggleClass('is-active');
  });

  $('.mobile-nav, .mobile-nav a').click(function (e) { 
    $(this).removeClass('is-active');
    $('.hamburger').removeClass('is-active');
  });

})(jQuery);


/*------------------------------------*\
  #Animated Scroll To Anchor
\*------------------------------------*/

(function(){

  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 100,
  });

})();



/*------------------------------------*\
  #Scroll Navbar
\*------------------------------------*/

(function($) {

  $(window).scroll(function(){	

    "use strict";	
  
    var b = $(window).scrollTop();
    
    if( b > 200) {		
      $(".page-header").addClass("page-header--scroll");
    } else {
      $(".page-header").removeClass("page-header--scroll");
    }
    
  });
  
})( jQuery );



/*------------------------------------*\
  #Owl-carousel
\*------------------------------------*/

jQuery(document).ready(function ($) {

  var owl = $('.photos-carousel');

  owl.owlCarousel({
    center: true,
    items:1,
    nav: false,
    dots: false,
    loop:true,
    margin:15,
    responsive:{
      576: {
        items:2
      },
      768:{
        items:3
      }
    }
  });

  $('.photos-carousel__nav .button-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
  })
  
  $('.photos-carousel__nav .button-next').click(function() {
    owl.trigger('next.owl.carousel', [300]);
  })
});


/*------------------------------------*\
  #Fancybox
\*------------------------------------*/

jQuery(document).ready(function ($) {
  
  $('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "zoom",
      "close"
    ],
  });
});



/*------------------------------------*\
  #Micromodal init
\*------------------------------------*/

(function () {
  MicroModal.init();
})();



/*------------------------------------*\
  #Animate on scroll init
\*------------------------------------*/

(function () {
  AOS.init({
    once: true,
    duration: 1000,
    easing: 'ease-in-out',
  });
})();



/*------------------------------------*\
  #Show/hide form & answer
\*------------------------------------*/
/*
(function() {

  // Forms
  var wpcf7Elms = document.querySelectorAll('.wpcf7');
  wpcf7Elms = Array.prototype.slice.call(wpcf7Elms, 0);

  // Answers
  var answerTitle = document.querySelector('.modal--answer .answer-title');
  var answerText = document.querySelector('.modal--answer .answer-text');

  var positiveResp = {
    title: 'Спасибо!',
    text: 'Мы скоро свяжемся с Вами'
  };

  var negativeResp = {
    title: 'Произошла ошибка!',
    text: 'Попробуйте позже'
  };

  function hideAnswer() {
    setTimeout(function() {
      MicroModal.close('modal-answer');
      answerTitle.textContent = "";
      answerText.textContent = "";
    }, 3000);
  }

  wpcf7Elms.forEach(function(item) {

    item.addEventListener('wpcf7mailsent', function() {
      answerTitle.textContent = positiveResp.title;
      answerText.textContent = positiveResp.text;
      MicroModal.show('modal-answer');
      hideAnswer();
    });

    item.addEventListener( 'wpcf7mailfailed', function() {
      answerTitle.textContent = negativeResp.title;
      answerText.textContent = negativeResp.text;
      MicroModal.show('modal-answer');
      hideAnswer();
    });

  });
})();
*/


/*------------------------------------*\
  #Map
\*------------------------------------*/

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [55.807238, 37.702],
    zoom: 17,
    controls: ['zoomControl']
  }),

  myPlacemark = new ymaps.Placemark([55.807238, 37.703442], {}, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: '../img/icons/place.png',
    // Размеры метки.
    iconImageSize: [47, 63],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-30, -70]
  });


  myMap.geoObjects
    .add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
});