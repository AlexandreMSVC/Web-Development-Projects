var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

let hasStarted = false;

let level = 0;

$("body").keydown(function () {
  if (!hasStarted) {
    hasStarted = true;
    $("#level-title").text("Level " + level);
    nextSequence();
  }
});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  animatePress(randomChosenColour);
}

function playSound(name) {
  var clickSound = new Audio("sounds/" + name + ".mp3");
  clickSound.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  
}