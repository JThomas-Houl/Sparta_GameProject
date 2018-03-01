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
	$(".StartBlock").mousedown(function(event){
		mouseIsUp = false;
		
		

		//mousemove event on the td uses this to paint the color of the cell
		$('td').mousemove(function(event){

			if(mouseIsUp == false) {
				if($(this).css("background-color") === $(".Green").css("background-color")){

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

		if($(this).html() !== $(".FinishBlock").html()){
			//$('td').off();
			console.log("you lose");
			//location.reload();
			resetGrid();
		}
		else if($(".White").css("background-color") === $(".FinishBlock").css("background-color")){
			alert("you win");
		}
		var userInput = prompt("y to retry, N to not");
		if (userInput == "y"){
			mouseIsUp == false;
		 }

	});
	

	// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("innerDiv")[0];


// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

});
