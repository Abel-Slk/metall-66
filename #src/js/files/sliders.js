if($('.slider').length>0){
	$('.slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		speed: 800,
		autoplay: true,
		autoplaySpeed: 5000,

		// fade: true,
		// cssEase: 'linear',

		slidesToShow: 1,
		slidesToScroll: 1,


		responsive:[
			{
				breakpoint: 768,
				settings: {
				}
			}
		]
	});
}