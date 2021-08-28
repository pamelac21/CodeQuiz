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
    question: "Which tag is used to insert a blank line?",
    answers: [
    "br",
    "hr",
    "h1",
    "p"],
    correct: "br",
    },
    {
    question: "In JavaScript, what element is used to store multiple values in a single variable?",
    answers: [
    "Strings",
    "Arrays", 
    "Functions", 
    "Boxes"],
    correct: "Arrays",
    },
    {
    question: "Which is NOT as example of and HTML event?",
    answers: [
    "An HTML button was clicked",
    "An HTML input field was changed",
    "An HTML web page has finished loading",
    "Your power goes out"],
    correct: "Your power goes out",
    },
    {
    question: "How many methods are there for extracting a part of a string?",
    answers: [
    "3",
    "6",
    "1",
    "12"],
    correct: "3",
    },
    {
    question: "Which of the following returns a random integer from 0 to 99?",
    answers: [
    "Math.floor(Math.random() * 101);",
    "Math.floor(Math.random() * 10) + 1;",
    "Math.floor(Math.random() * 100);",
    "Math.floor(Math.random() * 100) + 1;"],
    correct: "Math.floor(Math.random() * 100);",}
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
    
    //username.addEventListener('keyup', () => {
        //submitBtn.disabled = !username.value;
    //});
    
submitBtn.addEventListener('click', function saveHighScore(e) {
        console.log('save click')
        e.preventDefault();
        const currentScore = {
            score: currentScore,
            username: username
        }
        highScores.push(score)
        highScores.sort((a, b) => b.score - a.score)
        highScores.splice(3)

        localStorage.setItem('highScores', JSON.stringify(highScores))
        console.log(highScores)

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
