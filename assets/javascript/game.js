//Declare a variable for the score
var score = 0;


//click an event which responds to the clicking of the logos
$(".baylor-logo").on("click", function(){

    //Alert the user they clicked the Baylor logo
    alert("You clicked the Baylor logo. Sic' Em");
});

$(".notredame-logo").on("click", function(){

    //Alert the user they clicked the Baylor logo
    alert("You clicked the Notre Dame logo. Go Irish");
});

$(".oregon-logo").on("click", function(){

    //Alert the user they clicked the Baylor logo
    alert("You clicked the Oregon logo. Go Ducks");
});

$(".uconn-logo").on("click", function(){

    //Alert the user they clicked the Baylor logo
    alert("You clicked the UConn logo. Go Huskies");
});

//Create a variable for holding a reference for the score counter
var scoreCounter = doucment.getElementByID("score-counter");

//Have that score be displayed to the screen
scoreCounter.textContent = score;