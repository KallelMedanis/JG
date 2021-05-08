let routeDonnée
let klmDonnée
let aproxDonnée
let locationBoolean
const localiser=document.querySelector('.localisationGPS')
const locationInput=document.querySelectorAll('.APILocalisation input')
const commandeBtn=document.querySelector('.modalLivraison button')
const verify=e=>{
    console.log(e.target.className)
    switch (e.target.className){
        case 'localRouteBtn':
            let patternRoute=/Sfax Route:([a-z]+)/
            patternRoute.test(e.target.value) ? routeDonnée='Donnée validée' : routeDonnée='Donnée non validée (ex:Sfax Route:Gremda)';locationBoolean=false;
            e.target.nextElementSibling.innerHTML=routeDonnée
            break;
        case 'localKlmBtn':
            let patternKlm=/Klm:([1-9,.]+)/
            patternKlm.test(e.target.value) ? klmDonnée='Donnée validée' : klmDonnée='Donnée non validée (ex:klm:4)';locationBoolean=false;
            e.target.nextElementSibling.innerHTML=klmDonnée
            break;
        case 'localAproxBtn':
            let patternAppr=/A proximité de:([a-z]+)/
            patternAppr.test(e.target.value) ? aproxDonnée='Donnée validée' : aproxDonnée='Donnée non validée (ex:A proximité de:Anas+)';locationBoolean=false;   
            e.target.nextElementSibling.innerHTML=aproxDonnée
            break;
    }
    if(routeDonnée === klmDonnée && aproxDonnée==='Donnée validée')
    locationBoolean=true
    else
    locationBoolean=false
    console.log(routeDonnée + klmDonnée + aproxDonnée)
    console.log(locationBoolean)
    if (locationBoolean){
    document.querySelector('.valueLocation').innerHTML=`On va vous livrer a route ${document.querySelector('.localRouteBtn').value.split(':')[1]} klm${document.querySelector('.localKlmBtn').value.split(':')[1]} a proximité de ${document.querySelector('.localAproxBtn').value.split(':')[1]}  `
    }
    else
    document.querySelector('.valueLocation').innerHTML=''
}






locationInput.forEach(a=>{
    a.addEventListener('input',verify)
})
//localiser.addEventListener('click',meLocaliser)
//commandeBtn.addEventListener('click',alertOrGoModal)