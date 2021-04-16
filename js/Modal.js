let modal=null
const openModal = function(e){
    e.preventDefault()
    const target=document.getElementsByClassName(e.target.getAttribute("id"))
    target[0].style.display=null
    target[0].setAttribute('aria-hidden',false)
    target[0].setAttribute('aria-modal',true)
    modal=target[0]
    modal.addEventListener('click',closeModal)
    modal.querySelector('.close-button').addEventListener('click',closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click',stopPropagation)
}

const stopPropagation= function(e){
    e.stopPropagation()
}

const closeModal = function(e){
    if (modal==null) return
    e.preventDefault()
    modal.style.display='none'
    modal.setAttribute('aria-hidden',true)
    modal.setAttribute('aria-modal',false)
    modal.removeEventListener('click',closeModal)
    modal.querySelector('.close-button').removeEventListener("click",closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener("click",stopPropagation)
    modal=null
}
document.querySelectorAll('.Modal').forEach(a=>{
    a.addEventListener('click',openModal)
})
//Ecnhainement
const modalGeneral=document.querySelector('.modalGeneral');
const RecSalade=document.querySelector('.RecSalade');
const lastModal=document.querySelector('.lastModal');
const modalSalade1=document.querySelector('.modalSalade1');
const modalPetitDej=document.querySelector('.modalPetitDej');
const PersSalade=document.querySelector('.PersSalade');
const modalDessert=document.querySelector('.modalDessert');


const modalSaladePag=document.querySelector('.modalSaladePag');
const RecSaladePag=document.querySelector('.RecSaladePag');
const PersSaladePag=document.querySelector('.PersSaladePag');
const modalPetitDejPag=document.querySelector('.modalPetitDejPag');
const dessertPag=document.querySelector('.dessertPag');
const lastPag=document.querySelectorAll('.lastPag');

const changeDisplay = function(e){
    modalGeneral.style.display='none'
    document.getElementsByClassName(e.target.getAttribute('id'))[0].style.display='block'
}
const raidos=document.querySelectorAll('.modalGeneral .flex ul li input')
raidos.forEach(a=>{
    a.addEventListener('change',changeDisplay)
})

const changeDisplayy = function(e){
    e.preventDefault
    modalSalade1.style.display='none'
    document.getElementsByClassName(e.target.getAttribute('id'))[0].style.display='block'
}
const raidos1=document.querySelectorAll('.modalSalade1 .flex ul li input')
raidos1.forEach(a=>{
    a.addEventListener('change',changeDisplayy)
})
const envoyer =function(e){
    e.preventDefault()
    e.target.parentElement.parentElement.style.display='none'
    lastModal.style.display='block'
}
document.querySelectorAll('.envoyer').forEach(a=>{
a.addEventListener('click',envoyer)
})
const more=function(e){
    e.preventDefault();
    document.querySelectorAll('input[type=checkbox],input[type=radio]').forEach(a=>{
        if(a.checked===true){
            a.checked=false
        }
    })
    e.target.parentElement.parentElement.style.display='none'
    modalGeneral.style.display='block'
    
}
document.querySelectorAll('.more').forEach(a=>{
    a.addEventListener('click',more)
})

qq=document.querySelectorAll('input[type=checkbox],input[type=radio]')



qqq=document.querySelectorAll('.PersSalade div ul li input')

const color=function(e){
    if (this.checked===true)
    this.parentElement.style.border='8px solid green'
    else
        this.parentElement.style.border='8px solid white' 
}

qqq.forEach(af=>{
    af.addEventListener('change',color)
})