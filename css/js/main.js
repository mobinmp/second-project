//slider

const swiper = new Swiper('.swiper-slider', {
    // Optional parameters
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });
  //toggle
  $(window).on('scroll' ,function(){
   if($(window).scrollTop()){
    $('nav').addClass('sticky-nav')
   }
   else{
    $('nav').removeClass('sticky-nav')
   }
  })
  function openMenu() {
    document.getElementById('menu').style.width = '100%';
}

function closeMenu() {
    document.getElementById('menu').style.width = '0%';
}