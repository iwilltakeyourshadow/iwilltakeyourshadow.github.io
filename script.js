$(document).ready(function() {

	$("nav").hide();

	function isMobileWidthSmall(){
		return $('#mobile-indicator-1').is(':visible');
	}

	function isMobileWidthBig(){
		return $('#mobile-indicator-2').is(':visible');
	}

	function navFadeIn(){
		$(document).scroll(function() {
			var scrollTop = $(document).scrollTop();
			// var project = $("#synopsis").offset().top - 300;
			if (scrollTop >= 200) {
				$("nav").fadeIn(400);
			}
		});
	}

	function mobileNav(){
		$(".links").hide();
		$("#menu-button").click(function(){
			$("#menu-button").hide();
			$("nav").addClass("nav-background-light");
			$(".links").slideDown();
		});

		$(".links > a ").click(function(){
			$("nav").removeClass("nav-background-light");
			$(".links").hide();
			$("#menu-button").show();
		});
	}


	if ( isMobileWidthSmall() ){
		console.log("mobile indicator small on");

		navFadeIn();

		mobileNav();


	} else if ( isMobileWidthBig() ) {
		console.log("mobile indicator big on");
	} else {
		$("nav").show();

		$("nav").addClass("nav-background-dark");		

	}


});
