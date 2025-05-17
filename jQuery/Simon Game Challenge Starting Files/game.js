let gamePattern = [];
let userClickedPattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

let randomChosenColor;

let level = 0;

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);

  randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);

      userClickedPattern = [];
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(".btn").click(function (e) {
  let userChosenColour = e.target.id;

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

$(document).keydown(function (e) {
  if (gamePattern.length === 0) {
    nextSequence();
  }
});
