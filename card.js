const nume = document.querySelector("#name")
const cardNo = document.querySelector("#card-no")
const expiry = document.querySelector("#expiry")
const cvc = document.querySelector("#cvc")

const showCard = document.querySelector('.card-no')
const showNume = document.querySelector('.name')
const showExpiry = document.querySelector('.expiry')
const showCvc = document.querySelector(".cvc")






nume.addEventListener("input", () => {
    if (/^[a-z .'-]+$/i.test(nume.value)) {
        showNume.textContent = `${nume.value}`.toLocaleUpperCase()
    }})
cardNo.addEventListener("input", () => cardNo.value = formatNumber(cardNo.value.replaceAll(" ", "")));

const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
  if (index !== 0 && !(index % 4)) seed += " ";
  return seed + next;
}, ""); 
cardNo.addEventListener("input", () => {
    /* if (/^[0-9]+$/.test(cardNo.value)) { */ 
    /* tests for digits */
        showCard.textContent = cardNo.value;
    /* `${cardNo.value.replace(/(.{4})/g, '$1 ')}` */
    /* formats input */
    }
) 

expiry.addEventListener("input", () => {
    showExpiry.textContent = expiry.value
})

cvc.addEventListener("input", () => {
    if (/\d+/.test(cvc.value)) {
        showCvc.textContent = `${cvc.value}`.trim()
    }
})


