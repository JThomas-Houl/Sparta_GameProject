$(function (event){
	console.log("DOM is ready");

	var pixelGrid = $(".pixelGrid"); //pixel grid variable
	var startBlock = $(".E_col_1");
	var finishBlock = $(".E_col_10");
	var mouseIsUp = true

	//on mouse click event
	startBlock.mousedown(function(event){
	//lets you only click on startblock once
		//console.log("startBlock");

		//mousemove event on the td uses this to paint the color of the cell
		$('td').mousemove(function(event){
			$(this).css("background-color", "red");

		});

		//mouse up funtion turns off all events once the mouse is up
		$(finishBlock).mouseup(function(event){
			$('td').off();
			console.log("you win");
		});

		$(pixelGrid).mouseup(function(event){
			console.log("you lose ");
			$('td').off();
		});



	});

	// startBlock.click(function(event){
	// 	console.log("start");
	// });



		

});
