//change announce, question, answers for each page
const h1 = document.querySelector('h1');
const questionEl = document.querySelector('.question');
//const choices = Array.from(document.querySelectorAll('.choices'));
const startBtn = document.querySelector('#start');
const choices = document.querySelector('.choices')
const hidden = document.querySelector('.quiz');
const answerBtnEl  = document.querySelector('.btn');
//const  = document.querySelector('');

startBtn.addEventListener('click', startGame);
answerBtnEl.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let counter = 0
let availableQuestions = []
let answers = []
let shuffle, currentQuestionIndex


function startGame() {
    console.log('Started')
//ADD timer::start timer

    //make quiz visible
    document.querySelector('.quiz').setAttribute('style', 'display: block')
    document.querySelector('.question').setAttribute('style', 'display: block')
    document.querySelector('.choices').setAttribute('style', 'display: block')

    //hide startup
    document.querySelector('#start').setAttribute('style', 'display: none')
    document.querySelector('h1').setAttribute('style', 'display: none')
    document.querySelector('p').setAttribute('style', 'display: none')
        //document.querySelector('.box').innerHTML += '<h1> hey </h1>' ~display specific text in element~
        
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
        button.innerHTML = answer.answer
        //answerBtnEl.innerHTML = answer.a
        button.classList.add('btn')

            button.addEventListener('click', selectAnswer)
            answerBtnEl.appendChild(button)
    }
    )}



function resetState() {
    clearStatusClass(document.body)
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild
        (answerBtnEl.firstChild)
    }
}


function selectAnswer(e) {
    
    if (shuffle.length > currentQuestionIndex + 1) {
        currentQuestionIndex++
        setNextQuestion()
    } else {
        document.querySelector('#start').setAttribute('style', 'display: block')
        startBtn.innerHTML = 'Return Home'
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
        



       

let a = ''



const questions = [

    {
    question: "question1",
    answers: [
    {a: "a",
    a: "b",
    a: "c",
    a: "d"}],
    correct: 'a',
    },
    {
    question: "question2",
    answers: [{
    a: "e",
    a: "f", 
    a: "g", 
    a: "h"}],
    correct: 'f',
    },
    {
    question: "question3",
    answers: [{
    a: "i",
    a: "j",
    a: "k",
    a: "l"}],
    correct: "k",
    },
    {
    question: "question4",
    answers: [{
    a: "m",
    a: "n",
    a: "o",
    a: "p"}],
    correct: 'm',
    },
    {
    question: "question5",
    answers: [{
    a: "q",
    a: "r",
    a: "s",
    a: "t"}],
    correct: 's',}
]      



       



  /*//what to do when an answer is chosen by the user:: 
    document.querySelector('answers').onclick = function() {
      if(a === correct, .correct is unhidden, score++)
      if(a === wrong, .wrong is unhidden, 10 seconds decremented from timer)
        currentQuestionIndex++ //load next question
        setNextQuestion()
    })*/






         /*     // Loop over every question object
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
         }*/


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




//highscores button at top left corner??

startGame() */


