"use strict";

$(document).ready(function () {
  var prevBtn2 = $('#prev-btn');
  var nextBtn2 = $('#next-btn');
  var masonryCarouselType2 = $('.masonry-carousel-type-2');
  masonryCarouselType2.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    smartSpeed: 666
  });
  nextBtn2.click(function () {
    masonryCarouselType2.trigger('next.owl.carousel', [666]);
  });
  prevBtn2.click(function () {
    masonryCarouselType2.trigger('prev.owl.carousel', [666]);
  });
});
//# sourceMappingURL=masonry-slider-type-2.js.map
