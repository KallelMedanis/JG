document.getElementById('chez_nous').addEventListener('click',e=>{
    console.log(e.target)
    if(e.target.nextElementSibling.nextElementSibling.classList.contains('checked')==false)
    e.target.classList.toggle('checked')
    console.log(e.target.className)
    if(e.target.classList.contains('checked'))
    e.target.nextElementSibling.style.backgroundColor='rgb(56, 197, 216)'
    else
    e.target.nextElementSibling.style.backgroundColor=''
})
document.getElementById('domicile').addEventListener('click',e=>{
    console.log(e.target)
    if(e.target.previousElementSibling.previousElementSibling.classList.contains('checked')==false)
    e.target.classList.toggle('checked')
    console.log(e.target.className)
    if(e.target.classList.contains('checked'))
    e.target.nextElementSibling.style.backgroundColor='red'
    else
    e.target.nextElementSibling.style.backgroundColor=''
})
