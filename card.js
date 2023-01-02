const nume = document.querySelector("#name")
const number = document.querySelector("#card-no")
const month = document.querySelector("#month")
const year = document.querySelector('#year')
const cvc = document.querySelector("#cvc")

const showNumber = document.querySelector('.front__number')
const showNume = document.querySelector('.front__name')
const showMonth = document.querySelector('.front__month')
const showYear = document.querySelector('.front__year')
const showCvc = document.querySelector(".back__cvc")

const errorDate = document.querySelector('.error__date')
const errorCvc = document.querySelector('.error__cvc')
const errorNume = document.querySelector('.error__nume')
const errorNumber = document.querySelector('.error__nr')




nume.addEventListener("input", () => {
    if (/^[a-z .'-]+$/i.test(nume.value)) {
        showNume.textContent = `${nume.value}`.toLocaleUpperCase()
        errorNume.classList.remove('error__active') 
        errorNume.classList.add('error__inactive') 
        nume.classList.add('input__correct')
        nume.classList.remove('input__error')   
    } 
})
nume.addEventListener('focusin', () => {
    nume.classList.add('input__correct')
})  
nume.addEventListener("focusout", () => {
    if (nume.value.length == 0) {
        errorNume.classList.add('error__active') 
        errorNume.classList.remove('error__inactive') 
        nume.classList.remove('input__correct')
        nume.classList.add('input__error')
        errorNume.textContent = "Can\'t be blank"  
    } else if(!/^[a-z .'-]+$/i.test(nume.value)) {
        errorNume.classList.add('error__active') 
        errorNume.classList.remove('error__inactive') 
        nume.classList.remove('input__correct')
        nume.classList.add('input__error')
        errorNume.textContent = "Wrong value"  
    } else {
        errorNume.classList.remove('error__active') 
        errorNume.classList.add('error__inactive') 
        nume.classList.add('input__correct')
        nume.classList.remove('input__error')
    } 
})




number.addEventListener("input", () => {
    const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
  if (index !== 0 && !(index % 4)) seed += " ";
  return seed + next;
}, ""); 
    number.value = formatNumber(number.value.replaceAll(" ", ""));
    if (/^(\d{4}\s\d{4}\s\d{4}\s\d{4})+$/.test(number.value)) {
        showNumber.textContent = `${number.value}`
        errorNumber.classList.remove('error__active') 
        errorNumber.classList.add('error__inactive') 
        number.classList.add('input__correct')
        number.classList.remove('input__error') 
    }
        
})
number.addEventListener('focusin', () => {
    number.classList.add('input__correct')
})  
number.addEventListener("focusout", () => {
    if (number.value.length == 0) {
        errorNumber.classList.add('error__active') 
        errorNumber.classList.remove('error__inactive') 
        number.classList.remove('input__correct')
        number.classList.add('input__error')
        errorNumber.textContent = "Can\'t be blank"  
    } else if(!/^(\d+\s\d+)+$/.test(number.value) || number.value.length < 19) {
        errorNumber.classList.add('error__active') 
        errorNumber.classList.remove('error__inactive') 
        number.classList.remove('input__correct')
        number.classList.add('input__error')
        errorNumber.textContent = "Wrong value"  
    } else {
        errorNumber.classList.remove('error__active') 
        errorNumber.classList.add('error__inactive') 
        number.classList.add('input__correct')
        number.classList.remove('input__error')
    } 
})




