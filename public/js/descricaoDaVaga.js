const cards = document.querySelectorAll(".card")

cards.forEach(card =>{
    card.addEventListener("click", ()=>{
        console.log("click")
    })
})
