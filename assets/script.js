var startButton = document.querySelector("#start_button");
var countdown = document.querySelector(".timer_count");
var question = document.querySelector(".question");
var answerbuttons = document.querySelector("#answer_buttons");
var quiz = document.querySelector(".quiz_instruction");
var answerButton1 = document.querySelector(".answer_button_1");
var answerButton2 = document.querySelector(".answer_button_2");
var answerButton3 = document.querySelector(".answer_button_3");
var answerButton4 = document.querySelector(".answer_button_4");


var timeLeft = 90;
var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    }

]

startButton.addEventListener("click", function () {
    question.textContent = questions[0].question;
    answerButton1.innerHTML = questions[0].answers[0]
    answerButton2.innerHTML = questions[0].answers[1]
    answerButton3.innerHTML = questions[0].answers[2]
    answerButton4.innerHTML = questions[0].answers[3]
    quiz.style = "display: none";
    startButton.style = "display: none";

    answerbuttons.style = "display:block"


    setInterval(() => {
        timeLeft--;
        countdown.textContent = timeLeft;

        if (timeLeft == 0) {
            clearInterval(timeInterval);
        }

    }, 1000);
});

