$.fn.parallax = function(resistance, mouse) {
  $el = $(this);
  TweenLite.to($el, .5, {
    x: -((mouse.clientX - window.innerWidth / 2) / resistance),
    y: -((mouse.clientY - window.innerHeight / 1) / resistance)
  });
};

$(document).mousemove(function(e) {
  $(".background").parallax(-130, e);
  $(".cloud1").parallax(4.5, e);
  $(".cloud2").parallax(2.8, e);
  $(".cloud3").parallax(5, e);
  $(".cloud4").parallax(3.3, e);
  });