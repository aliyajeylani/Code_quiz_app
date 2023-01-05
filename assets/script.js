var startButton = document.querySelector("#start_button");
var countdown = document.querySelector(".timer_count");
var question = document.querySelector(".question");
var answerbuttons = document.querySelector("#answer_buttons");
var quiz = document.querySelector(".quiz_instruction");
var answerButton1 = document.querySelector(".answer_button_1");
var answerButton2 = document.querySelector(".answer_button_2");
var answerButton3 = document.querySelector(".answer_button_3");
var answerButton4 = document.querySelector(".answer_button_4");
var message = document.querySelector(".message");
var currentQuestion = 0;


var timeLeft = 90;
var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        correctAnswer: "3. Alerts"
    },
    {
        question: "The condition is an if/else statement is enclosed with _________.",
        answers: ["1. Quotes", "2. Curly brackets", "3. Parenthesis", "4. Square brackets"],
        correctAnswer: "Curly brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        answers: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"],
        correctAnswer: "Quotes"
    },
    {

        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. Console.log"],
        correctAnswer: "Console.log"
    }

]

startButton.addEventListener("click", function () {
    question.textContent = questions[currentQuestion].question;
    answerButton1.innerHTML = questions[currentQuestion].answers[0]
    answerButton2.innerHTML = questions[currentQuestion].answers[1]
    answerButton3.innerHTML = questions[currentQuestion].answers[2]
    answerButton4.innerHTML = questions[currentQuestion].answers[3]
    quiz.style = "display: none";
    startButton.style = "display: none";
    answerbuttons.style.display = "flex";

    setInterval(() => {
        timeLeft--;
        countdown.textContent = timeLeft;

        if (timeLeft == 0) {
            clearInterval(setInterval);
        }

    }, 1000);
});

answerbuttons.addEventListener("click", function (event) {

    var userChoice = event.target;
    console.log("Selection: " + userChoice.innerHTML);

    var question1Answer = userChoice.innerHTML;

    if (question1Answer !== questions[0].correctAnswer) {
        timeLeft -= 10;
    }

    currentQuestion += 1;

    question.textContent = questions[currentQuestion].question;
    answerButton1.innerHTML = questions[currentQuestion].answers[0]
    answerButton2.innerHTML = questions[currentQuestion].answers[1]
    answerButton3.innerHTML = questions[currentQuestion].answers[2]
    answerButton4.innerHTML = questions[currentQuestion].answers[3]

})





