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
});
