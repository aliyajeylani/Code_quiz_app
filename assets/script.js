var startButton = document.querySelector("#start_button");
var timer = document.querySelector(".timer");
var countdown = document.querySelector(".timer_count");
var question = document.querySelector(".question");
var answerbuttons = document.querySelector("#answer_buttons");
var quiz = document.querySelector(".quiz_instruction");
var answerButton1 = document.querySelector(".answer_button_1");
var answerButton2 = document.querySelector(".answer_button_2");
var answerButton3 = document.querySelector(".answer_button_3");
var answerButton4 = document.querySelector(".answer_button_4");
var comment = document.createElement("h2");
var resultPage = document.querySelector("#result_page");
var score = document.querySelector(".score");
var submitButton = document.querySelector("#submit_button");
var input = document.querySelector("input");
var output = document.querySelector("#output");
var finalPage = document.querySelector("#final_page");
var highScoresPage = document.querySelector(".score_result");
var replay_button = document.querySelector("#replay");
var h2 = document.createElement("h2");
var mainEL = document.querySelector("main");
var finalScore;
var initials;
var currentQuestion = 0;


var timeLeft = 60;
var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        correctAnswer: "3. Alerts"
    },
    {
        question: "The condition is an if/else statement is enclosed with _________.",
        answers: ["1. Quotes", "2. Curly brackets", "3. Parenthesis", "4. Square brackets"],
        correctAnswer: "3. Parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        answers: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
        correctAnswer: "4. All of the above"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"],
        correctAnswer: "3. Quotes"
    },
    {

        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. Console.log"],
        correctAnswer: "4. Console.log"
    }

]

var clearTimer

function endTimer() {
    clearInterval(clearTimer)

}

function setTime() {
    timeLeft--;
    countdown.textContent = timeLeft;

    if (timeLeft <= 0) {
        timeLeft = 0;
        countdown.textContent = timeLeft;
        endTimer();
        scorePage();
    }
}


startButton.addEventListener("click", function () {
    question.textContent = questions[currentQuestion].question;
    answerButton1.innerHTML = questions[currentQuestion].answers[0]
    answerButton2.innerHTML = questions[currentQuestion].answers[1]
    answerButton3.innerHTML = questions[currentQuestion].answers[2]
    answerButton4.innerHTML = questions[currentQuestion].answers[3]
    quiz.style = "display: none";
    startButton.style = "display: none";
    answerbuttons.style.display = "flex";

    clearTimer = setInterval(setTime, 1000)
});

answerbuttons.addEventListener("click", function (event) {

    var userChoice = event.target;
    console.log("Selection: " + userChoice.innerHTML);

    var userAnswer = userChoice.innerHTML;

    if (currentQuestion === 4) {
        endTimer();
        return scorePage();

    } else if (userAnswer !== questions[currentQuestion].correctAnswer) {
        timeLeft -= 10;
        comment.textContent = "Wrong!";
        answerbuttons.append(comment);
    } else {
        comment.textContent = "Correct";
        answerbuttons.append(comment);
    }

    currentQuestion += 1;

    question.textContent = questions[currentQuestion].question;
    answerButton1.innerHTML = questions[currentQuestion].answers[0]
    answerButton2.innerHTML = questions[currentQuestion].answers[1]
    answerButton3.innerHTML = questions[currentQuestion].answers[2]
    answerButton4.innerHTML = questions[currentQuestion].answers[3]

})

function scorePage() {
    finalScore = timeLeft;

    question.style.display = "none";
    answerbuttons.style.display = "none";
    resultPage.style.display = "block";

    score.textContent = "Your final score is " + finalScore + ".";

}

function saveUserInput() {

    localStorage.setItem("userInput", input.value);

}

function showFinalPage() {


    resultPage.style.display = "none";
    timer.style.display = "none";
    finalPage.style.display = "block";

    initials = localStorage.getItem("userInput");

    output.innerHTML += initials + " - " + finalScore;


}

input.addEventListener("keyup", saveUserInput);

submitButton.addEventListener("click", function (event) {

    event.preventDefault();

    if (input.value === "") {

        alert("Please enter your initials");

        return;

    } else {
        showFinalPage();
    }
})

highScoresPage.addEventListener("click", function (event) {

    question.style.display = "none";
    quiz.style.display = "none";
    startButton.style.display = "none";
    resultPage.style.display = "none";
    timer.style.display = "none";
    finalPage.style.display = "none";


    h2.innerHTML += initials + " - " + finalScore;
    mainEL.append(h2);

})

// replay_button.addEventListener("click", rePlay()) {


// })

// function replay() {
//     question.style.display = "block";
//     quiz.style.display = "block";
//     startButton.style.display = "block";
//     timer.style.display = "block";

// }

