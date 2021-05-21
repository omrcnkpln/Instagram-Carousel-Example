"use strict";

$(document).ready(function () {
  var prevBtn = $('#left-btn');
  var nextBtn = $('#right-btn');
  var masonryCarousel = $('.masonry-carousel-type-1');
  masonryCarousel.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    smartSpeed: 666
  });
  nextBtn.click(function () {
    masonryCarousel.trigger('next.owl.carousel', [666]);
  });
  prevBtn.click(function () {
    masonryCarousel.trigger('prev.owl.carousel', [666]);
  });
});
//# sourceMappingURL=masonry-slider-type-1.js.map
