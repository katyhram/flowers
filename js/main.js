$(document).ready(function () {
  const flowersSlider = new Swiper('.flowers-slider', {
  // Параметры слайдера
  loop: true, //Прокручивается бесконечно
  slidesPerView: 6,

  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Настройки адаптивной версии
  breakpoints: {
    // если браузер >= 320px
    320: {
      slidesPerView: 2,

    },
    // если браузер >= 480px
    480: {
      slidesPerView: 3,
 
    },
    // если браузер >= 992px
    992: {
      slidesPerView: 6,

    }
  }

});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Параметры слайдера
  loop: true, //Прокручивается бесконечно
  slidesPerView: 1,

  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : "img/flowers/img-1.jpg",
      opts : {
        caption : 'First caption',
        thumb   : 'img/flowers/img-1.jpg'
      }
    },
    {
      src  : 'img/flowers/img-2.jpg',
      opts : {
        caption : 'Second caption',
        thumb   : 'img/flowers/img-2.jpg'
      }
    },
    {
      src  : 'img/flowers/img-3.jpg',
      opts : {
        caption : 'Third caption',
        thumb   : 'img/flowers/img-3.jpg'
      }
    },
    {
      src  : 'img/flowers/img-4.jpg',
      opts : {
        caption : 'Fourth caption',
        thumb   : 'img/flowers/img-4.jpg'
      }
    },
    {
      src  : 'img/flowers/img-5.webp',
      opts : {
        caption : 'Fifth caption',
        thumb   : 'img/flowers/img-5.webp'
      }
    },
    {
      src  : 'img/flowers/img-6.webp',
      opts : {
        caption : 'Sixth caption',
        thumb   : 'img/flowers/img-6.webp'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});

$('.more').click(function() {
  $('.show-more').fadeIn();
  $(this).fadeOut("fast");
  return false;
});

});



