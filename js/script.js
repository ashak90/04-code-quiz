//Variables from the HTML Code 
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const introSlide = document.getElementById("intro-slide");
const questionPromptEl = document.getElementById("question-prompt-text");
const answerButtonsDiv = document.getElementById("answer-buttons");
const questionsRight = document.getElementById("questions-right");
const totalQuestionsEl = document.getElementById("total-questions");
const timeRemainderEl = document.getElementById("time-remainder");
const gameOverModal = document.getElementById("game-over-mod-bg");
const feedBackDiv = document.getElementById("answer-feedback");

// Question Bank//
const quizQuestions = [
    {
        question: "What is 2+2?",
        answers: [
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "6", correct: false },

        ]
    },
    {
        question: 'What is 5+5?',
        answers: [
            { text: '12', correct: false },
            { text: '10', correct: true },
            { text: '16', correct: false },
            { text: '6', correct: false },

        ]
    }, {
        question: 'What is everything?',
        answers: [
            { text: '4', correct: true },
            { text: 'dddd5', correct: false },
            { text: '6dcdcdc', correct: false },
            { text: '6cddcd', correct: false },

        ]
    },

    {
        question: 'What is everything?',
        answers: [
            { text: '4', correct: true },
            { text: 'dddd5', correct: false },
            { text: '6dcdcdc', correct: false },
            { text: '6cddcd', correct: false },

        ]
    },

    {
        question: 'What is everything?',
        answers: [
            { text: '4', correct: true },
            { text: 'dddd5', correct: false },
            { text: '6dcdcdc', correct: false },
            { text: '6cddcd', correct: false },

        ]
    },

    {
        question: 'What is everything?',
        answers: [
            { text: '4', correct: true },
            { text: 'dddd5', correct: false },
            { text: '6dcdcdc', correct: false },
            { text: '6cddcd', correct: false },

        ]
    },
]
// Varibales that come up in the .js file//

var currentQuestionIndex = 0;
var totalCorrect = 0;
var questionsAttempted = 0;
const gameDuration = 25;
var gameDurationInSec = gameDurationInSec;
var gameDurationInMin = gameDurationInSec / 60;
var totalQuestions = quizQuestions.length;
var myInterval;


//Event Listeners//

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    nextQuestionSlide();
});

// Start Game

function startGame() {
    currentQuestionIndex = 0
    shuffleQuestions = quizQuestions.sort(() => Math.random() - .5)
    totalCorrect = 0
    questionsAttempted = 0
    gameDurationInSec = gameDuration
    resetAnswers();
    startButton.classList.add("hide");
    introSlide.classList.add("hide");
    answerButtonsDiv.classList.remove("hide");
    showNextQuestion();
    startTimer();
    scoreDisplay();
}

function startTimer() {
    var timer = document.createElement("div");
    timer.setAttribute("id", "timer-readout");
    document.body.appendChild(timer);

    timer.innerHTML = "Ready, Go!!";
    myInterval = setInterval(() => {
        gameDurationInSec--;

        let minuteHand = Math.floor(gameDurationInSec / 60);
        let secondHand = gameDurationInSec % 60;
        if (secondHand < 10) {
            secondHand = "0" + secondHand;
        }

        timer.innerHTML = "Time: " + `${minuteHand}:${secondHand}`;

        if (gameDurationInSec <= 0) {
            gameOver();
        }
    }, 1000);
}

function scoreDisplay() {
    var score = document.createElement("div");
    score.setAttribute("id", "score-readout");
    document.body.appendChild(score);

    score.innerHTML = "Score: ";
}
function nextQuestionSlide() {
    resetAnswers();
    showNextQuestion();
}

function resetAnswers() {
    while (answerButtonsDiv.firstChild) {
        answerButtonsDiv.removeChild(answerButtonsDiv.firstChild);
    }
    nextButton.classList.add("hide");
    feedBackDiv.classList.add ("hide")
}

function showNextQuestion(question) {
    questionPromptEl.innerText = quizQuestions[currentQuestionIndex].question;
    quizQuestions[currentQuestionIndex].answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.setAttribute("class", "btn btn-outline-info");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsDiv.appendChild(button);
    });
}

function selectAnswer(event) {
    questionsAttempted++;
    var selectedButton = event.target;
    feedBackDiv.classList.remove("hide")
    // var createDiv = document.createElement("div");
    // createDiv.setAttribute("id", "createDiv");
    // document.body.appendChild(createDiv);

    // Array.from(answerButtonsDiv.children).forEach((button) => {
    //     setStatusClass(button);
    // });
    if (selectedButton.dataset.correct) {
        totalCorrect++;
        feedBackDiv.innerHTML = "Correct! The answer is:  ";

    } else if (
        selectedButton.dataset.correct === false &&
        gameDurationInSec < 10
        
    ) {
        gameDurationInSec = 0;
        feedBackDiv.innerHTML = "Incorrect! The answer is:  ";

    } else {
        gameDurationInSec -= 10;
        feedBackDiv.innerHTML = "Incorrect! The answer is:  ";


    }


    // function setStatusClass(element, correct) {
    //     clearStatusClass(element);
    //     if (correct) {
    //         element.classList.add("btn-success");
    //         element.classList.remove("btn-outline-info");
    //     } else {
    //         element.classList.add("btn-danger");
    //         element.classList.remove("btn-outline-info");
    //     }
    // }

    // function clearStatusClass(element) {
    //     element.classList.remove("btn-success");
    //     element.classList.remove("btn-danger");
    // }

    if (questionsAttempted < totalQuestions) {
        nextButton.classList.remove("hide");
    } else {
        gameOver();
    }
}

function gameOver() {
    // nextButton.classList.add("hide");
    clearInterval(myInterval);
    gameOverModal.classList.add("modal-active");
    startButton.innerText = "Play Again";
    startButton.classList.remove("hide");
    questionsRight.innerHTML = totalCorrect;
    totalQuestionsEl.innerHTML = totalQuestions;

    if (gameDurationInSec >= 0) {
        timeRemainderEl.innerHTML = gameDurationInSec;
    } else timeRemainderEl.innerHTML = "0";
}