"use strict";
$(document).ready(function () {
  // Gumb za pomicanje slika prema desno
  $(".btnR").click(function () {
    let currentImg = $(".active");
    let nextImg = currentImg.next();
    let imgSelector = document.querySelector(".active");
    let imgWidth = imgSelector.offsetWidth;
    if (nextImg.length) {
      currentImg.removeClass("active");
      $(".slider1").animate({ right: imgWidth });
      $(".slider2").animate({ right: imgWidth });
      nextImg.addClass("active");
    }
  });
  // Gumb za pomicanje slika prema lijevo
  $(".btnL").click(function () {
    let currentImg = $(".active");
    let nextImg = currentImg.next();
    let imgSelector = document.querySelector(".active");
    let imgWidth = imgSelector.offsetWidth;
    if (nextImg.length) {
      currentImg.removeClass("active");
      $(".slider1").animate({ left: imgWidth });
      $(".slider2").animate({ left: imgWidth });
      nextImg.addClass("active");
    }
  });
});
