$(function (event){
	console.log("DOM is ready");

	var pixelGrid = $(".pixelGrid"); //pixel grid variable

	pixelGrid.mousedown(function(event){//mouse down with mov
		console.log("down");
		$(this).mousemove(function(event){
			console.log("down n moveing");
		});
	});
	pixelGrid.mouseup(function(event){
		console.log("up");
		$(this).off("mousemove")
	});








});