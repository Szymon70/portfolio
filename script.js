const circle=document.querySelectorAll(".circle")
circle.forEach((el)=>{
    let dots=el.getAttribute("data-dots")
    let marked=el.getAttribute("data-marked")
    let percent=Math.floor(dots*marked/100)
    let points=""
    let rotate= 360/dots

    for (let i = 0; i < dots; i++) {
        points+=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
    el.innerHTML=points
    const pointsMarked=el.querySelectorAll(".points")
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
        
    }
})

