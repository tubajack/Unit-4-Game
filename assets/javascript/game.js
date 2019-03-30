//Declare a variable for the score
var score = 0;

//Declare a target score
var targetScore = 100; 

//Initialize the wins and losses variables
var wins = 0;
var losses = 0;

//Create a variable for holding a reference for the score counter
$("#score-counter").text(score);
$("#target-score").text(targetScore);
$("#wins").text(wins);
$("#losses").text(losses);

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
    //Same functionality as determining the above values, except that I am determining the value when the 
    //Oregon button is clicked.

    //The attribute is "duck-value"
    var newDucks = ($(this).attr("duck-value"));
    newDucks = parseInt(newDucks);
    score = score + 5;
    $("#score-counter").text(score);
});

$(".uconn-logo").on("click", function(){
    //Same functionality as determining the above values, except that I am determining the value when the 
    //UCONN button is clicked.

    //The attribute is "husky-value"
    var newHusky = ($(this).attr("husky-value"));
    newHusky = parseInt(newHusky);
    score = score + 10;
    $("#score-counter").text(score);
});



