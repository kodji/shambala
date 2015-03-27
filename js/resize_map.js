$(document).ready(function(){
	$(window).on("resize",checkMapSize);
	checkMapSize();
});

function checkMapSize () {
	var wh = $(window).height();
	var fix = 120;
	$('#server_map').height(wh - fix);
}