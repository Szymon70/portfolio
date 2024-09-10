const inputPrice=document.querySelector('#price')
const inputPeople=document.querySelector('#people')
const selectTip=document.querySelector('#tip')
const button=document.querySelector('.count')
const pError=document.querySelector('.error')
const span=document.querySelector('.cost')
const pCost=document.querySelector('.cost-info')

const check = () => {
    if(inputPrice.value==''||inputPeople.value==''||selectTip.value==''){
        pError.textContent='Uzupełnij wszystkie pola'
    }else{
        pError.textContent=''
        calculate()
    }
}




const calculate = () => {
    let sum=0
    const price=parseFloat(inputPrice.value)
    const people=parseInt(inputPeople.value)
    const tip=parseFloat(selectTip.value)
    sum=(price+(price*tip))/people
    sum=sum.toFixed(2)
    span.textContent=sum
    pCost.style.display='block'

}
button.addEventListener('click',check)