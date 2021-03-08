const startButton = document.getElementById('start')
const questionContainerElement = document.getElementById('question-container')
var timerEl = document.getElementById('timer')



startButton.addEventListener ('click', startGame)

function startGame (){
    console.log ('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide') 
    var timeLeft = 5;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = 'Timer: '+timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = 'Timer: '+timeLeft + ' second remaining';
        timeLeft--;
       }
       // else {
    //     // Once `timeLeft` gets to 0, set `timerEl` to an empty string
    //     timerEl.textContent = '';
    //     // Use `clearInterval()` to stop the timer
    //     clearInterval(timeInterval);
    //     // Call the `displayMessage()` function
    //     displayMessage();
    //   }
    }, 1000);
  }
    



function selectAnswer(){

}