document.querySelector('.Pagination ul li.modalGeneralPag').addEventListener('click',e=>{
    Array.from(document.querySelectorAll('.Bases input[type=radio]')).forEach(a=>{
        a.className=''
        a.parentElement.style.border=''
    })
    Array.from(document.querySelectorAll('.modalPetitDej input[type=radio]')).forEach(a=>{
        a.className=''
        a.nextElementSibling.style.border=''
    })
    
    Array.from(document.querySelectorAll('input[type=checkbox]')).forEach(a=>{
        a.checked=false
        a.parentElement.style.border=''
    })
    Array.from(document.querySelectorAll('.nosSaladeRec div')).forEach(a=>{
        a.classList.remove("checked")
        a.style.border=''
    })
})
document.querySelector('.Pagination ul li.modalSalade1Pag').addEventListener('click',e=>{
    Array.from(document.querySelectorAll('.Bases input[type=radio]')).forEach(a=>{
        a.className=''
        a.parentElement.style.border=''
    })
    Array.from(document.querySelectorAll('.modalPetitDej input[type=radio]')).forEach(a=>{
        a.className=''
        a.nextElementSibling.style.border=''
    })
    
    Array.from(document.querySelectorAll('input[type=checkbox]')).forEach(a=>{
        a.checked=false
        a.parentElement.style.border=''
    })
    Array.from(document.querySelectorAll('.nosSaladeRec div')).forEach(a=>{
        a.classList.remove("checked")
        a.style.border=''
    })
})