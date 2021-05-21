$(document).ready(() => {
  const prevBtn2 = $('#prev-btn');
  const nextBtn2 = $('#next-btn');
  const masonryCarouselType2 = $('.masonry-carousel-type-2');

  masonryCarouselType2.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    smartSpeed: 666,
  });

  nextBtn2.click(() => {
    masonryCarouselType2.trigger('next.owl.carousel', [666]);
  });

  prevBtn2.click(() => {
    masonryCarouselType2.trigger('prev.owl.carousel', [666]);
  });
});
