$(function (event){
	console.log("DOM is ready");

	var pixelGrid = $(".pixelGrid"); //pixel grid variable

	//on mouse click event
	pixelGrid.mousedown(function(event){
		console.log("down");

		//mousemove event on the td uses this to paint the color of the cell
		$('td').mousemove(function(event){
			$(this).css("background-color", "red");

			});
		//mouse up funtion turns off all events once the mouse is up
		$(pixelGrid).mouseup(function(event){
			$('td').off();
		});

		});
		

	});
