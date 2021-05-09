let routeDonnée
let klmDonnée
let aproxDonnée
let locationBoolean
let positionInData
const localiser=document.querySelector('.localisationGPS')
const locationInput=document.querySelectorAll('.APILocalisation input')
const commanderBtn=document.querySelector('.modalLivraison button')
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
    commanderBtn.nextElementSibling.nextElementSibling.innerHTML=' '
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
    document.querySelector('.valueLocation').innerHTML=`<h6 class='FermerWase'>X</h6><iframe src="https://embed.waze.com/iframe?zoom=15&lat=${lat}&lon=${lng}"
    width="300" height="400"></iframe>`
    document.querySelector('.valueLocation').style.padding='0'
    document.querySelector('.FermerWase').addEventListener('click',e=>{
        document.querySelector('.valueLocation').innerHTML=''
        document.querySelector('.valueLocation').style.padding='10px'
        commanderBtn.nextElementSibling.nextElementSibling.innerHTML='Vous etes localisé<br>On va vous livrer a ladresse du map'
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








commanderBtn.addEventListener('click',getPosition)
locationInput.forEach(a=>{
    a.addEventListener('input',verify)
})



const allButtons=Array.from(document.querySelectorAll('input.Modal[type=button]'))
allButtons.forEach(a=>{
    toSwitch=a.parentElement.parentElement.className
    console.log(toSwitch)
    switch (toSwitch){
        case 'modalPetitDej':
        
        break;
        case 'modalDessert':
        
        break;
        case 'PersSalade':

        break;
        case'RecSalade':

        break;
    }
})