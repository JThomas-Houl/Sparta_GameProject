$(function (event){
	console.log("DOM is ready");

	var pixelGrid = $(".pixelGrid"); //pixel grid variable
	var startBlock = $(".E_col_1");
	var finishBlock = $(".E_col_10");

	var deathColor = $(".row_A").css("background-color");
	
	//div p
	// var topDivBBPos = $(".topDivBB").position();
	// var middleDivBBPos = $(".middleDivBB").position();
	// var bottomLeftDivBBPos = $(".bottomLeftDivBB").position();
	// var bottomRightDivBBPos = $(".bottomRightDivBB").position();
	// var bottomMiddleDivBBPos = $(".bottomMiddleDivBB" ).position();

	//on mouse click event you can only click on startblock once
	startBlock.mousedown(function(event){
	// console.log(event.pageX,event.pageY);
	// console.log(topDivBBPos.left, topDivBBPos.top);

		
		//console.log($(".A_col_1").css("background-color"));


		//mousemove event on the td uses this to paint the color of the cell
		$('td').mousemove(function(event){


			//$(this).css("background-color", "red");

			//console.log($(this).css("background-color"));


			if($(this).css("background-color") !== deathColor){
				console.log("dead");
			}



			//console.log(event.pageX, event.pageY);
			// console.log($("topDivBB").pageX);


			// console.log(event.pageX, event.pageY);



		});

		// //mouse up on td
		$('td').mouseup(function(event){

			/*checks if the html = finishblock if yes you win
			if the inner html is not the same then you lose*/

			if($(this).html() !== finishBlock.html()){
				$('td').off();
				//alert("you lose");

			}else{
				//alert("you win");
				$('td').off();
			}

		});



	});
		

});
