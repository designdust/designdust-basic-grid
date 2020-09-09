//Sticky Header

$(function(){
  
	createSticky($(".createSticky"));

});

function createSticky(sticky) {
	
	if (typeof sticky !== "undefined") {

		var	pos = sticky.offset().top,
				win = $(window);
			
		win.on("scroll", function() {
    		win.scrollTop() >= pos ? sticky.addClass("stickynav") : sticky.removeClass("stickynav");      
		});			
	}
}

$(window).scroll(function () {

    //Header Paralax
    var wScroll = $(this).scrollTop();

    $('.parallax').css({
        'transform': 'translate(0px, ' + wScroll / 4 + 'px)'
    }); 

});

//center click on a hash links
$(document).on('click', 'li a', function(e) {
    e.preventDefault();

    var target = $($(this).attr('href'));

    $('html, body').animate({
        scrollTop: target.offset().top - parseInt((window.innerHeight - target.outerHeight()) / 2, 10)
    }, 300);
});


//Scroll effects
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  }); 
