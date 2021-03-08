$(window).scroll(function(){
	if ($(".customNav").offset().top > 0){
		$(".customNav").addClass(".bg-gris");
	} else {
		$(".customNav").removeClass(".bg-gris");
	}
});