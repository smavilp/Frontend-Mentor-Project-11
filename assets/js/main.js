// ELEMENTS

const idAdvice = document.getElementById("id-advice")
const advice = document.getElementById("advice")
const btn = document.getElementById("btn")

// FUNCTIONS

const showAdvice = data => {
    idAdvice.textContent = `advice # ${data.slip.id }`
    advice.textContent = `${data.slip.advice }`
}

const showError = () => {
  idAdvice.textContent = ``
  advice.textContent = `Advice not available`
}

const fetchData = () => {
fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then( dataAdvice => showAdvice(dataAdvice) )
.catch(error => showError())
}

// EVENTS

document.addEventListener ("DOMContentLoaded", () => fetchData())
btn.addEventListener("click", () => fetchData())
