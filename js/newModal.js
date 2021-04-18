const allModal=document.querySelectorAll('.modalLivraison,.modalMENUHidden,.modalLOCHidden,.imgSoupe,.imgIng,.RecSalade,.lastModal,.modalSalade1,.modalPetitDej,.PersSalade,.modalDessert,.modalWithBasket,.modalGeneral,.modalCommande')
const openModal=function(e){
    let newTab=[]
    e.preventDefault()
    const targetId=e.target.getAttribute("id")
    console.log(targetId)
    const targetTab= targetId.toString().split('_');
    console.log(targetTab)
    targetTab.forEach(a=>{
        document.getElementsByClassName(a)[0].addEventListener('click',stopPropagation)
        document.getElementsByClassName(a)[0].style.display=''

    })
    const allModalClassName=Array.from(allModal).map(x=>x.className)
    for (let i = 0; i < allModalClassName.length; i++) {
        if(targetTab.indexOf(allModalClassName[i])==-1)
        newTab.push(allModalClassName[i])
    }
    console.log(newTab)
    newTab.forEach(a=>{
        document.getElementsByClassName(a)[0].style.display='none'
    })
    document.querySelector('.modalCommande').addEventListener('click',closeModal)
    document.querySelector('.close-button').addEventListener('click',closeModal)
}
    
const stopPropagation= function(e){
    e.stopPropagation()
}
const closeModal = function(e){
    e.preventDefault()
    Array.from(allModal).forEach(a=>{
        a.style.display=''
    })
    document.querySelector('.modalCommande').style.display='none'
    document.querySelector('.modalCommande').setAttribute('aria-hidden',true)
    document.querySelector('.modalCommande').setAttribute('aria-modal',false)
    document.querySelector('.modalCommande').removeEventListener('click',closeModal)
document.querySelector('.close-button').removeEventListener("click",closeModal)
}
document.querySelectorAll('.Modal').forEach(a=>{
    a.addEventListener('click',openModal)
})

//Contact
document.querySelector('.contactTag').addEventListener('mouseover',function(e){
    document.querySelector('.contact').style.display='block'
})
document.querySelector('.contactTag').addEventListener('mouseout',function(e){
    document.querySelector('.contact').style.display=''
})
//Coloration
const color=function(e){
    if (this.checked===true)
    this.parentElement.style.border='8px solid green'
        else
    this.parentElement.style.border='8px solid white'
}
document.querySelectorAll('.PersSalade div ul li input[type=checkbox]').forEach(a=>{
    a.addEventListener('change',color)
})