/*
|--------------------------------------------------------------------------
| CUSTOM.JS
|--------------------------------------------------------------------------
|
| The main javascript file on the project
|
*/

$(document).ready(function(){

  /*
  | Animations
  */

  $(".animateIn").css("opacity", "0");
  onViewport("header.animateIn", "animated fadeInDown", 0);

  /*
  | Validation
  */

  $("#contact-form").validate({
    errorClass: "is-invalid",
    rules: {
        name: {
          minlength: 2
      },
        email: {
          email: true
      },
        phone: {
          minlength: 8
      }
    },
    messages: {
      firm: "Dette felt er påkrævet",
      name: {
        required: "Du skal udfylde dit navn",
        minlength: "Aargh... Det er vist ikke dit navn. Prøv et andet"
      },
      email: {
        required: "Du skal udfylde din mail, så vi kan kontakte dig",
        email: "Den indtastede information er ikke en valid email"
      },
      phone: {
        required: "Dette felt er påkrævet",
        minlength: "Dit telefon nummer skal mindste være 8 tegn"
      }
    },
    submitHandler: function(form) {
      $("#contact-form").addClass("animated bounceOut");
      setTimeout(function(){
        $(".contact-alert").addClass("animated fadeIn");
      }, 600);
    }
  });

  /*
  | Scroll to contact form
  */

  $(".header__button").click(function() {
    // Calculate offest form current position to contact element and make delay half
    var delay = ( $(".contact").offset().top - $(window).scrollTop() ) / 2;
    console.log(delay);
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, delay);
});

});