$(document).ready(() => {
  const prevBtn = $('#left-btn');
  const nextBtn = $('#right-btn');
  const masonryCarousel = $('.masonry-carousel-type-1');

  masonryCarousel.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    smartSpeed: 666,
  });

  nextBtn.click(() => {
    masonryCarousel.trigger('next.owl.carousel', [666]);
  });

  prevBtn.click(() => {
    masonryCarousel.trigger('prev.owl.carousel', [666]);
  });
});
