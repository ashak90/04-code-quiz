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
const gomCloseButton = document.getElementById("gom-close-button");
const viewScoreBoard = document.getElementById("view-scoreboard");
const scoreboardModal = document.getElementById("scoreboard-mod-bg");
const scoreModCloseButton = document.getElementById("scoreMod-close-button");
const scoreSubmitButton = document.getElementById("submit-btn");
const nameInputField = document.getElementById("name-input-field");
const scoreTable = document.getElementById("view-scores-here");
const clearButton = document.getElementById("clear-btn");

// Question Bank//
const quizQuestions = [
    {
        question: "Inside which html element should the javascript be?",
        answers: [
            { text: "<script>", correct: true },
            { text: "<paragraph>", correct: false },
            { text: "<header>", correct: false },
            { text: "<js>", correct: false },

        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Creative Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Colorful Style Sheets", correct: false },
            { text: "Computer Style Sheets", correct: false },
        ]
    }, {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            { text: "fcolor", correct: false },
            { text: "text-color", correct: false },
            { text: "color", correct: true },
            { text: "fgcolor", correct: false },  
        ]
    },

    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            { text: '<script name="xxx.js">', correct: false },
            { text: '<script src="xxx.js">', correct: true },
            { text: '<script ref="xxx.js">', correct: false },
            { text: '<script href="xxx.js">', correct: false },

        ]
    },

    {
        question: "How do you display hyperlinks without an underline?",
        answers: [
            { text: " a {underline:none;}", correct: false },
            { text: "a {text-decoration:no-underline;}", correct: false },
            { text: "a {text-decoration:none;}", correct: true },
            { text: "a {decoration:no-underline;}", correct: true },
        ]
    },

    {
        question: 'How do you call a function named "myFunction"?',
        answers: [
            { text: 'myFunction', correct: false },
            { text: 'call function myFunction()', correct: false },
            { text: 'call myFunction()', correct: false },
            { text: "myFunction()", correct: true },
        ]
    },

    {
        question: "How does a FOR loop start?",
        answers: [
            { text: "for (i = 0; i <= 5; i++)", correct: true },
            { text: "for (i = 0; i <= 5)", correct: false },
            { text: "for i = 1 to 5", correct: false },
            { text: "for (i <= 5; i++)", correct: false },
        ]
    },

    {
        question: "How do you select an element with id 'demo'?",
        answers: [
            { text: ".demp", correct: false },
            { text: "*demo", correct: false },
            { text: "#demo", correct: true },
            { text: "demo", correct: false },
        ]
    },

    {
        question: "How can you open a link in a new tab/browser window?",
        answers: [
            { text: ' <a href="url" new>', correct: false },
            { text: '<a href="url" target="_blank">', correct: true },
            { text: '<a href="url" target="new">', correct: false },
            { text: '<a href="url">', correct: false },
        ]
    },

    {
        question: "How can you make a bulleted list?",
        answers: [
            { text: "<list>", correct: false },
            { text: "<ol>", correct: false },
            { text: "<dl>", correct: false },
            { text: "<ul> ", correct: true },
        ]
    },

    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answers: [
            { text: "alt", correct: true },
            { text: "title", correct: false },
            { text: "longdesc", correct: false },
            { text: "src", correct: false },
        ] 
    },

    {
        question: "Which HTML element defines navigation links?",
        answers: [
            { text: "<navigate>", correct:false  },
            { text: "<navigation>", correct: false },
            { text: "<navigation-section>", correct: false },
            { text: "<nav>  ", correct: true },
        ]
    },

    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            { text: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', correct: false },
            { text: 'var colors = ["red", "green", "blue"]', correct: true },
            { text: 'var colors = "red", "green", "blue"', correct: false },
            { text: '  var colors = (1:"red", 2:"green", 3:"blue")', correct: false },
        ]  
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "onmouseclick", correct: false },
            { text: "onchange", correct: false },
            { text: "onclick", correct: true },
            { text: "onmouseover", correct: false },
        ] 
    },

    {
        question: "How do you declare a JavaScript variable?",
        answers: [
            { text: "var carName;", correct: true },
            { text: "v carName;", correct: false },
            { text: "variable carName;", correct: false },
            { text: "variable =c carName", correct: false },
        ]
    
    },

    
]
// Varibales that come up in the .js file//

