/* SHRINK MENU WHEN SCROLL */ 

$(window).on("scroll touchmove", function () {
	if($(document).scrollTop() > 0){
		//$('body').addClass('shrink');
		//$('.fixed').fadeIn(300);
	}else{
		//$('body').removeClass('shrink');
		//$('.fixed').fadeOut(300);
	}
});


/* TO TOP */

$('.to-top').on('click', function(){
	$('html,body').animate({ scrollTop: 0 }, 'fast');
})


/* OPEN MENU ON HOVER */
jQuery('ul.nav li.dropdown').hover(function() {
	$(this).addClass('open');
}, function() {
	$(this).removeClass('open');
});



/* ANIMATE BANNER ON SCROLL 
if($(window).width() > 760){
    var start 		= 0;
    var until 		= 500;
    var animate 	= $('.animateme');

    $(window).bind('scroll', function(){
        var offset 	= $(document).scrollTop();
        var opacity	= 0;

        if( offset <= start ){
            opacity = 1;
        }else if( offset <= until ){
            opacity = 1 - offset/until;
        }
        
        animate.css('opacity',opacity);
    });
}*/


/* ANIMATE CONTENT ON SCROLL 
setTimeout(function(){
    $('.animate-on-load').waypoint(function(direction){
        $(this).addClass('animated fadeInUp');
    }, {
        context: window,
        continuous: true,
        enabled: true,
        horizontal: false,
        offset: '90%',
        //offset: 'bottom-in-view',
        triggerOnce: true,   
    });
}, 300);*/


/* SCROLL TO START_BROWSING */
$('.browse').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        //scrollTop: $("#start_browsing").offset().top-56
        scrollTop: $("#start_browsing").offset().top
    }, 500);
});


/* BOOTSTRAP POPOVER FOR THE MENU */
$('.dropdown-menu').find('.col-sm-6').find('a').popover({
    placement: 'left',
    html: true,
    trigger: 'hover',
    content: function () {
        return '<div class="popover_img_container"><img src="img/demos/'+$(this).attr('href').split(".html").join('.jpg') + '" /></div>';
    }
});

