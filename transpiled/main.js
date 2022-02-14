"use strict";

$(document).ready(function () {
  // Gumb za pomicanje slika prema desno
  $(".btnR").click(function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();
    var imgSelector = document.querySelector(".active");
    var imgWidth = imgSelector.offsetWidth;

    if (nextImg.length) {
      currentImg.removeClass("active");
      $(".slider1").animate({
        right: imgWidth
      });
      $(".slider2").animate({
        right: imgWidth
      });
      nextImg.addClass("active");
    }
  }); // Gumb za pomicanje slika prema lijevo

  $(".btnL").click(function () {
    var currentImg = $(".active");
    var prevImg = currentImg.prev();
    var imgSelector = document.querySelector(".active");
    var imgWidth = imgSelector.offsetWidth;

    if (prevImg.length) {
      currentImg.removeClass("active");
      $(".slider1").animate({
        left: imgWidth
      });
      $(".slider2").animate({
        left: imgWidth
      });
      prevImg.addClass("active");
    }
  });
});