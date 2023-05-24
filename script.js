// DOM Manipulation variable declaration

var startBtn = $("#startButton");
var mainDisplay = $(".homePage");
var quizDisplay = $(".quizBlock");

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

// Add event listener to clear homepage on click of start button

startBtn.on("click", function () {
  startBtn.remove();

  mainDisplay.text(quizQuestions[0].question);

  var displayChoiceEl = $("<ul>");
  mainDisplay.append(displayChoiceEl);

  for (var i = 0; i < 4; i++) {
    var createChoiceEl = $("<li>");
    var createButtonEl = $("<button>");

    createButtonEl.addClass("quizButton");
    createButtonEl.text(quizQuestions[0].choices[i]);
    createChoiceEl.append(createButtonEl);
    displayChoiceEl.append(createChoiceEl);
  }

  quizDisplay.text("");
});
