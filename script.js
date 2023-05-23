// Add event listener to clear homepage on click of start button

var startBtn = $("#startButton");
var mainDisplay = $(".homePage");

startBtn.on("click", function () {
  mainDisplay.attr("data-state", "hidden");
  startBtn.css("padding", "0px");
  mainDisplay.text("");
});

// Add array of objects for questions
