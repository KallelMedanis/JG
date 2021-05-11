import { render } from "./render.js";
const livreur=document.querySelector('.livreur')
document.getElementById('chez_nous').addEventListener('click',e=>{
    console.log(e.target)
    if(e.target.nextElementSibling.nextElementSibling.classList.contains('checked')==false)
    e.target.classList.toggle('checked')
    console.log(e.target.className)
    if(e.target.classList.contains('checked')){
    e.target.nextElementSibling.style.backgroundColor='rgb(56, 197, 216)'
    livreur.innerHTML=render.renderChezNous()
    }
    else
    e.target.nextElementSibling.style.backgroundColor=''
})
document.getElementById('domicile').addEventListener('click',e=>{
    console.log(e.target)
    if(e.target.previousElementSibling.previousElementSibling.classList.contains('checked')==false)
    e.target.classList.toggle('checked')
    console.log(e.target.className)
    if(e.target.classList.contains('checked')){
    e.target.nextElementSibling.style.backgroundColor='red'
    livreur.innerHTML=render.renderChezVous()
    const ulCompagnies=Array.from(document.querySelectorAll('.CompagnieDeLivraison ul li'))
ulCompagnies.forEach(a=>{
    a.addEventListener('click',e=>{
        ulCompagnies.forEach(b=>{
            b.style.border='none'
            b.classList.remove('checked')
            e.currentTarget.classList.add('checked')
            e.currentTarget.style.border='4px solid red'
        })
    })
})
    }
    else
    e.target.nextElementSibling.style.backgroundColor=''
    
})
