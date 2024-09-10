const input=document.querySelector('.search')
const li=document.querySelectorAll('li')
// li.forEach(el=>console.log(el.innerHTML))

const search = () => {
    input.value.toLowerCase()
    for(let el of li){
        if(el.textContent.toLowerCase().indexOf(input.value)!==-1){
            // el.style.visibility="visible";
            el.style.display="block"
        }else{
            // el.style.visibility="hidden";
            el.style.display="none"
        }
    }
}

input.addEventListener('input',search)