var currentQuestionIndex = 0;
var totalCorrect = 0;
var questionsAttempted = 0;
const gameDuration = 180;
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
gomCloseButton.addEventListener("click", () => {
    gameOverModal.classList.remove("modal-active");
});
viewScoreBoard.addEventListener("click", viewScoreBoardFunc);

scoreModCloseButton.addEventListener("click", () => {
    scoreModCloseButton.classList.remove("modal-active");
    location.reload();
});

scoreSubmitButton.addEventListener("click", ()=> {
    gameOverModal.classList.remove("modal-active");
    scoreboardModal.classList.add("modal-active");
    submitScore();
});

nameInputField.addEventListener('keypress', function(e) {
    if (e.keyCode===13) {
        gameOverModal.classList.remove("modal-active");
        scoreboardModal.classList.add("modal-active");
        submitScore();
    }  
});

clearButton.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
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
  
    if (selectedButton.dataset.correct) {
        totalCorrect++;
        feedBackDiv.innerHTML = "Correct!" ;

    } else if (
        selectedButton.dataset.correct === false &&
        gameDurationInSec < 10
        
    ) {
        gameDurationInSec = 0;
        timer.innerHTML = 0
        feedBackDiv.innerHTML = "Incorrect!";

    } else {
        gameDurationInSec -= 10;
        feedBackDiv.innerHTML = "Incorrect!";


    }

    if (questionsAttempted < totalQuestions) {
        nextButton.classList.remove("hide");
    } else {
        gameOver();
    }
}


function gameOver() {
    clearInterval(myInterval);
    nextButton.classList.add("hide");

    gameOverModal.classList.add("modal-active");
    startButton.innerText = "Play Again";
    startButton.classList.remove("hide");
    questionsRight.innerHTML = totalCorrect;
    totalQuestionsEl.innerHTML = totalQuestions;

    if (gameDurationInSec >= 0) {
        timeRemainderEl.innerHTML = gameDurationInSec;
    } else timeRemainderEl.innerHTML = "0";
}

function submitScore () {
    event.preventDefault();
    const storedScores = localStorage.getItem("gameResultsString");
    let gameResultsArray;

    if (storedScores === null) {
        gameResultsArray = [];
    } else {
        gameResultsArray -JSON.parse(storedScores);
    }

    var thisGameResult = {
        name: nameInputField.value,
        score: totalCorrect*100,
        remainder: gameDurationInSec,
    };

    gameResultsArray.push(thisGameResult);

    localStorage.setItem("gamesReultsString",JSON.stringify(gameResultsArray))

    for (let i=0; i <gameResultsArray.length; i++) {
        var scoreTableRow = document.createElement("tr");

    var nameField = document.createElement("th");
    nameField.setAttribute("scope", "row");
    nameField.textContent = gameResultsArray[i].name;
    scoreTableRow.appendChild(nameField);

    var scoreField = document.createElement("td");
    scoreField.textContent = gameResultsArray[i].score;
    scoreTableRow.appendChild(scoreField);

    var timeField = document.createElement("td");
    timeField.textContent = gameResultsArray[i].remainder;
    scoreTableRow.appendChild(timeField);

    scoreTable.appendChild(scoreTableRow);
    };
}

function viewScoreBoardFunc (){
    scoreboardModal.classList.add("modal-active")
    const storedScores = localStorage.getItem("gameResultsString");
    let gameResultsArray;

    if (storedScores === null) {
        gameResultsArray = []; //if there is nothing in memory, blank array
      } else {
        gameResultsArray = JSON.parse(storedScores); //if there is memory, set the array equal to the unstringified scores
      }
    
      for (let i = 0; i < gameResultsArray.length; i++) {
        var scoreTableRow = document.createElement("tr");
    
        var nameField = document.createElement("th");
        nameField.setAttribute("scope", "row");
        nameField.textContent = gameResultsArray[i].name;
        scoreTableRow.appendChild(nameField);
    
        var percentField = document.createElement("td");
        percentField.textContent = gameResultsArray[i].score;
        scoreTableRow.appendChild(percentField);
    
        var timeField = document.createElement("td");
        timeField.textContent = gameResultsArray[i].remainder;
        scoreTableRow.appendChild(timeField);
    
        scoreTable.appendChild(scoreTableRow);
      }
}