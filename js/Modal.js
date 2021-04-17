//ouverture modal
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
const RecSaladePag=document.querySelectorAll('.RecSaladePag');
const PersSaladePag=document.querySelectorAll('.PersSaladePag');
const modalPetitDejPag=document.querySelector('.modalPetitDejPag');
const dessertPag=document.querySelector('.dessertPag');
const lastPag=document.querySelectorAll('.lastModalPag');
//enchainement principale
const changeDisplay = function(e){
    modalGeneral.style.display='none'
    document.getElementsByClassName(e.target.getAttribute('id'))[0].style.display='block'
    allLayout=document.querySelectorAll('.RecSalade,.lastModal,.modalSalade1,.modalPetitDej,.PersSalade,.modalDessert')
allLayout.forEach(a=>{
    if(a.style.display=="block"){
        document.getElementsByClassName(a.className+'Pag')[0].style.display='block';
        document.getElementsByClassName(a.className+'Pag')[1].style.display='block';
    }
})
}
const raidos=document.querySelectorAll('.modalGeneral .flex ul li input')
raidos.forEach(a=>{
    a.addEventListener('change',changeDisplay)
})
//enchainement Salade
const changeDisplayy = function(e){
    e.preventDefault
    modalSalade1.style.display='none'
    document.getElementsByClassName(e.target.getAttribute('id'))[0].style.display='block'
    if(RecSalade.style.display=='block'){
    RecSaladePag[0].style.display='block'
    RecSaladePag[1].style.display='block'
}
if(PersSalade.style.display=='block'){
    PersSaladePag[0].style.display='block'
    PersSaladePag[1].style.display='block'
}
}
const raidos1=document.querySelectorAll('.modalSalade1 .flex ul li input')
raidos1.forEach(a=>{
    a.addEventListener('change',changeDisplayy)
})
//enchainement Envoyer
const envoyer =function(e){
    e.preventDefault()
    e.target.parentElement.parentElement.style.display='none'
    lastModal.style.display='block'
    lastPag[0].style.display='block'
    lastPag[1].style.display='block'
}
document.querySelectorAll('.envoyer').forEach(a=>{
a.addEventListener('click',envoyer)
})
//enchainement +repas
const more=function(e){
    e.preventDefault();
    document.querySelectorAll('input[type=checkbox],input[type=radio]').forEach(a=>{
        if(a.checked===true){
            a.checked=false
        }
    })
    e.target.parentElement.parentElement.style.display='none'
    modalGeneral.style.display='block';
allLayout.forEach(a=>{
    if(a.style.display=="none"){
        document.getElementsByClassName(a.className+'Pag')[0].style.display='none';
        document.getElementsByClassName(a.className+'Pag')[1].style.display='none';
    }
})
    

}
document.querySelectorAll('.more').forEach(a=>{
    a.addEventListener('click',more)
})





qq=document.querySelectorAll('input[type=checkbox],input[type=radio]')
//Pagination
allLayout=document.querySelectorAll('.RecSalade,.lastModal,.modalSalade1,.modalPetitDej,.PersSalade,.modalDessert')




//Coloration
qqq=document.querySelectorAll('.PersSalade div ul li input[type=checkbox]')
const color=function(e){
    if (this.checked===true)
    this.parentElement.style.border='8px solid green'
        else
    this.parentElement.style.border='8px solid white'
}

qqq.forEach(af=>{
    af.addEventListener('change',color)
})

document.querySelectorAll('.Pagination ul li').forEach(a=>{
    a.addEventListener('click',function(e){
        document.getElementsByClassName(this.className.slice(0,this.className.length-3))[0].style.display='block';
        this.classList.add("nouvelleClasse");    
    })
})