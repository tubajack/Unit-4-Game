//Declare a variable for the score
var score = 0;

//Declare a target score
var targetScore = 100; 




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
$("#score-counter").text(score);
$("#target-score").text(targetScore);



//Have that score be displayed to the screen
scoreCounter.textContent = "Your score is: " + score;
targetScore.textContent = "Target Score: " + targetScore;