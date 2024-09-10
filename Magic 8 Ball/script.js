const input=document.querySelector('input')
const answer=document.querySelector('.answer')
const error=document.querySelector('.error')
const ball=document.querySelector('.ball-img')
const randomAnswer=['Tak','Nie','Jasne że tak','Oczywiście że nie','Możesz na to liczyć','Mało prawdopodobne','Na pewno','Zadaj pytanie ponownie']
let random
const answerShow = () => {
    random=randomAnswer[Math.floor(Math.random()*8)]
    answer.classList.add('question-area.answer')
    answer.innerHTML=`<span>Odpowiedź:</span> ${random}`
    ball.classList.remove('shake-animation')
}
const errorShow = () => {
    if(input.value==''){
        error.textContent='Musisz zadać pytanie'
        error.classList.add('.question-area.error')
        ball.classList.remove('shake-animation')
    }else if(!input.value.includes("?")){
        error.textContent='Pytanie musi być zakończone pytajnikiem(?)'
        ball.classList.remove('shake-animation')
    }
}
const errorClear = () => {
    if(input.value!='' && input.value.includes("?")){
        error.textContent=''
        answerShow() 
    }
}
const main = () => {
    if(input.value==''||!input.value.includes("?")){
        answer.textContent=''
        errorShow()
    }else if(input.value!=''||(input.value.includes("?"))){
        errorClear()
    }
}
const animation = () => {
    ball.classList.add('shake-animation')
    setTimeout(main,1000)
}

ball.addEventListener('click',animation)