const startButton = document.getElementById('start')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var timerEl = document.getElementById('timer')

let currentQuestions = [];
let acceptingAnswers = false;
let score = 0;
let availableQuestions = [];
let shuffleQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setTime()
    setNextQuestion()
}

function setTime () {
    var timeLeft = 5;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = 'Timer: ' + timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = 'Timer: ' + timeLeft + ' second remaining';
            timeLeft--;
        }
        else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            onlyDisplaySection("#finish");
          }
    }, 1000);
}
function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionsIndex])

}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        // else {
        //     return 'Wrong!'
        // }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct

}

const questions = [
    {
        question: 'What is 2+2?',
        answer: [
            { text: '4', correct: true },
            { text: '5', correct: true },
            { text: '6', correct: true },
            { text: '6', correct: true },

        ]
    },
    {
        question: 'What is 67676?',
        answer: [
            { text: 'ndd', correct: true },
            { text: 'dndndjd', correct: true },
            { text: 'dmdndjd', correct: true },
            { text: '6', correct: true },

        ]
    }, {
        question: 'What is everything?',
        answer: [
            { text: '4', correct: true },
            { text: 'dddd5', correct: true },
            { text: '6dcdcdc', correct: true },
            { text: '6cddcd', correct: true },

        ]
    },
]