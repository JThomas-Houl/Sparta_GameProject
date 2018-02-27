$(function (event){
	console.log("DOM is ready");

	



	var pixelGrid = $(".pixelGrid"); //pixel grid variable
	var startBlock = $(".E_col_1");
	var finishBlock = $(".E_col_10");

	var deathColor = $(".A_col_1").css("background-color");
	//console.log(deathColor);
	var startFinishColour = $(".E_col_1").css("background-color");

	var gameStart = true;
	var tableSize = $("td").length;


	function resetGrid(){
		for(var i = 0; i < tableSize; i++){ //reads table size
			var tableCellColorInteration = $($("td")[i]).css("background-color");
			var tableInteration = $($("td")[i]);

		if(tableCellColorInteration == startFinishColour){ //if its red set to white
			tableInteration.css("background-color", "white");

			if(tableInteration == startBlock || finishBlock){ //if its the start or end square turn back to red
				startBlock.css("background-color","red");
				finishBlock.css("background-color","red");

				}
			}
		}
	}

	// do{

				
	//on mouse click event you can only click on startblock once
		startBlock.mousedown(function(event){
			
			

			//mousemove event on the td uses this to paint the color of the cell
			$('td').mousemove(function(event){


				if($(this).css("background-color") === deathColor){
					//console.log("dead");
					//$('td').off();
					console.log("you lose");
					resetGrid();

					

					// var startAgain = prompt("Would you like to retry this level?: Enter Y for yes or N for no");
					// if(startAgain == "Y"){
					// 	gameStart == true;

					// 	
					// }
					

					
					//coloured collisions working
				}

				else {
					$(this).css("background-color", "red");
				}

			});

			// //mouse up on td
			$('td').mouseup(function(event){

				/*checks if the html = finishblock if yes you win
				if the inner html is not the same then you lose*/

				if($(this).html() !== finishBlock.html()){
					$('td').off();
					//alert("you lose");


				}else{
					alert("you win");
					$('td').off();
				}

			});
		});


	// }while(gameStart == false);
	


});
