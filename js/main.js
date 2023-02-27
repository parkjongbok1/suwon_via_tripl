$(document).ready(function () {
  $(".visual_slider").slick({
    dots: true,
    infinite: true,
    arrows: true,
    // prevArrow: $(".slick-dots::before"),
    // nextArrow: $(""),
    autoplay: true,
    autoplaySpeed: 3200,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  });

  //   premium
  $(".pr_desc").click(function () {
    $(".pr_desc").removeClass("active");
    $(this).addClass("active");
  });

  //   location
  $(".lo_items .item").mouseenter(function () {
    let changImage = $(this).attr("data-image");
    $(".lo_change_background").css(
      "background-image",
      "url(" + changImage + ")"
    );
  });

  $(".lo_items .item").mouseleave(function () {
    $(".lo_change_background").css("background-image", "");
  });
});
