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

	var mouseIsUp = false;


	function resetGrid(){
		for(var i = 0; i < tableSize; i++){ //reads table size
			var tableCellColorInteration = $($("td")[i]).css("background-color"); //td array colors
			var tableInteration = $($("td")[i]); //td interation

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
		mouseIsUp = false;

		//mousemove event on the td uses this to paint the color of the cell
		$('td').mousemove(function(event){

			if(mouseIsUp == false) {
				if($(this).css("background-color") === deathColor){
					console.log("dead");
					//$('td').off();
					//alert("you lose");
					//location.reload(); page reset
					resetGrid();
					
				}else {
						$(this).css("background-color", "red");
				}
			}

		});

		// //mouse up on td
	});


	
	$('td').mouseup(function(event){
		mouseIsUp = true;


		/*checks if the html = finishblock if yes you win
		if the inner html is not the same then you lose*/

		if($(this).html() !== finishBlock.html()){
			//$('td').off();
			console.log("you lose");
			//location.reload();
			resetGrid();
			


		}

		else{
			alert("you win");
			$('td').off();
		}

		// var userInput = prompt("y for agian");
		// if (userInput == "y"){
		// 	mouseIsUp == false;
		// }

	});
	


		function resetMouse(){
			pixelGrid.mouseup(function(){
				console.log("mouse up");
				
			});
		}

	// }while(gameStart == false);
	


});
