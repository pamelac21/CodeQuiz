const h1 = document.querySelector('h1');
const questionEl = document.querySelector('.question');
const startBtn = document.querySelector('#start');
const choices = document.querySelector('.choices')
const hidden = document.querySelector('.quiz');
let timerEl = document.querySelector('.timer')
const feedbackEl = document.querySelector('.feedback')
//const h2 = document.querySelector('h2')
//const userData = document.querySelector('#userdata')
//const highscoreBtn = document.querySelector('#highscore')
//const submitBtn = document.querySelector('#submit')
//let placeholder = document.querySelector('#placeholder')

startBtn.addEventListener('click', startGame);
choices.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

let score = 0
let answers = []
let shuffle, currentQuestionIndex
let timeLeft = 60



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

        //timer
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

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    if (event.target.innerHTML === questions[currentQuestionIndex].correct) {
        score++
        feedbackEl.textContent = "Correct!"
        console.log(score)
    } else {
        timeLeft -=10
        feedbackEl.textContent = "Wrong"
        }
    }


//clear before next question && end quiz at end questions

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

    function clearStatusClass(element) {
        element.classList.remove
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

//GAME OVER
const h2 = document.querySelector('h2')
const userData = document.querySelector('#userdata')
const highscoreBtn = document.querySelector('#highscorebtn')
const highScoresList = document.getElementById("highScoresList")
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
//const NO_OF_HIGH_SCORES = 5;
//const HIGH_SCORES = 'highScores';
//const highScoreString = localStorage.getItem(HIGH_SCORES);
const username = document.getElementById('username');
const submitBtn = document.getElementById('submitBtn');
//const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const homeBtn = document.querySelector('#home')
const MAX_HIGH_SCORES = 3  

function endQuiz() {
    //hide timer+questions+answers
    document.querySelector('.quiz').setAttribute('style', 'display: none')
    document.querySelector('.question').setAttribute('style', 'display: none')
    document.querySelector('.choices').setAttribute('style', 'display: none')
    //show end screen
    document.querySelector('.end').setAttribute('style', 'display: block')
    //show final score
    document.querySelector('h2').textContent = 'Game Over! Your Score ' + score + '/' + questions.length
    
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
console.log(highScores)

    
    //username.addEventListener('keyup', () => {
        //submitBtn.disabled = !username.value;
    //});
    
    submitBtn.addEventListener('click', function saveHighScore(e) {
        console.log('save click')
        e.preventDefault();
        const score = {
            score: score,
            username: username
        }
        highScores.push(score)
        highScores.sort((a, b) => b.score - a.score)
        highScores.splice(3)

        localStorage.setItem('highScores', JSON.stringify(highScores))
        console.log(highScores)

        
    })


    highscoreBtn.addEventListener('click', () => {

highScoresList.innerHTML = highScores
.map(score => {
 return `<li id="highScores">${score.username}-${score.score}</li>`
})
.join('')
   
    })

   
homeBtn.addEventListener('click', function() {
    window.location.assign('/')
})
   
   
   
}
   
   
   
   
   
   
   
   

      
       
       
     
       
       
       
       
       
       
       
       
 /*      
       
        if(placeholder.value === "") {
            alert("Initials cannot be blank");
            return false;
        }else{
            var savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
                
            savedScores.push(score);
            localStorage.setItem("savedScores", JSON.stringify(savedScores));
            loadHighScore();
        }


//FINISHED QUIZ save score to local storage
//return score, txt box to enter name w/ submit button.


        let savedScore = function() {
          localStorage.setItem("score", JSON.stringify(score));
         }
         score = JSON.parse(score);





//next pg = Highscores list and buttons to go home OR Clear Highscores.
var loadHighScore = function() {
    savedScores = localStorage.getItem("score");
  
    if (!savedScore) {
      return;
    }
  
    savedScore = JSON.parse(savedScores);
  }
//make it for high scores top 2
    // loop through savedScore array
for (var i = 0; i < savedScore.length; i++) {
    // pass each task object into the `createScoreEl()` function
    createScoreEl(savedScore[i]);}}
    )}
*/