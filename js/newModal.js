//toggleIt function
var nbr=0
const toggleIt=function(a){
    nbr=0
classTab=Array.from(a.parentElement.parentElement.children)
for (let k = 0; k < classTab.length; k++) {
        if(classTab[k].children[0].className=='checked')
        nbr=nbr+1  
    }
    console.log(nbr)
return nbr

}
//pagModal
let allPag=['modalGeneralPag','modalSalade1Pag','RecSaladePag','PersSaladePag','modalPetitDejPag','modalDessertPag','lastModalPag']
let tabPag=[]
const rampArray=function(e){
    console.log(this.id.substr(this.id.indexOf('et_')+3,this.length))
    tabPag.push(this.id.substr(this.id.indexOf('et_')+3,this.length)+'Pag')
    console.log(tabPag)
    pagModal(tabPag)
}
const pagModal=function(e){
    e.forEach(a=>{
        console.log(a)
        if(document.getElementsByClassName(a).length==2){
            document.getElementsByClassName(a)[0].style.display='block'
            document.getElementsByClassName(a)[1].style.display='block'
            console.log(document.getElementsByClassName(a)[0])  
            console.log(document.getElementsByClassName(a)[1])  
        }
            else if (document.getElementsByClassName(a).length==1){
            document.getElementsByClassName(a)[0].style.display=''
            console.log(document.getElementsByClassName(a)[0])    
        }
})
    /*allPag.forEach(j=>{
        Array.from(e).forEach(a=>{
            if(a==j){
            console.log(a)
            if(document.getElementsByClassName(a).length==2){
            document.getElementsByClassName(a)[0].style.display=''
            document.getElementsByClassName(a)[1].style.display=''
        }
            else if (document.getElementsByClassName(a).length==1){
            console.log(document.getElementsByClassName(a))
            document.getElementsByClassName(a)[0].style.display=''
            console.log(document.getElementsByClassName(a)[0])
        }
        }
        else{
            document.getElementsByClassName(a)[0].style.display='none'
            
        }
        })
    })*/
    
}
//more Click
Array.from(document.querySelectorAll('.more')).forEach(a=>{
    a.addEventListener('click',(function(e){
        tabPag=[]
        pagModal(tabPag)
    }))
})
//ToggleItRec function
const toggleItRec=function(a){
    nbr=0
classTab=Array.from(a.parentElement.children)
for (let k = 0; k < classTab.length; k++) {
        tabb=classTab[k].className.split(' ')[1]
        if(tabb=='checked'){
        console.log(tabb[1])
        nbr+=1}
    }
    console.log(nbr)
return nbr

}
//Begining
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
    a.addEventListener('click',rampArray)
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
document.querySelectorAll('.PersSalade .Ingrédints ul li input[type=checkbox],.PersSalade .Sauce ul li input[type=checkbox]').forEach(a=>{
    a.addEventListener('change',color)
})
//Checked Base
const toggleBase =function(e){
    if(toggleIt(this)==0)
    this.classList.toggle("checked")
    else if (toggleIt(this)==1 && this.className=='checked')
    this.classList.toggle("checked")
    else if (toggleIt(this)==1 && this.className!='checked'){
    console.log(this.parentElement.parentElement.children)
    Array.from(this.parentElement.parentElement.children).forEach(a=>{
        if(a.children[0].className=='checked'){
        a.style.border='8px solid white'
        tabb= a.children[0]
    }
    })
    console.log(tabb)
    tabb.classList.remove("checked")
    this.classList.toggle("checked")
}
    if(this.classList.contains("checked"))
    this.parentElement.style.border='8px solid green'
    else
    this.parentElement.style.border='8px solid white'
}
Array.from(document.querySelectorAll('.PersSalade .Bases ul li input[type=radio]'))
.forEach(a=>{
    a.addEventListener('click',toggleBase)
})
//Checked SaladeRec
const toggleSaladeRec =function(e){
    if(toggleItRec(this)==0)
    this.classList.toggle("checked")
    else if (toggleItRec(this)==1 && this.className.split(' ')[1]=='checked')
    this.classList.toggle("checked")

    else if (toggleItRec(this)==1 && this.className!='checked'){
        console.log(this.parentElement.children)
        Array.from(this.parentElement.children).forEach(a=>{
            if(a.className.split(' ')[1]=='checked'){
            a.style.border='5px solid gold'
            tabb= a
            tabb.classList.remove("checked")
            this.classList.toggle("checked")

        }
        })
        console.log(tabb)
    }

    if(this.classList.contains("checked"))
    this.style.border='5px solid green'
    else
    this.style.border='5px solid gold'
}
Array.from(document.querySelectorAll('.recChévreChaux,.recMéditerranéenne,.recWaldorf,.recNicoise')).forEach(a=>{
    a.addEventListener('click',toggleSaladeRec)
})
//Checked PetitDéj
const togglePetitDej =function(e){
    if(toggleIt(this)==0)
    this.classList.toggle("checked")
    else if (toggleIt(this)==1 && this.className=='checked')
    this.classList.toggle("checked")
    else if (toggleIt(this)==1 && this.className!='checked'){
    console.log(this.parentElement.parentElement.children)
    Array.from(this.parentElement.parentElement.children).forEach(a=>{
        if(a.children[0].className=='checked'){
        a.children[1].style.border='5px solid gold'
        tabb= a.children[0]
    }
    })
    console.log(tabb)
    tabb.classList.remove("checked")
    this.classList.toggle("checked")
}
    if(this.classList.contains("checked"))
    this.nextElementSibling.style.border='5px solid green'
    else
    this.nextElementSibling.style.border='5px solid gold'
}
Array.from(document.querySelectorAll('.modalPetitDej .flex ul li input[type=radio]')).forEach(a=>{
    a.addEventListener('click',togglePetitDej)
})
Array.from(document.querySelectorAll('input[type=radio]')).forEach(a=>{
    a.addEventListener('click',function(e){
        e.preventDefault()
    })
})
const prevent=function(e){
    e.preventDefault()
}
//PreventDefault
Array.from(document.querySelector('.btnss').children).forEach(a=>{
    a.addEventListener('click',prevent)
})

//Try
document.querySelector('.Pagination').addEventListener('click',function(e){
    e.stopPropagation()
})