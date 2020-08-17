var buttonEl = document.querySelector("#action-btn")
var getStart = document.querySelector(".startQuiz")
var qustionEl = document.querySelector("#question-container")
var result = document.querySelector("#bored")
const displayQustion = document.getElementById ("question")
const displayAnswer =document.getElementById ("answer-buttons")
const scoreBored = document.getElementById("bored")

let randomQustionEl, qustionList

/*Random Qustion selection*/

buttonEl.addEventListener('click', startQuiz)
displayAnswer.addEventListener('click', () => {
    qustionList++
    nextQustion()
  })

  
/*Start the quiz*/
function startQuiz () {    
getStart.classList.add('hide')
randomQustionEl = questions.sort(() => Math.random() - .5)
qustionList = 0
qustionEl.classList.remove('hide')
nextQustion()

}


function nextQustion (){
    resetState()
    pickQustion(randomQustionEl[qustionList])
    

}

/*select the qustion*/
function pickQustion(question){
 displayQustion.innerText = question.question
 question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }

    button.addEventListener('click', selectAnswer)
    displayAnswer.appendChild(button)
  })
}
/*remove extra choices*/
function resetState() {
    while (displayAnswer.firstChild) {
        displayAnswer.removeChild(displayAnswer.firstChild)
    }
  }

  /*prossing the answer*/
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
console.log(selectAnswer);
    if (randomQustionEl.length > qustionList + 1) {
        displayAnswer.classList.remove('hide')
    } else if (randomQustionEl.length < qustionList +1) {
      scoreBored.classList.remove('hide-f')
      qustionEl.classList.add('hide')
      buttonEl.classList.remove('hide')
    }
  } 
/*qustion array*/

var questions = [
    {
      question: 'Why do JavaScript and Java have a similar name?',
      answers: [
        { text: ' JavaScripts syntax is loosely based on Java', correct: true },
        { text: 'JavaScript is a stripped-down version of Java', correct: false },
        { text: 'They both originated on the island of Java', correct: false },
        { text: 'None of the above', correct: false }
      ]
    },

    {
      question: 'When a user views a page containing a JavaScript program, which machine actually executes the script?',
      answers: [
        { text: 'A central machine deep within Netscapes corporate offices', correct: false },
        { text: 'The web server', correct: false },
        { text: 'The users machine running a web browser', correct: true },
        { text: 'None of the above', correct: false }
      ]
    },
    {
      question: '______ JavaScript is also called client-side JavaScript.',
      answers: [
        { text: 'Microsoft', correct: false },
        { text: 'Navigator', correct: true },
        { text: 'LiveWire', correct: false },
        { text: 'Native', correct: false }
      ]
    },
    {
      question: ' __________ JavaScript is also called server-side JavaScript.',
      answers: [
        { text: 'Microsoft', correct: false },
        { text: 'Navigator', correct: false },
        { text: 'LiveWire', correct: true },
        { text: 'Native', correct: false }
      ]
    },
    {
      question: 'What are variables used for in JavaScript programs?',
      answers: [
        { text: 'Storing numbers, dates, or other values', correct: true},
        { text: 'Varying randomly', correct: false },
        { text: 'Causing high-school algebra flashbacks', correct: false },
        { text: 'None of the above', correct: false }
      ]
    },
    {
      question: ' _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.',
      answers: [
        { text: 'Client-side', correct: true},
        { text: 'Server-side', correct: false },
        { text: 'Local', correct: false },
        { text: 'Native', correct: false }
      ]
    },
  {
    question: 'What should appear at the very end of your JavaScript? The <script LANGUAGE="JavaScript">tag',
    answers: [
      { text: 'The </script>', correct: true},
      { text: 'The <script>', correct: false },
      { text: 'The END statement', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'Which of the following cannot be done with client-side JavaScript?',
    answers: [
      { text: ' Validating a form', correct: false},
      { text: 'Sending a form`s contents by email', correct: false },
      { text: 'Storing the form`s contents to a database file on the server', correct: true },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: '______ tag is an extension to HTML that can enclose any number of JavaScript statements.',
    answers: [
      { text: ' <SCRIPT>', correct: true},
      { text: '<BODY>', correct: false },
      { text: '<HEAD>', correct: false },
      { text: '<TITLE>', correct: false }
    ]
  },
  {
    question: 'JavaScript entities start with _______ and end with _________.',
    answers: [
      { text: 'Semicolon, colon', correct: true},
      { text: 'Semicolon, ampersand', correct: false },
      { text: 'Ampersand, colon', correct: false },
      { text: 'Ampersand, semicolon', correct: false }
    ]
  },
  ]