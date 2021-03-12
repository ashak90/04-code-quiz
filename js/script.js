//Variables from the HTML Code 
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const introSlide = document.getElementById("intro-slide");
const questionPromptEl = document.getElementById("question-prompt-text");
const answerButtonsDiv = document.getElementById("answer-buttons");
const questionRight = document.getElementById("questions-right");
const totalQuestionsEl = document.getElementById("total-questions");
const timeRemainderEl = document.getElementById("time-remainder");
const gameOverModal = document.getElementById("game-over-mod-bg");

// Question Bank//
const quizQuestions = [
    {
        question: 'What is 2+2?',
        answer: [
            { text: '4', correct: true },
            { text: '5', correct: false },
            { text: '6', correct: false },
            { text: '6', correct: false },

        ]
    },
    {
        question: 'What is 5+5?',
        answer: [
            { text: '12', correct: false },
            { text: '10', correct: true },
            { text: '16', correct: false },
            { text: '6', correct: false },

        ]
    }, {
        question: 'What is everything?',
        answer: [
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
const gameDuration = 5;
var gameDurationInSec = gameDurationInSec;
var gameDurationInMin = gameDurationInSec / 60;
var totalQuestions = quizQuestions.length;
var myInterval;


//Event Listeners//

startButton.addEventListener("click", startGame);
// nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     nextQuestionSlide();
//   });

// Start Game

function startGame() {
    console.log('Started')
    currentQuestionsIndex = 0
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

        timer.innerHTML = "Time: "+`${minuteHand}:${secondHand}`;

        if (gameDurationInSec <= 0) {
            gameOver();
        }
    }, 1000);
}

function scoreDisplay (){
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
}

function showNextQuestion(question) {
    questionPromptEl.innerText=quizQuestions[currentQuestionIndex].question;
    quizQuestions[currentQuestionIndex].answer.forEach((answer) => {
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

function selectAnswer(event){
    questionsAttempted++;
    var selectedButton = event.target;
    Array.from(answerButtonsDiv.children).forEach((button) => {
        setStatusClasss(button, button.dataset.correct);
    });
    if (selectedButton.dataset.correct){
        totalCorrect++;
    } else if (
        selectedButton.dataset.correct === false &&
        gameDurationInSec < 10
    ) {
        gameDurationInSec = 0;
    } else {
        gameDurationInSec -= 10;
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add("btn-success");
      element.classList.remove("btn-outline-info");
    } else {
      element.classList.add("btn-danger");
      element.classList.remove("btn-outline-info");
    }
}

// if (questionsAttempted < totalQuestions) {
//     nextButton.classList.remove("hide");
//   } else {
//     gameOver();
//   }
  function gameOver() {
    nextButton.classList.add("hide");
    clearInterval(myInterval);
    // document.getElementById("timer-readout").classList.add("hide");
    gameOverModal.classList.add("modal-active");
    startButton.innerText = "Play Again";
    startButton.classList.remove("hide");
    questionsRight.innerHTML = totalCorrect;
    totalQuestionsEl.innerHTML = totalQuestions;
  
    if (gameDurationInSec >= 0) {
      timeRemainderEl.innerHTML = gameDurationInSec;
    } else timeRemainderEl.innerHTML = "0";
  }


// ==============My original javacript code=============
// const startButton = document.getElementById('start')
// const questionContainerElement = document.getElementById('question-container')
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')
// const finishElement = document.getElementById('finish')
// var timerEl = document.getElementById('timer')

// let currentQuestions = [];
// let acceptingAnswers = false;
// let score = 0;
// let availableQuestions = [];
// let shuffleQuestions, currentQuestionsIndex

// startButton.addEventListener('click', startGame)

// function startGame() {
//     console.log('Started')
//     startButton.classList.add('hide')
//     shuffleQuestions = questions.sort(() => Math.random() - .5)
//     currentQuestionsIndex = 0
//     questionContainerElement.classList.remove('hide')
//     setTime()
//     setNextQuestion()
// }

// function endGame (){
//     questionContainerElement.classList.add('hide')

//     finishElement.classList.remove ('hide')

// }

// function setTime () {
//     var timeLeft = 5;

//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function () {
//         // As long as the `timeLeft` is greater than 1
//         if (timeLeft > 1) {
//             // Set the `textContent` of `timerEl` to show the remaining seconds
//             timerEl.textContent = 'Timer: ' + timeLeft + ' seconds remaining';
//             // Decrement `timeLeft` by 1
//             timeLeft--;
//         } else if (timeLeft === 1) {
//             // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//             timerEl.textContent = 'Timer: ' + timeLeft + ' second remaining';
//             timeLeft--;
//         }
//         else if (timeLeft===0) {
//             // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//             timerEl.textContent = timeLeft + ' seconds remaining';
//             // Use `clearInterval()` to stop the timer
//             clearInterval(timeInterval);
//             // Call the `displayMessage()` function
//             endGame();
//           }
//     }, 1000);
// }
// function setNextQuestion() {
//     resetState()
//     showQuestion(shuffleQuestions[currentQuestionsIndex])

// }
// function showQuestion(question) {
//     questionElement.innerText = question.question
//     question.answer.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('btn')
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         // else {
//         //     return 'Wrong!'
//         // }
//         button.addEventListener('click', selectAnswer)
//         answerButtonsElement.appendChild(button)
//     })
// }

// function resetState() {
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild
//         (answerButtonsElement.firstChild)
//     }
// }
// function selectAnswer(e) {
//     const selectButton = e.target
//     const correct = selectButton.dataset.correct

// }

// const questions = [
//     {
//         question: 'What is 2+2?',
//         answer: [
//             { text: '4', correct: true },
//             { text: '5', correct: true },
//             { text: '6', correct: true },
//             { text: '6', correct: true },

//         ]
//     },
//     {
//         question: 'What is 67676?',
//         answer: [
//             { text: 'ndd', correct: true },
//             { text: 'dndndjd', correct: true },
//             { text: 'dmdndjd', correct: true },
//             { text: '6', correct: true },

//         ]
//     }, {
//         question: 'What is everything?',
//         answer: [
//             { text: '4', correct: true },
//             { text: 'dddd5', correct: true },
//             { text: '6dcdcdc', correct: true },
//             { text: '6cddcd', correct: true },

//         ]
//     },
// ]