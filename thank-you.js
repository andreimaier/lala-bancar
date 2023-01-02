const showNumber = document.querySelector('.front__number')
const showNume = document.querySelector('.front__name')
const showMonth = document.querySelector('.front__month')
const showYear = document.querySelector('.front__year')
const showCvc = document.querySelector(".back__cvc")


function getText() {  
    showNume.textContent = JSON.parse(sessionStorage.getItem('numeStore'))
    showNumber.textContent = JSON.parse(sessionStorage.getItem('numberStore'))
    showMonth.textContent = JSON.parse(sessionStorage.getItem('monthStore'))
    showYear.textContent = JSON.parse(sessionStorage.getItem('yearStore'))
    showCvc.textContent = JSON.parse(sessionStorage.getItem('cvcStore'))
}
