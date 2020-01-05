//緩慢滑動
$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
$('.carousel').carousel({
  interval: 2500
})

//滑動離開頂部時就取消at_top的class
$(window).scroll(function(e){
  if ($(window).scrollTop()<=200)
    $(".navbar,.explore").removeClass("bg-light");
  else
    $(".navbar,.explore").addClass("bg-light");
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

AOS.init();