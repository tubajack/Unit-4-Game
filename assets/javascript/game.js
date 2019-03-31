//Declare a variable for the score
var score = 0;

//Declare a target score
var targetScore = Math.floor(Math.random() * (102) + 19);

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
    score = score + Math.floor(Math.random() * (12) + 1); 
    $("#score-counter").text(score);

    result();

});

$(".notredame-logo").on("click", function(){


    //Same functionality as determining the Baylor value, except that I am determining the value when the 
    //Notre Dame button is clicked. 

    //The attribute is "irish-value"
    var newIrish = ($(this).attr("irish-value"));
    newIrish = parseInt(newIrish);
    score = score + Math.floor(Math.random() * (12) + 1);
    $("#score-counter").text(score);

    result();

});

$(".oregon-logo").on("click", function(){
    //Same functionality as determining the above values, except that I am determining the value when the 
    //Oregon button is clicked.

    //The attribute is "duck-value"
    var newDucks = ($(this).attr("duck-value"));
    newDucks = parseInt(newDucks);
    score = score + Math.floor(Math.random() * (12) + 1);
    $("#score-counter").text(score);

    result();

});

$(".uconn-logo").on("click", function(){
    //Same functionality as determining the above values, except that I am determining the value when the 
    //UCONN button is clicked.

    //The attribute is "husky-value"
    var newHusky = ($(this).attr("husky-value"));
    newHusky = parseInt(newHusky);
    score = score + Math.floor(Math.random() * (12) + 1);
    $("#score-counter").text(score);

    result();
  
});

var result = function(result){
    if(score === targetScore){
        wins++;
        $("#wins").text(wins);
        reset();
    }
    else if(score > targetScore){
        losses++;
        $("#losses").text(losses);
        reset();
    }
    
}

//Create a restart function
function reset(){
    score = 0;
    targetScore = Math.floor(Math.random() * (102) + 19);
    $("#score-counter").text(score);
    $("#target-score").text(targetScore);
}












