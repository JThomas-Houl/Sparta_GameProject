$(function (event){
	console.log("DOM is ready");

	

	var pixelGrid = $(".pixelGrid"); //pixel grid variable
	var startBlock = $(".E_col_1");
	var finishBlock = $(".E_col_10");

	var deathColor = $(".A_col_1").css("background-color");
	console.log(deathColor);
	var startFinishColour = $(".E_col_1").css("background-color");

	//on mouse click event you can only click on startblock once
	startBlock.mousedown(function(event){
		

		//mousemove event on the td uses this to paint the color of the cell
		$('td').mousemove(function(event){


			if($(this).css("background-color") === deathColor){
				console.log("dead");
				$('td').off();
				alert("you lose");
				//coloured collisions working
			}

			$(this).css("background-color", "red");

		});

		// //mouse up on td
		$('td').mouseup(function(event){

			/*checks if the html = finishblock if yes you win
			if the inner html is not the same then you lose*/

			if($(this).html() !== finishBlock.html()){
				$('td').off();
				alert("you lose");

			}else{
				alert("you win");
				$('td').off();
			}

		});
	});

});
