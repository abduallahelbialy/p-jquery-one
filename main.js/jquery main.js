$(document).ready(function(){
    $(".navbar-nav li a").click(function () {
      $("html , body").animate(
        {
          scrollTop: $("#" + $(this).data("sc")).offset().top,
        }
        ,50
      );
    });
})

