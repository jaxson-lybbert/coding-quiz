// DOM Manipulation variable declaration

var startBtn = $("#startButton");
var mainDisplay = $(".homePage");
var quizDisplay = $(".quizBlock");
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

// Add event listener to begin quiz
startBtn.on("click", startGame);

function startGame() {
  startBtn.remove();
  quizDisplay.text("");

  // Displays first question
  mainDisplay.text(quizQuestions[globalIndex].question);

  var displayChoiceEl = $("<ul>");
  mainDisplay.append(displayChoiceEl);

  for (var j = 0; j < 4; j++) {
    var createChoiceEl = $("<li>");
    var createButtonEl = $("<button>");

    createButtonEl.addClass("quizButton");
    createButtonEl.text(quizQuestions[globalIndex].choices[j]);
    createChoiceEl.append(createButtonEl);
    displayChoiceEl.append(createChoiceEl);
  }

  // Checks answer
  var buttonChoice = $(".quizButton");
  buttonChoice.on("click", checkCorrectAnswer);

  // Displays next questions --> Not working properly??
  buttonChoice.on("click", function () {
    globalIndex++;
    mainDisplay.text(quizQuestions[globalIndex].question);
    var displayChoiceEl = $("<ul>");
    mainDisplay.append(displayChoiceEl);
    for (var k = 0; k < 4; k++) {
      var createChoiceEl = $("<li>");
      var createButtonEl = $("<button>");

      createButtonEl.addClass("quizButton");
      createButtonEl.text(quizQuestions[globalIndex].choices[k]);
      createChoiceEl.append(createButtonEl);
      displayChoiceEl.append(createChoiceEl);
    }
  });
}

// Function to check if correct answer has been selected
function checkCorrectAnswer(e) {
  var choice = e.target;
  var rightOrWrong = $("<h3>");
  rightOrWrong.addClass("result");

  if (choice.innerText == quizQuestions[globalIndex].correct) {
    rightOrWrong.text("Correct!");
    $("h2").append(rightOrWrong);
  } else {
    scoreTimer -= 10;
    rightOrWrong.text("Wrong!");
    $("h2").append(rightOrWrong);
  }
}
