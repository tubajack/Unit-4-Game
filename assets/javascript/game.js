//Declare a variable for the score
var score = 0;

//Declare a target score
var targetScore = 100; 




//click an event which responds to the clicking of the logos
$(".baylor-logo").on("click", function(){

    // Determining the Baylor value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the value when the Baylor logo is clicked.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "baylor-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    var newBaylor = ($(this).attr("baylor-value"));
    newBaylor = parseInt(newBaylor);
    score = score + 3;  
    $("#score-counter").text(score);
});

$(".notredame-logo").on("click", function(){


    //Same functionality as determining the Baylor value, except that I am determining the value when the 
    //Notre Dame button is clicked. 

    //The attribute is "irish-value"
    var newIrish = ($(this).attr("irish-value"));
    newIrish = parseInt(newIrish);
    score = score + 2;
    $("#score-counter").text(score);
    
});

$(".oregon-logo").on("click", function(){
    //Same functionality as determining the Baylor value, except that I am determining the value when the 
    //Oregon button is clicked.

    //The attribute is "duck-value"
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

