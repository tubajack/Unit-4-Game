//Declare a variable for the score
var score = 0;


//click an event which responds to the clicking of the logos
$(".baylor-logo").on("click", function(){
    score = score + 3;
    scoreCounter.textContent = "Your score is: " + score;
});

$(".notredame-logo").on("click", function(){
    score = score + 2;
    scoreCounter.textContent = "Your score is: " + score;
});

$(".oregon-logo").on("click", function(){
    score = score + 5;
    scoreCounter.textContent = "Your score is: " + score;
});

$(".uconn-logo").on("click", function(){
    score = score + 10;
    scoreCounter.textContent = "Your score is: " + score;
});

//Create a variable for holding a reference for the score counter
var scoreCounter = document.getElementById("score-counter")

//Have that score be displayed to the screen
scoreCounter.textContent = "Your score is: " + score;