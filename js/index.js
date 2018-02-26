$(function (event){
	console.log("DOM is ready");

	var pixelGrid = $(".pixelGrid"); //pixel grid variable
	var startBlock = $(".E_col_1");
	var finishBlock = $(".E_col_10");
	

	//on mouse click event you can only click on startblock once
	startBlock.mousedown(function(event){

		//mousemove event on the td uses this to paint the color of the cell
		$('td').mousemove(function(event){
			$(this).css("background-color", "red");
			//console.log($(this).html());

		});

		// //mouse up win funtion turns off all events once the mouse is up
		// $(finishBlock).mouseup(function(event){
		// 	$('td').off();
		// 	console.log("you win");
		// });

		


		// //mouse up you lose
		$(pixelGrid).mouseup(function(event){

			if($(this)!= finishBlock){
				console.log("you lose");
				$('td').off();

			}else if($(this) == finishBlock){
				console.log("you win");
			
			}

		});



	});

	//if mouse up not on finihs block then you lose 
	/* if the mouse comes up on a cell thats not finishBlock
	then you lose.

	check if its the finishBlock on mouse up*/

	


		

});
