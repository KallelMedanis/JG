import { render } from "./render.js";
const livreur=document.querySelector('.livreur')
document.getElementById('chez_nous').addEventListener('click',e=>{
    console.log(e.target)
    /*if(e.target.nextElementSibling.nextElementSibling.classList.contains('checked')==false)
    e.target.classList.toggle('checked')
    console.log(e.target.className)
    if(e.target.classList.contains('checked')){
    e.target.nextElementSibling.style.backgroundColor='rgb(56, 197, 216)'
    livreur.innerHTML=render.renderChezNous()
    }
    else
    e.target.nextElementSibling.style.backgroundColor=''*/
    e.target.classList.remove('checked')
    e.target.nextElementSibling.nextElementSibling.classList.remove('checked')
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor='white'
    e.target.nextElementSibling.style.backgroundColor='white'

    e.target.classList.toggle('checked')
    if(e.target.classList.contains('checked')){
        e.target.nextElementSibling.style.backgroundColor='rgb(56, 197, 216)'
        livreur.innerHTML=render.renderChezNous()
        }
        else
        e.target.nextElementSibling.style.backgroundColor=''
})
document.getElementById('domicile').addEventListener('click',e=>{
    /*console.log(e.target)
    if(e.target.previousElementSibling.previousElementSibling.classList.contains('checked')==false)
    e.target.classList.toggle('checked')
    console.log(e.target.className)*/
    e.target.classList.remove('checked')
    e.target.previousElementSibling.previousElementSibling.classList.remove('checked')
    e.target.classList.toggle('checked')
    e.target.previousElementSibling.style.backgroundColor='white'
    e.target.nextElementSibling.style.backgroundColor='white'
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
const inputsLocation=Array.from(document.querySelectorAll('.lastLivr input'))
const ajouterGPSorPersonnelData=document.querySelector('.ajouterGPSorPersonnelData')
document.querySelector('.vous_localiser').addEventListener('click',e=>{
    inputsLocation.forEach(a=>{
        a.classList.remove('checked')
        a.style.backgroundColor=''
    })
    e.target.classList.add('checked')
    e.target.style.backgroundColor='red'
    ajouterGPSorPersonnelData.innerHTML=render.useGPS()

let routeDonnée
let klmDonnée
let aproxDonnée
let locationBoolean
let positionInData
const localiser=document.querySelector('.localisationGPS')
const locationInput=Array.from(document.querySelectorAll('.APILocalisation input'))
const commanderBtn=Array.from(document.querySelectorAll('.localisationGPS'))
const commanderLocation=document.querySelector('.modalLivraison .Modal')
const verify=e=>{
    console.log('d5ala2')
    locationBoolean=false
    console.log(e.target.className)
    switch (e.target.className){
        case 'localRouteBtn':
            let patternRoute=/Sfax Route:([a-zA-Z]+)/
            patternRoute.test(e.target.value) ? routeDonnée='Donnée validée' : routeDonnée='Donnée non validée (ex:Sfax Route:Gremda)';locationBoolean=false;
            e.target.nextElementSibling.innerHTML=routeDonnée
            break;
        case 'localKlmBtn':
            let patternKlm=/Klm:([1-9,.]+)/
            patternKlm.test(e.target.value) ? klmDonnée='Donnée validée' : klmDonnée='Donnée non validée (ex:klm:4)';locationBoolean=false;
            e.target.nextElementSibling.innerHTML=klmDonnée
            break;
        case 'localAproxBtn':
            let patternAppr=/A proximité de:([a-zA-Z]+)/
            patternAppr.test(e.target.value) ? aproxDonnée='Donnée validée' : aproxDonnée='Donnée non validée (ex:A proximité de:Anas+)';locationBoolean=false;   
            e.target.nextElementSibling.innerHTML=aproxDonnée
            break;
    }
    if(routeDonnée === klmDonnée && aproxDonnée==='Donnée validée'){
    commanderBtn[0].nextElementSibling.nextElementSibling.innerHTML=' '
    locationBoolean=true
}
    else
    locationBoolean=false
    console.log(routeDonnée + klmDonnée + aproxDonnée)
    console.log(locationBoolean)
    if (locationBoolean){
    positionInData=document.querySelector('.valueLocation').innerHTML
    console.log(positionInData)
    commanderLocation.style.border='2px solid gold'
    document.querySelector('.valueLocation').innerHTML=`On va vous livrer a route ${document.querySelector('.localRouteBtn').value.split(':')[1]} klm${document.querySelector('.localKlmBtn').value.split(':')[1]} a proximité de ${document.querySelector('.localAproxBtn').value.split(':')[1]}  `
    }
    else{
    document.querySelector('.valueLocation').innerHTML=''
    commanderLocation.style.border=''
    }
}
//
const ShowInLocation=(lat,lng)=>{
    commanderBtn.forEach(a=>{
        a.nextElementSibling.nextElementSibling.innerHTML='Vous etes localisé<br>On va vous livrer a ladresse détécté<br>'
                })
    document.querySelector('.valueLocation').innerHTML=`<h6 class='FermerWase'>X</h6><iframe src="https://embed.waze.com/iframe?zoom=15&lat=${lat}&lon=${lng}"
    width="300" height="400"></iframe>`
    document.querySelector('.valueLocation').style.padding='0'
    document.querySelector('.FermerWase').addEventListener('click',e=>{
        document.querySelector('.valueLocation').innerHTML=''
        document.querySelector('.valueLocation').style.padding='10px'
        
    })
    locationBoolean=true
    commanderLocation.style.border='2px solid gold'
}
const success=pos=>{
    let lat= pos.coords.latitude
    let lng= pos.coords.longitude
    positionInData='lat :' + lat + ' lng : '+lng
    console.log(positionInData)
    ShowInLocation(lat,lng)
}
const error=err=>{
    localiser.nextElementSibling.innerHTML='Erreur au niveau de localisation'
}
const getPosition=e=>{
    navigator.geolocation.getCurrentPosition(success, error);
}
Array.from(commanderBtn).forEach(b=>{
b.addEventListener('click',getPosition)
})
locationInput.forEach(a=>{
    a.addEventListener('input',verify)
})

})
document.querySelector('.utiliserMap').addEventListener('click',e=>{
    inputsLocation.forEach(a=>{
        a.classList.remove('checked')
        a.style.backgroundColor=''
    })
    e.target.classList.add('checked')
    e.target.style.backgroundColor='red'
    ajouterGPSorPersonnelData.innerHTML=render.usePersonnelData()




let routeDonnée
let klmDonnée
let aproxDonnée
let locationBoolean
let positionInData
const localiser=document.querySelector('.localisationGPS')
const locationInput=document.querySelectorAll('.APILocalisation input')
const commanderBtn=document.querySelectorAll('.localisationGPS')
const commanderLocation=document.querySelector('.modalLivraison .Modal')
const verify=e=>{
    locationBoolean=false
    console.log(e.target.className)
    switch (e.target.className){
        case 'localRouteBtn':
            let patternRoute=/Sfax Route:([a-zA-Z]+)/
            patternRoute.test(e.target.value) ? routeDonnée='Donnée validée' : routeDonnée='Donnée non validée (ex:Sfax Route:Gremda)';locationBoolean=false;
            e.target.nextElementSibling.innerHTML=routeDonnée
            break;
        case 'localKlmBtn':
            let patternKlm=/Klm:([1-9,.]+)/
            patternKlm.test(e.target.value) ? klmDonnée='Donnée validée' : klmDonnée='Donnée non validée (ex:klm:4)';locationBoolean=false;
            e.target.nextElementSibling.innerHTML=klmDonnée
            break;
        case 'localAproxBtn':
            let patternAppr=/A proximité de:([a-zA-Z]+)/
            patternAppr.test(e.target.value) ? aproxDonnée='Donnée validée' : aproxDonnée='Donnée non validée (ex:A proximité de:Anas+)';locationBoolean=false;   
            e.target.nextElementSibling.innerHTML=aproxDonnée
            break;
    }
    if(routeDonnée === klmDonnée && aproxDonnée==='Donnée validée'){
    commanderBtn[0].nextElementSibling.nextElementSibling.innerHTML=' '
    locationBoolean=true
}
    else
    locationBoolean=false
    console.log(routeDonnée + klmDonnée + aproxDonnée)
    console.log(locationBoolean)
    if (locationBoolean){
    positionInData=document.querySelector('.valueLocation').innerHTML
    console.log(positionInData)
    commanderLocation.style.border='2px solid gold'
    document.querySelector('.valueLocation').innerHTML=`On va vous livrer a route ${document.querySelector('.localRouteBtn').value.split(':')[1]} klm${document.querySelector('.localKlmBtn').value.split(':')[1]} a proximité de ${document.querySelector('.localAproxBtn').value.split(':')[1]}  `
    }
    else{
    document.querySelector('.valueLocation').innerHTML=''
    commanderLocation.style.border=''
    }
}
//
const ShowInLocation=(lat,lng)=>{
    commanderBtn.forEach(a=>{
        a.nextElementSibling.nextElementSibling.innerHTML='Vous etes localisé<br>On va vous livrer a ladresse détécté<br>'
                })
    document.querySelector('.valueLocation').innerHTML=`<h6 class='FermerWase'>X</h6><iframe src="https://embed.waze.com/iframe?zoom=15&lat=${lat}&lon=${lng}"
    width="300" height="400"></iframe>`
    document.querySelector('.valueLocation').style.padding='0'
    document.querySelector('.FermerWase').addEventListener('click',e=>{
        document.querySelector('.valueLocation').innerHTML=''
        document.querySelector('.valueLocation').style.padding='10px'
        
    })
    locationBoolean=true
    commanderLocation.style.border='2px solid gold'
}
const success=pos=>{
    let lat= pos.coords.latitude
    let lng= pos.coords.longitude
    positionInData='lat :' + lat + ' lng : '+lng
    console.log(positionInData)
    ShowInLocation(lat,lng)
}
const error=err=>{
    localiser.nextElementSibling.innerHTML='Erreur au niveau de localisation'
}
const getPosition=e=>{
    navigator.geolocation.getCurrentPosition(success, error);
}
Array.from(commanderBtn).forEach(b=>{
b.addEventListener('click',getPosition)
})
locationInput.forEach(a=>{
    a.addEventListener('input',verify)
})
})


    }
    else
    e.target.nextElementSibling.style.backgroundColor=''
})
