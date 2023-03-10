
function handleMouseEnter(){
    this.classList.add("card--hovered")
    document.body.id = `${this.id}-hovered`
}
function handleMouseLeave(){
    this.classList.remove("card--hovered")
    document.body.id = ''
}
function addEventListinersToCard(){
    const cardElement = document.getElementsByClassName('card')
    for(let index = 0; index < cardElement.length; index++) {
      const card = cardElement[index]
      card.addEventListener("mouseenter", handleMouseEnter) 
      card.addEventListener("mouseleave", handleMouseLeave)
    }
}

document.addEventListener('DOMContentLoaded', addEventListinersToCard, false)
