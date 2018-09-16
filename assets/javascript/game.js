// declare variables

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/dj-pusheen.png", "./assets/images/donut-pusheen.png", "./assets/images/cool-pusheen.png", "./assets/images/unicorn-pusheen.png"];

// functions

	function randomTargetNumber () {
		targetNumber = Math.floor(Math.random() * 102) + 19;
	}

	function resetCats () {
		for (var i = 0; i < images.length; i++) {
			var cat = $("<img>");
			cat.addClass("cat");
			cat.attr("src", images[i]);
			cat.attr("value", (Math.floor(Math.random() * 12) + 1));
			cat.attr("height", "229");
			$(".cat-images").append(cat);
		}
	}

	function resetHTML () {
		$(".target-number").html(targetNumber);
		$(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".score-number").html(counter);
		$(".cat-images").empty();
	}

	function totalReset () {
		randomTargetNumber ();
		counter = 0;
		resetHTML ();
		resetCats ();
    }
    
    var catMeowLose = document.createElement("audio");
        catMeowLose.setAttribute("src", "cat-meow-lose.mp3");

    var catMeowWin = document.createElement("audio");
        catMeowWin.setAttribute("src", "cat-meow-win.mp3");

// running code

	// page set up
	randomTargetNumber();
	resetHTML ();
	resetCats ();

// click functions
	function catClick () {
		//attr returns first value of selected html element
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == targetNumber) {
			wins++;
            totalReset();
            catMeowWin.play();
		}
		else if (counter > targetNumber) {
			losses++;
            totalReset();
            catMeowLose.play();
		};
    };

	//accounting for each time document is changed execute catClick function
	$(document).on("click", ".cat", catClick);