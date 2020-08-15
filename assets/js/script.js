var buttonEl = document.querySelector("#action-btn")
var getStart = document.querySelector(".startQuiz")
var qustionEl = document.querySelector("#question-container")
// var answerEl = document.querySelector(".btn")
const displayQustion = document.getElementById ("question")
const displayAnswer =document.getElementById ("answer-buttons")

let randomQustionEl, qustionList

buttonEl.addEventListener('click', startQuiz)
displayAnswer.addEventListener('click', () => {
    qustionList++
    nextQustion()
  })


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

function resetState() {
    while (displayAnswer.firstChild) {
        displayAnswer.removeChild(displayAnswer.firstChild)
    }
  }

  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(displayAnswer.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (randomQustionEl.length > qustionList + 1) {
        displayAnswer.classList.remove('hide')
    } else {
      buttonEl.innerText = 'Restart'
      buttonEl.classList.remove('hide')
    }
  } 

  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }





var questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false },
        { text: '22', correct: false },
        { text: '22', correct: false }
      ]
    },

    {
      question: 'Who is the best YouTuber?',
      answers: [
        { text: 'Web Dev Simplified', correct: true },
        { text: 'Traversy Media', correct: true },
        { text: 'Dev Ed', correct: true },
        { text: 'Fun Fun Function', correct: true }
      ]
    },
    {
      question: 'Is web development fun?',
      answers: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: true },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'What is 4 * 2?',
      answers: [
        { text: '6', correct: false },
        { text: '8', correct: true }
      ]
    }
  ]