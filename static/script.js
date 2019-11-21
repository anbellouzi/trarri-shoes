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


window.onscroll = function() {
    var nav = document.getElementById('navbar');
    if ( window.pageYOffset > 225 ) {
        nav.classList.remove("bg-transparent");
        nav.classList.add("fixed");
        nav.classList.add("nav-bg-yeezy");

    } else {
        nav.classList.remove("fixed");
        nav.classList.remove("nav-bg-yeezy");
        nav.classList.add("bg-transparent");
    }
}
