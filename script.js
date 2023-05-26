// DOM Manipulation variable declaration

var startBtn = $("#startButton");
var mainDisplay = $(".homePage");
var quizOptions = $(".choiceButton");
var submitScore = $(".submitButton");
var quizDisplay = $(".quizBlock");
var scoreForm = $(".highScore");
var scoreTimer = 75;
var globalIndex = 0;

// Add array of objects for questions
var quizQuestions = [
  {
    question:
      "Which of the following is not a common data type used in JavaScript?",
    choices: ["1. Boolean", "2. Number", "3. Double", "4. String"],
    correct: "3. Double",
  },
  {
    question: "Which language is used to add styles to webpages?",
    choices: ["1. JavaScript", "2. CSS", "3. Python", "4. HTML"],
    correct: "2. CSS",
  },
  {
    question: "What symbol is used to set apart blocks of code?",
    choices: ["1. ( )", "2. | |", "3. [ ]", "4. { }"],
    correct: "4. { }",
  },
  {
    question:
      "What command is a helpful tool for debugging code as you go along?",
    choices: [
      "1. console.log",
      "2. Math.floor",
      "3. array.length",
      "4. window.object",
    ],
    correct: "1. console.log",
  },
  {
    question: "What types of data can be stored in an array?",
    choices: [
      "1. Booleans",
      "2. Numbers",
      "3. Strings",
      "4. All of the above!",
    ],
    correct: "4. All of the above!",
  },
];

// Add event listener to begin quiz (hides form and pre made buttons)
scoreForm.css("display", "none");
quizOptions.css("border", "none");
startBtn.on("click", startGame);

// Checks answer
$(".choiceButton").on("click", checkCorrectAnswer);

// Displays next questions
$(".choiceButton").on("click", function () {
  if (globalIndex < 4) {
    globalIndex++;
    mainDisplay.text(quizQuestions[globalIndex].question);

    $(".btn1").text(quizQuestions[globalIndex].choices[0]);
    $(".btn2").text(quizQuestions[globalIndex].choices[1]);
    $(".btn3").text(quizQuestions[globalIndex].choices[2]);
    $(".btn4").text(quizQuestions[globalIndex].choices[3]);
  } else {
    // User enters initials and score is saved to local storage
    $("ul").remove();
    mainDisplay.text("All done! Your score: " + scoreTimer);
    scoreForm.css("display", "block");
  }
});

// Score gets saved and can be seen/removed in highscores.html
submitScore.on("click", function () {
  var userInitials = scoreForm.find("input[type=text]").val();
  localStorage.setItem("User", userInitials);
  localStorage.setItem("Score", scoreTimer);

  var userName = localStorage.getItem("User");
  var userScore = localStorage.getItem("Score");
  var newInfo = $("<li>");
  newInfo.text(userName + " - " + userScore);

  $(".scoresList").append(newInfo);
});

function startGame() {
  startBtn.remove();
  quizDisplay.text("");
  quizOptions.addClass("quizButton");

  // Displays first question
  mainDisplay.text(quizQuestions[globalIndex].question);

  $(".btn1").text(quizQuestions[globalIndex].choices[0]);
  $(".btn2").text(quizQuestions[globalIndex].choices[1]);
  $(".btn3").text(quizQuestions[globalIndex].choices[2]);
  $(".btn4").text(quizQuestions[globalIndex].choices[3]);
}

// Function to check if correct answer has been selected
function checkCorrectAnswer(e) {
  var choice = e.target;
  var rightOrWrong = $("<h3>");
  rightOrWrong.addClass("result");

  $("h2").empty();

  if (choice.innerText == quizQuestions[globalIndex].correct) {
    rightOrWrong.text("Correct!");
    $("h2").append(rightOrWrong);
  } else {
    scoreTimer -= 10;
    rightOrWrong.text("Wrong!");
    $("h2").append(rightOrWrong);
  }
}
