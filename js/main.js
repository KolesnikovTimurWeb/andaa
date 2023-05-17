const swiper3 = new Swiper('.special-swiper', {
   spaceBetween: 40,
   loop: true,
   slidesPerView: 1,
   grabCursor: true,
   pagination: {
      el: ".arrow .swiper-pagination",
      type: "fraction",
   },
   navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
   },
   // Navigation arrows
   breakpoints: {
      640: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1200: {
         slidesPerView: 3,
         spaceBetween: 40,
      },
      1480: {
         slidesPerView: 3,
         spaceBetween: 50,
      },
   },

});


const swiper4 = new Swiper('.testemonials-container', {
   spaceBetween: 80,
   loop: true,
   slidesPerView: 1,
   grabCursor: true,
   pagination: {
      el: ".testemonials-arrow .swiper-pagination",
      type: "fraction",
   },
   navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
   },
});


const swiper5 = new Swiper('.shop-swiper', {
   spaceBetween: -20,
   loop: true,
   slidesPerView: 2.9,
   centeredSlides: true,
   grabCursor: true,
   pagination: {
      el: ".testemonials-arrow .swiper-pagination",
      type: "fraction",
   },
   effect: "coverflow",
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
   },
   navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
   },
});





const burgerBtn = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.hader__nav')

burgerBtn.addEventListener('click', function () {
   burgerBtn.classList.toggle('active')
   burgerMenu.classList.toggle('active')
})
