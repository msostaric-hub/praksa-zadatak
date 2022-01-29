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

  $(".btnR").click(function () {
    $(".slider1").css({ transform: "translateX(150px)" });
    $(".slider2").css({ transform: "translateX(150px)" });
  });
  $(".btnL").click(function () {
    $(".slider1").css({ transform: "translateX(-150px)" });
    $(".slider2").css({ transform: "translateX(-150px)" });
  });
});

// var count = $(".content1").length; //length gives total length of elements
// $("#total").text(count);
// if ($current.is($slides.last())) {
//   $("#current").text("1"); //first slide
//   $current.hide();
//   $slides.first().show();
// }
// // else, hide current slide and show the next one
// else {
//   $("#current").text($current.next().index() + 1);
//   //index() returns index, add 1 because it starts from 0
//   $current.hide().next().show();
// }
