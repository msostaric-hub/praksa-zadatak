"use strict";
$(document).ready(function () {
  $(".btnR").hover(
    function () {
      $(this).css("cursor", "pointer");
      $(this).css({ "border-color": "#134880" });
      $(this).attr(
        "src",
        $(this)
          .attr("src")
          .replace("img/arrow-gray-right.png", "img/arrow-blue-right.png")
      );
    },
    function () {
      $(this).css({ "border-color": "#dddddd" });
      $(this).attr(
        "src",
        $(this)
          .attr("src")
          .replace("img/arrow-blue-right.png", "img/arrow-gray-right.png")
      );
    }
  );

  $(".btnL").hover(
    function () {
      $(this).css("cursor", "pointer");
      $(this).css({ "border-color": "#134880" });
      $(this).attr(
        "src",
        $(this)
          .attr("src")
          .replace("img/arrow-gray-left.png", "img/arrow-blue-left.png")
      );
    },
    function () {
      $(this).css({ "border-color": "#dddddd" });
      $(this).attr(
        "src",
        $(this)
          .attr("src")
          .replace("img/arrow-blue-left.png", "img/arrow-gray-left.png")
      );
    }
  );

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
