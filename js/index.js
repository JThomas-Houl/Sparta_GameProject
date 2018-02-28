$(function (event){
	console.log("DOM is ready");

$(".purple").css("background-color", "purple");

	var startButton = $(".startButton");

	var howToButton = $(".howToButton");

	var quitButton = $(".quitButton");



	var pixelGrid = $(".pixelGrid"); //pixel grid variable
	var startBlock = $(".E_col_1");
	var finishBlock = $(".E_col_10");

	var startBlockV2 = $(".F_col_1_V2");
	var finishBlockV2 = $(".A_col_10_V2");

	var deathColor = $(".A_col_1").css("background-color");

	var deathColorV2 = $(".A_col_4_V2").css("background-color");	
	//console.log(deathColor);
	var startFinishColour = $(".E_col_1").css("background-color");
	var startFinishColourV2 = $(".F_col_1_V2").css("background-color");

	var gameStart = true;
	var tableSize = $("td").length;

	var mouseIsUp = false;

	var secondLevelGrid = [$(".A_col_5"), $(".A_col_10"), $(".B_col_5"), $(".B_col_8"), $(".B_col_10"),$(".C_col_2"), 
							$(".C_col_5"),$(".C_col_8"),$(".C_col_10"), $(".D_col_1"), $(".D_col_3"), $(".D_col_8"),
							$(".E_col_1"),$(".E_col_4"), $(".E_col_5"),$(".E_col_7"),$(".E_col_8"),$(".E_col_9"),
							$(".F_col_6"),$(".G_col_1"),$(".G_col_4"),$(".G_col_6"),$(".G_col_9"),$(".G_col_10"),
							$(".H_col_6"),$(".I_col_2"),$(".I_col_3"),$(".I_col_5"),$(".I_col_6"),$(".I_col_10"),
							$(".J_col_5"),$(".J_col_6"),$(".J_col_10")];
	
	var secondLevelArray = secondLevelGrid.length;

	var startBlockLevel2 = $("H_col_10");

	var finishBlockLevel2 = $("F_col_1");

	function resetGrid(){
		for(var i = 0; i < tableSize; i++){ //reads table size
			// var tableCellColorInteration =  //td array colors
			//var tableInteration = $($("td")[i]); //td interation
			$($("td")[i]).css("background-color","white")
		
		}
		$(".Red").css("background-color", "red")
		$(".Green").css("background-color", "green")
	}




	//Button funtions

	startButton.click(function(event){
		window.location.href='/Users/tech-a25/Sparta_GameProject/index.html';
	});

	howToButton.click(function(event){
		var HowToImage = $(".homepage").attr("src","images/coloured_lines_howTo_V2.png");
		startButton.animate({top: "80%"});
		howToButton.off()

	});
	quitButton.click(function(event){
		window.location.href='/Users/tech-a25/Sparta_GameProject/quit_vid.html';
	})




	/*DONT NOT TOUCH ANYTHING BELOW THIS LINE OR YOU WILL BREAK THE DAMN GAME FOOL
	______________________________________________________________________________ */

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
			
		var userInput = prompt("y to retry, N to not");
		if (userInput == "y"){
			mouseIsUp == false;
		 }


		}



		else{
			alert("you win");
			//$('td').off();

			// var nextLevel = prompt("y for next Level");
			// if(nextLevel == "y"){
			//  	mouseIsUp == false;
			//  	
			// }
		}
	});
	

	startBlockV2.mousedown(function(event){
		mouseIsUp = false;
			//mousemove event on the td uses this to paint the color of the cell
			$('td').mousemove(function(event){

				if(mouseIsUp == false) {
					if($(this).css("background-color") === deathColorV2){

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

		if($(this).html() !== finishBlockV2.html()){
			//$('td').off();
			console.log("you lose");
			//location.reload();
			resetGrid();
			
		var userInput = prompt("y to retry, N to not");
		if (userInput == "y"){
			mouseIsUp == false;
		 }


		}
		else{
			alert("you win");
		}
	});

});
