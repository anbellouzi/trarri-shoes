$(function() {
  var selectedClass = "";
  $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});

let counter = 0

window.onscroll = function() {
    var nav = document.getElementById('navbar');
    if ( window.pageYOffset > 200 ) {
        nav.classList.remove("bg-transparent");
        nav.classList.add("fixed");
        nav.classList.add("nav-bg-yeezy");
        if (counter == 1) {
          var selectedClass = "";
          selectedClass = $(this).attr("data-rel");
          $("#navbar").fadeTo(100, 0.1);
          setTimeout(function() {
            $("#navbarNav").fadeIn().addClass('animation');
            $("#navbar").fadeTo(50, 1);
          }, 300);
        }

        counter += 1

    } else {

        nav.classList.remove("nav-bg-yeezy");
        // nav.classList.add("bg-transparent");
        counter = 0
        setTimeout(function() {
          $("#navbarNav").fadeOut().addClass('animation');
          // $("#navbar").fadeTo(300, 1);
        }, 300);
        nav.classList.remove("fixed");
    }


}
