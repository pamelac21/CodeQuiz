const h1 = document.querySelector('h1');
const questionEl = document.querySelector('.question');
const startBtn = document.querySelector('#start');
const choices = document.querySelector('.choices')
const hidden = document.querySelector('.quiz');
let timerEl = document.querySelector('.timer')
const feedbackEl = document.querySelector('.feedback')


startBtn.addEventListener('click', startGame);
choices.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

let score = 0
let answers = []
let shuffle, currentQuestionIndex



function startGame() {
    console.log('Started')

    //make quiz visible
    document.querySelector('.quiz').setAttribute('style', 'display: block')
    document.querySelector('.question').setAttribute('style', 'display: block')
    document.querySelector('.choices').setAttribute('style', 'display: block')

    //hide startup
    document.querySelector('#start').setAttribute('style', 'display: none')
    document.querySelector('h1').setAttribute('style', 'display: none')
    document.querySelector('p').setAttribute('style', 'display: none')

    
        var timeLeft = 60;
        let timeInterval = setInterval(function() {
            if (timeLeft > 1) {
                timerEl.textContent = 'Timer: ' +timeLeft + ' seconds'
                timeLeft-1
            } else if (timeLeft === 1) {
                timerEl.textContent = 'Timer: ' +timeLeft + ' second'
            } else if (timeLeft <= 0) {
                timerEl.textContent = ''
                clearInterval(timeInterval)
                endQuiz()
                
}
document.querySelector('.timer').value = 60 - timeLeft;
timeLeft -= 1;
}, 1000)


    

        shuffle = questions.sort(() => Math.random() - .5)
        currentQuestionIndex = 0
        setNextQuestion()
}


function setNextQuestion() {
    resetState() 
    showQuestion(shuffle[currentQuestionIndex])
    
}

function showQuestion(question) {
    questionEl.innerHTML = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer
        choices.append(button)
        button.classList.add('btn')  
        // attach click event listener to each choice
        button.onclick = userAnswer
    })

}

function userAnswer(event) {
    console.log(event.target)

    if (event.target.innerHTML === questions[currentQuestionIndex].correct) {
        score++
        feedbackEl.textContent = "Correct!"
    } else if (event.target.innerHTML !== questions[currentQuestionIndex].correct) 
    //console.log(userAnswer !== questions.correct)
        //timeLeft -= 10
        //timeLeft.textContent = timerEl
        feedbackEl.textContent = "Wrong"

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
    
}

function resetState() {
    clearStatusClass(document.body)
    while (choices.firstChild) {
        choices.removeChild
        (choices.firstChild)
    }
    if (currentQuestionIndex === questions.length) {
        endQuiz();
    }
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
            document.getElementById('correct').style.visibility = 'visible';
        } else {
            element.classList.add('wrong')
            document.querySelector('.wrong').setAttribute('style', 'display: block')
        

        }
    }
    function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')

}
   

const questions = [

    {
    question: "question1",
    answers: [
    "a",
    "b",
    "c",
    "d"],
    correct: "a",
    },
    {
    question: "question2",
    answers: [
    "e",
    "f", 
    "g", 
    "h"],
    correct: "e",
    },
    {
    question: "question3",
    answers: [
    "i",
    "j",
    "k",
    "l"],
    correct: "i",
    },
    {
    question: "question4",
    answers: [
    "m",
    "n",
    "o",
    "p"],
    correct: "m",
    },
    {
    question: "question5",
    answers: [
    "q",
    "r",
    "s",
    "t"],
    correct: "q",}
]      


function endQuiz() {
    //hide timer+questions+answers
    document.querySelector('.quiz').setAttribute('style', 'display: none')
    document.querySelector('.question').setAttribute('style', 'display: none')
    document.querySelector('.choices').setAttribute('style', 'display: none')
    //show final score
    //prompt('You got ' + score + '/' + questions.length)
    //make button for submit score


}

       



  /*//what to do when an answer is chosen by the user:: 
    document.querySelector('answers').onclick = function() {
      if(answer === correct, .correct is unhidden, score++)
      if(a === wrong, .wrong is unhidden, 10 seconds decremented from timer)
        currentQuestionIndex++ //load next question
        setNextQuestion()
    })*/



/*
           
         for (var i = 0; i < questions.length; i++) {
         // Compare answers
            if (
            (answer === correct)
         ) {
             // Increase score
             score++;
              // Alert the user
              alert('Correct!');
            } else {
           alert('Wrong!');
         }
         }
*/

//FINISHED QUIZ save score to local storage
//return score, txt box to enter name w/ submit button.

/*
        let saveScore = function() {
          localStorage.setItem("score", JSON.stringify(score));
         }
         score = JSON.parse(score);





//next pg = Highscores list and buttons to go home OR Clear Highscores.
var loadHighScore = function() {
    savedScores = localStorage.getItem("score");
  
    if (!savedScore) {
      return false;
    }
  
    savedAcore = JSON.parse(savedScore);
  }
//make it for high scores top 2
    // loop through savedScore array
for (var i = 0; i < savedScore.length; i++) {
    // pass each task object into the `createScoreEl()` function
    createScoreEl(savedScore[i]);
  }


//time counter in top right corner. make it DECREMENT-10 sec for each wrong answer and stop decrement at 0
*/ 

/*
if(shuffle.length = currentQuestionIndex +1) {
            currentQuestionIndex++
            setNextQuestion()
        } else {
            //hide quiz
            document.querySelector('.quiz').setAttribute('style', 'display: none')
            document.querySelector('.question').setAttribute('style', 'display: none')
            document.querySelector('.choices').setAttribute('style', 'display: none')
            //show end screen
            document.querySelector('#start').setAttribute('style', 'display: block')
            startBtn.innerHTML = 'Return Home'
        }
*/

//highscores button at top left corner??

//document.querySelector('.box').innerHTML += '<h1> hey </h1>' ~display specific text in element~


