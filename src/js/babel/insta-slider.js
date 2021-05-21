"use strict";

var indexForBox1;
var indexForBox2;
var indexForBox3;
var indexForBox4;
var indexForBox5;

function sliderPlay(boxItems1, boxItems2, boxItems3, boxItems4, boxItems5) {
  // _____________________________ 1.box hareket _____________________________________________________________
  boxItems1.each(function () {
    if ($(this).hasClass('active')) {
      indexForBox1 = $(this).index();
    }
  });
  indexForBox1++;

  if (indexForBox1 == boxItems1.length) {
    indexForBox1 = 0;
  }

  boxItems1.eq(indexForBox1).addClass('active');
  boxItems1.eq(indexForBox1 - 1).removeClass('active').addClass('passive');
  boxItems1.eq(indexForBox1 - 2).removeClass('passive'); // _____________________________ 2.box hareket _____________________________________________________________

  boxItems2.each(function () {
    if ($(this).hasClass('active')) {
      indexForBox2 = $(this).index();
    }
  });
  indexForBox2++;

  if (indexForBox2 == boxItems2.length) {
    indexForBox2 = 0;
  }

  boxItems2.eq(indexForBox2).addClass('active');
  boxItems2.eq(indexForBox2 - 1).removeClass('active').addClass('passive');
  boxItems2.eq(indexForBox2 - 2).removeClass('passive'); // _____________________________ 3.box hareket _____________________________________________________________

  boxItems3.each(function () {
    if ($(this).hasClass('active')) {
      indexForBox3 = $(this).index();
    }
  });
  indexForBox3++;

  if (indexForBox3 == boxItems3.length) {
    indexForBox3 = 0;
  }

  boxItems3.eq(indexForBox3).addClass('active');
  boxItems3.eq(indexForBox3 - 1).removeClass('active').addClass('passive');
  boxItems3.eq(indexForBox3 - 2).removeClass('passive'); // _____________________________ 4.box hareket _____________________________________________________________

  boxItems4.each(function () {
    if ($(this).hasClass('active')) {
      indexForBox4 = $(this).index();
    }
  });
  indexForBox4++;

  if (indexForBox4 == boxItems4.length) {
    indexForBox4 = 0;
  }

  boxItems4.eq(indexForBox4).addClass('active');
  boxItems4.eq(indexForBox4 - 1).removeClass('active').addClass('passive');
  boxItems4.eq(indexForBox4 - 2).removeClass('passive'); // _____________________________ 5.box hareket _____________________________________________________________

  boxItems5.each(function () {
    if ($(this).hasClass('active')) {
      indexForBox5 = $(this).index();
    }
  });
  indexForBox5++;

  if (indexForBox5 == boxItems5.length) {
    indexForBox5 = 0;
  }

  boxItems5.eq(indexForBox5).addClass('active');
  boxItems5.eq(indexForBox5 - 1).removeClass('active').addClass('passive');
  boxItems5.eq(indexForBox5 - 2).removeClass('passive');
}

$(document).ready(function () {
  var boxItems1 = $('.img-box-1 .slider-wrapper .image-cover');
  var boxItems2 = $('.img-box-2 .slider-wrapper .image-cover');
  var boxItems3 = $('.img-box-3 .slider-wrapper .image-cover');
  var boxItems4 = $('.img-box-4 .slider-wrapper .image-cover');
  var boxItems5 = $('.img-box-5 .slider-wrapper .image-cover');
  var interval;

  var timer = function timer() {
    interval = setInterval(function () {
      sliderPlay(boxItems1, boxItems2, boxItems3, boxItems4, boxItems5);
    }, 3000);
  };

  timer();
});
//# sourceMappingURL=insta-slider.js.map
