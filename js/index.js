$(function (event){
	console.log(window.location.href);

	var White = $(".White").css("background-color");
	var Red = $(".FinishBlock").css("background-color");

	var startButton = $(".startButton");

	var howToButton = $(".howToButton");

	var quitButton = $(".quitButton");

	var quitButtonModal = $(".quitButtonModal");

	var retryButton = $(".retryButtonModal");

	var level_1 = "/Users/tech-a25/Sparta_GameProject/index.html"
	var level_2 = '/Users/tech-a25/Sparta_GameProject/level_2.html'
	var level_3 = '/Users/tech-a25/Sparta_GameProject/level_3.html'
	var WinPage = '/Users/tech-a25/Sparta_GameProject/win.html'


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

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementsByClassName("innerDiv")[0];


	// When the user clicks on the button, open the modal 
	var jazz = function() {
	    modal.style.display = "block";
	    mouseIsUp = true;
	}

	 function retryCloseIt(event) {
	        modal.style.display = "none";
	        resetGrid();
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

	quitButtonModal.click(function(event){
		window.location.href='/Users/tech-a25/Sparta_GameProject/quit_vid.html';
	})


	retryButton.click(function(event){
		retryCloseIt(event);
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
					jazz();
					
					
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
			jazz();	
		}
		else if($(".White").css("background-color") === $(".FinishBlock").css("background-color")){
			if(window.location.href == "file:///Users/tech-a25/Sparta_GameProject/index.html" ){
				window.location.href = level_2;
			} else if(window.location.href == "file:///Users/tech-a25/Sparta_GameProject/level_2.html") {
				window.location.href = level_3;
			} else{
				window.location.href = WinPage;

			}
		}
		
		
		

	});
	



});
