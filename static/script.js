$(function() {
  // locate your element and add the Click Event Listener
  document.getElementById("item_ul").addEventListener("click",function(e) {
      // e.target is our targetted element.
                  // try doing console.log(e.target.nodeName), it will result LI
      if(e.target && e.target.nodeName == "LI") {
          console.log(e.target.id + " was clicked");
      }
  });


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
        // small nav
        nav.classList.remove("bg-transparent");
        nav.classList.add("fixed");
        nav.classList.add("nav-bg-yeezy");
        if (counter == 1) {
          var selectedClass = "";
          selectedClass = $(this).attr("data-rel");
          $("#navbar").fadeTo(100, 0.8);
          setTimeout(function() {
            $("#navbar").fadeIn().addClass('animation');
            $("#navbar").fadeTo(100, 1);
          }, 300);
        }

        counter += 1

    } else {
        // big nav
        nav.classList.remove("nav-bg-yeezy");
        counter = 0
        setTimeout(function() {
          $("#navbar").fadeIn("slow").addClass('animation');
        }, 300);
        nav.classList.remove("fixed");
    }
}
