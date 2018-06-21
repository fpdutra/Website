$(document).ready( function(){  	
	$("#corpo").scrollspy();
	$(window).resize(function() {
	  $('.rollertext').slick('resize');
	  $('.roller').slick('resize');
	  
	});
	$(window).on('orientationchange', function() {
	  $('.rollertext').slick('resize');
	  $('.roller').slick('resize');
	  
	});
	$(".rollertext").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.roller'
	});
	$(".roller").slick({
		dots: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 3,
		asNavFor: '.rollertext',
		centerMode: true,
		centerPadding: '30px',
		responsive: [
			{
			  breakpoint: 100,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 100,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 1
			  }
			}
		]
	});
	
	$(".roller").on('beforeChange', function(event, slick, currentSlide, nextSlide){
		event.preventDefault();
		if (nextSlide==7) {
			$("#back").click()
		}
	});
	$("#back").click(function(){
		$(".roller").slick('slickGoTo', 0);
	});
	$("#carro").click(function(){
		$(".roller").slick('slickGoTo', 0);
		return true;
	});
	$("#casa").click(function(){
		$(".roller").slick('slickGoTo', 1);
		return true;
	});
	$("#condo").click(function(){
		$(".roller").slick('slickGoTo', 3);
		return true;
	});
	$("#empresa").click(function(){
		$(".roller").slick('slickGoTo', 2);
		return true;
	});
	$("#rodeo").click(function(){
		$(".roller").slick('slickGoTo', 4);
		return true;
	});
	$("#viagem").click(function(){
		$(".roller").slick('slickGoTo', 6);
		return true;
	});
	$("#vida").click(function(){
		$(".roller").slick('slickGoTo', 5);
		return true;
	});
    $('a[href*="#"]:not([href="#"])').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    	  var target = $(this.hash);
    	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    	  if (target.length) {
    	    $('html, body').animate({
    	      scrollTop: target.offset().top
    	    }, 1000);
    	    return true;
    	  }
    	}
  	});
	$(".nav a").on("click", function(){
	   $("#dropa").find(".active").removeClass("active");
	   $(this).parent().addClass("active");
	});
	$(".circle").hover(function(){
		$(".next").animate({
			top: "8px"
		},200);
	});
	
	$(".circle").mouseleave(function(){
		$(".next").animate({
			top: "14px"
		},200);
	});    
});