month.addEventListener("input", () => {
    if (month.value.length == 2) {
    if (month.value < 13 && month.value > 0)  {
        showMonth.textContent = `${month.value} `
        month.classList.add('input__correct')
        month.classList.remove('input__error'); 
    } else if (month.value.length == 0) {
        errorDate.classList.add('error__active')
        errorDate.classList.remove('error__inactive')
        errorDate.textContent = "Can\'t be blank"
    } else {
        month.classList.remove('input__correct')
        month.classList.add('input__error')
        errorDate.classList.add('error__active')
        errorDate.classList.remove('error__inactive')
        errorDate.textContent = "Wrong value"
    }
}})
month.addEventListener('focusin', () => {
    month.classList.add('input__correct')
})  
month.addEventListener("focusout", () => {
    if (month.value < 13 && month.value > 0) {
        errorDate.classList.remove('error__active') 
        errorDate.classList.add('error__inactive') 
        month.classList.add('input__correct')
        month.classList.remove('input__error')     
    } else if (month.value.length == 0) {
        errorDate.classList.add('error__active') 
        month.classList.remove('input__correct')
        month.classList.add('input__error')
        errorDate.textContent = "Can\'t be blank"  
    } else {
        errorDate.classList.add('error__active') 
        month.classList.remove('input__correct')
        month.classList.add('input__error')
        errorDate.textContent = "Wrong value"
    }  
})




year.addEventListener("input", () => { 
    if (year.value.length == 2) {
    if (year.value < 40 && year.value > 22)  {
        showYear.textContent = `${year.value}`
        year.classList.add('input__correct')
        year.classList.remove('input__error') 
    } else if (year.value.length == 0) {
        year.classList.remove('input__correct')
        year.classList.add('input__error') 
        errorDate.classList.add('error__active')
        errorDate.classList.remove('error__inactive')
        errorDate.textContent = "Can\'t be blank"
    } else {
        year.classList.remove('input__correct')
        year.classList.add('input__error')
        errorDate.classList.add('error__active')
        errorDate.classList.remove('error__inactive')
        errorDate.textContent = "Wrong value"      
    }
}}) 
year.addEventListener('focusin', () => {
    year.classList.add('input__correct')
})  
year.addEventListener("focusout", () => {
    if (year.value < 40 && year.value > 22) {
        errorDate.classList.remove('error__active') 
        errorDate.classList.add('error__inactive') 
        year.classList.add('input__correct')
        year.classList.remove('input__error') 
    } else if (year.value.length == 0) {
        errorDate.classList.add('error__active') 
        year.classList.remove('input__correct')
        year.classList.add('input__error')
        errorDate.textContent = "Can\'t be blank" 
        
    } else {
        errorDate.classList.add('error__active') 
        errorDate.textContent = "Wrong value"
        year.classList.remove('input__correct')
        year.classList.add('input__error')
        
    } 
})




cvc.addEventListener("input", () => {
    if (/^\d+$/.test(cvc.value)) {
        showCvc.textContent = `${cvc.value}`
        errorCvc.classList.remove('error__active') 
        errorCvc.classList.add('error__inactive') 
        cvc.classList.add('input__correct')
        cvc.classList.remove('input__error') 
    }
})
cvc.addEventListener('focusin', () => {
    cvc.classList.add('input__correct')
})  
cvc.addEventListener("focusout", () => {
    if (cvc.value.length == 0) {
        errorCvc.classList.add('error__active') 
        errorCvc.classList.remove('error__inactive') 
        cvc.classList.remove('input__correct')
        cvc.classList.add('input__error')
        errorCvc.textContent = "Can\'t be blank"  
        
    } else if(!/^\d+$/.test(cvc.value)) {
        errorCvc.classList.add('error__active') 
        errorCvc.classList.remove('error__inactive') 
        cvc.classList.remove('input__correct')
        cvc.classList.add('input__error')
        errorCvc.textContent = "Wrong value"  
        
    } else {
        errorCvc.classList.remove('error__active') 
        errorCvc.classList.add('error__inactive') 
        cvc.classList.add('input__correct')
        cvc.classList.remove('input__error')
    } 
})


    



function showText() {
    sessionStorage.setItem('numeStore', JSON.stringify(nume.value))
    sessionStorage.setItem('numberStore', JSON.stringify(number.value))
    sessionStorage.setItem('monthStore', JSON.stringify(month.value))
    sessionStorage.setItem('yearStore', JSON.stringify(year.value))
    sessionStorage.setItem('cvcStore', JSON.stringify(cvc.value))
}



