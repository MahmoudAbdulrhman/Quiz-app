var buttonEl = document.querySelector("#action-btn")
var getStart = document.querySelector(".startQuiz")
var qustionEl = document.querySelector("#question-container")

buttonEl.addEventListener('click', startQuiz)


function startQuiz () {    
getStart.classList.add('hide')
qustionEl.classList.remove('hide')
}
