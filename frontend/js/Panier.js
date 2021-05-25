const shoppingCardContainer=document.querySelector('.toAddInCouses')
const lesPetitDéj=Array.from(document.querySelectorAll('.modalPetitDej .flex input,.modalPetitDej .supplument input'))
const lesSaladesRecommandées=document.querySelectorAll('.nosSaladeRec div')
const lesDesserts=Array.from(document.querySelectorAll('.modalDessert .flex input'))
const lesBasesDesSalades=Array.from(document.querySelectorAll('.PersSalade .Bases input,.PersSalade .Ingrédints input,.PersSalade .Sauce input,.PersSalade .modalDessert1 input'))
const ajouterUnRepas=Array.from(document.querySelectorAll('.more'))
const RefreshPagination=Array.from(document.querySelectorAll('.modalGeneralPag,div.RecSaladePag'))
let shoppingCardProducts = [];
let objectOfCourse={}
let z=0
let objectCourses={}
let saladeNbr=0
let exist
let nbrDesSaladesPersonnalisées=1
let TRlength
let locationToSend
//Events
lesPetitDéj.forEach(a =>a.addEventListener('click',lesPetitDéjCreation))
lesSaladesRecommandées.forEach(a =>a.addEventListener('click',lesSaladesRecommandéesCreation))
lesDesserts.forEach(a =>a.addEventListener('click',lesDessertsCreation))
lesBasesDesSalades.forEach(a =>a.addEventListener('click',lesBasesDesSaladesCreation))
document.addEventListener('DOMContentLoaded',chargingStorage)
ajouterUnRepas.forEach(a =>a.addEventListener('click',ajouterUnRepasModal))
RefreshPagination.forEach(a =>a.addEventListener('click',RefreshPaginationModal))
//event Funtions
function lesPetitDéjCreation(e){
    objectCourses.id='Petit Déj'
    if(e.target.parentElement.parentElement.parentElement.className=='flex'){
        if(e.target.className=='checked'){
            objectCourses.course=e.target.id
            objectCourses.price=e.target.nextElementSibling.children[0].querySelector('small').innerHTML
        }
        else{
            delete objectCourses.course
            delete objectCourses.price
        }
    }
    else{
        if(e.target.checked==true){
            objectCourses.supp=objectCourses.supp+'_'+e.target.id+'/'+e.target.nextElementSibling.querySelector('small').innerHTML
            objectCourses.supp=objectCourses.supp.replace(undefined,'')
        }
        else
        objectCourses.supp=objectCourses.supp.replace('_'+e.target.id+'/'+e.target.nextElementSibling.querySelector('small').innerHTML,'')
    }
    console.log(objectCourses)
    shoppingCardProducts[z]=objectCourses
    console.log(shoppingCardProducts)
    shoppingCartHTML()
}

function lesSaladesRecommandéesCreation(e){
    if(e.currentTarget.classList.contains("checked")){
        objectCourses.id='Salade Recommandée'
        objectCourses.course=e.currentTarget.children[0].innerHTML+'/'+e.currentTarget.querySelector('.prixRec').querySelector('small').innerHTML
    }
    else{
        delete objectCourses.id
        delete objectCourses.course
    }
    console.log(objectCourses)
    shoppingCardProducts[z]=objectCourses
    console.log(shoppingCardProducts)
    shoppingCartHTML()
}
function lesDessertsCreation(e){
objectCourses.id='Desssert'
if(e.target.checked==true){
    objectCourses.course=objectCourses.course+'_'+e.target.value+'/'+e.currentTarget.nextElementSibling.querySelector('span').innerHTML.substr(e.currentTarget.nextElementSibling.querySelector('span').innerHTML.match(/\d/).index,e.currentTarget.nextElementSibling.querySelector('span').innerHTML.match(/\d/).index)
    objectCourses.course=objectCourses.course.replace(undefined,'')
}
else
objectCourses.course=objectCourses.course.replace('_'+e.target.value+'/'+e.currentTarget.nextElementSibling.querySelector('span').innerHTML.substr(e.currentTarget.nextElementSibling.querySelector('span').innerHTML.match(/\d/).index,e.currentTarget.nextElementSibling.querySelector('span').innerHTML.match(/\d/).index),'')
console.log(objectCourses)
shoppingCardProducts[z]=objectCourses
console.log(shoppingCardProducts)
shoppingCartHTML()
}
function lesBasesDesSaladesCreation(e){
    objectCourses.id='Salade Personnalisée'
    objectCourses.nbrDesSalade=nbrDesSaladesPersonnalisées
    if(e.target.parentElement.parentElement.parentElement.className=='Bases'){
        if(e.target.className=='checked')
        objectCourses.Bases=e.target.id+'/'+e.target.nextElementSibling.querySelector('small').innerHTML
        else
        delete objectCourses.Bases
    }
    if(e.target.parentElement.parentElement.parentElement.parentElement.className=='Ingrédints'){
        if(e.target.checked==true){
            objectCourses.Ingrédints=objectCourses.Ingrédints+'_'+e.target.id+'/'+e.target.nextElementSibling.querySelector('small').innerHTML
            objectCourses.Ingrédints=objectCourses.Ingrédints.replace(undefined,'')
        }
        else
        objectCourses.Ingrédints=objectCourses.Ingrédints.replace('_'+e.target.id+'/'+e.target.nextElementSibling.querySelector('small').innerHTML,'')
    }
    if(e.target.parentElement.parentElement.parentElement.className=='Sauce'){
        if(e.target.checked==true){
            objectCourses.Sauce=objectCourses.Sauce+'_'+e.target.id
            objectCourses.Sauce=objectCourses.Sauce.replace(undefined,'')
        }
        else
        objectCourses.Sauce=objectCourses.Sauce.replace('_'+e.target.id,'')
    }
    if(e.target.parentElement.parentElement.parentElement.parentElement.className=='modalDessert1'){
        if(e.target.checked==true){
            objectCourses.dessert=objectCourses.dessert+'_'+e.target.value+'/'+e.currentTarget.nextElementSibling.querySelector('span').innerHTML.substr(e.currentTarget.nextElementSibling.querySelector('span').innerHTML.match(/\d/).index,e.currentTarget.nextElementSibling.querySelector('span').innerHTML.match(/\d/).index)
            objectCourses.dessert=objectCourses.dessert.replace(undefined,'')
        }
        else
        objectCourses.dessert=objectCourses.dessert.replace('_'+e.target.value+'/'+e.currentTarget.nextElementSibling.querySelector('span').innerHTML.substr(e.currentTarget.nextElementSibling.querySelector('span').innerHTML.match(/\d/).index,e.currentTarget.nextElementSibling.querySelector('span').innerHTML.match(/\d/).index),'')    
    }
    console.log(objectCourses)
    shoppingCardProducts[z]=objectCourses
    console.log(shoppingCardProducts)
    shoppingCartHTML()
}
function chargingStorage(e){
    //shoppingCardProducts=JSON.parse(localStorage.getItem('courses')) || []
}
function ajouterUnRepasModal(e){
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
    z+=1
    objectCourses={}
    if(e.target.parentElement.parentElement.className=='PersSalade')
    nbrDesSaladesPersonnalisées+=1
}
function RefreshPaginationModal(e){
    objectCourses={}
    shoppingCardProducts[z]=objectCourses
}
function shoppingCartHTML(){
    Array.from(document.querySelectorAll('.insideTicket > div')).forEach(a=>{
        a.style.display='none'
    })
    let ticket=document.querySelector('.insideTicket')
    let trTables=Array.from(document.querySelectorAll('table tr'))
    console.log(trTables.length)
    if(trTables.length>4){
        document.querySelector('.hideIfEmpty').style.display='none'
        document.querySelector('.totalPrice').style.display='block'
    }
    clearHTML()
    shoppingCardProducts.forEach(course=>{
        switch(course.id){
            case 'Petit Déj':
                Array.from(document.querySelectorAll('.bigSizeTable'))[0].style.display=''
                if(course.course){
                const row = document.createElement('tr');
                const divPetitDéj=document.createElement('div')
                divPetitDéj.innerHTML=`<h6>${course.course}</h6>
                <h6>${course.price}</h6>`
                document.querySelector('.Petit_Déj').appendChild(divPetitDéj)
                row.innerHTML =`<tr>
                <td style='font-weight: bold'>${course.course}</td>
                <td style='font-weight: bold'>${course.price}</td>
                <td style='font-weight: bold;text-align:center;cursor:pointer' class='hideFromTable' id='petitDejRemove'>X</td>
                </tr>`
                if(course.supp){
                    let arrayCourseSupp=course.supp.split('_')
                    arrayCourseSupp = arrayCourseSupp.filter(
                        course => course!== ''
                    )
                    console.log(arrayCourseSupp)
                    arrayCourseSupp.forEach(a=>{
                        console.log(a)
                        let namAndPriceSupp=a.split('/')
                        let rowSupp=document.createElement('tr');
                        let divSupp=document.createElement('div')
                        divSupp.innerHTML=`<h5>${namAndPriceSupp[0]}</h5>
                        <h5>${namAndPriceSupp[1]}</h5>`
                        document.querySelector('.Petit_Déj').appendChild(divSupp)
                        rowSupp.innerHTML =`<tr>
                        <td>${namAndPriceSupp[0]}</td>
                        <td>${namAndPriceSupp[1]}</td>
                        <td style='font-weight: bold;text-align:center;cursor:pointer' class='hideFromTable' id='suppRemove'>X</td>
                        </tr>`
                        document.querySelector('.petitDéjPanier').insertAdjacentElement('afterend',rowSupp)
                    })
                }
                document.querySelector('.petitDéjPanier').insertAdjacentElement('afterend',row)
            }
                break;
            case 'Salade Recommandée':
                Array.from(document.querySelectorAll('.bigSizeTable'))[2].style.display=''
                const rowRecommandée = document.createElement('tr');
                const divRecommandée=document.createElement('div')
                
                let arrayCourseRecommandée=course.course.split('/')
                rowRecommandée.innerHTML =`<tr>
                <td>${arrayCourseRecommandée[0]}</td>
                <td>${arrayCourseRecommandée[1]}</td>
                <td style='font-weight: bold;text-align:center;cursor:pointer' class='hideFromTable' id='recommandéeRemove'>X</td>
                </tr>`
                document.querySelector('.ReconnmanderPanier').insertAdjacentElement('afterend',rowRecommandée)
                divRecommandée.innerHTML=`<h6>${arrayCourseRecommandée[0]}</h6>
                <h6>${arrayCourseRecommandée[1]}</h6>`
                document.querySelector('.Recommandée_ticket').appendChild(divRecommandée)
                break;
            case 'Salade Personnalisée':
                Array.from(document.querySelectorAll('.bigSizeTable'))[1].style.display=''
               let rowPersonnalisée = document.createElement('tr');
                if(course.Bases){
                let baseArray=course.Bases.split('/')
                console.log(course)
                let divBase=document.createElement('div')
                let rowBase = document.createElement('tr');
                rowBase.innerHTML=`<tr>
                <td>Base:${baseArray[0]}</td>
                <td>${baseArray[1]}</td>
                <td style='font-weight: bold;text-align:center;cursor:pointer' class='hideFromTable' id='baseRemove'>X</td>
                </tr>`
                document.querySelector('.PersonnaliséPanier').insertAdjacentElement('afterend',rowBase)
                divBase.innerHTML=`<h6>Base:${baseArray[0]}</h6>
                <h6>${baseArray[1]}</h6>`
                document.querySelector('.Personnalisée_ticket').appendChild(divBase)
        }
        if(course.Ingrédints){
                let arrayCourseIngrédints=course.Ingrédints.split('_')
                arrayCourseIngrédints = arrayCourseIngrédints.filter(
                    course => course!== ''
                )
                

                arrayCourseIngrédints.forEach(a=>{
                    let divIngrédients = document.createElement('div')
                    let arrayCourseIngrédintsPriceAndName=a.split('/')
                    let rowIngrédients = document.createElement('tr');
                    rowIngrédients.innerHTML=`<tr>
                <td>Ingrédient:${arrayCourseIngrédintsPriceAndName[0]}</td>
                <td>${arrayCourseIngrédintsPriceAndName[1]}</td>
                <td style='font-weight: bold;text-align:center;cursor:pointer' class='hideFromTable' id='ingrédientRemove'>X</td>
                </tr>`
                document.querySelector('.PersonnaliséPanier').insertAdjacentElement('afterend',rowIngrédients)
                divIngrédients.innerHTML=`<h6>Ingrédient:${arrayCourseIngrédintsPriceAndName[0]}</h6>
                <h6>${arrayCourseIngrédintsPriceAndName[1]}</h6>`
                document.querySelector('.Personnalisée_ticket').appendChild(divIngrédients)    
            })
                
            }
            
            if(course.Sauce){
                let arrayCourseSauce=course.Sauce.split('_')
                arrayCourseSauce = arrayCourseSauce.filter(
                    course => course!== ''
                )
                arrayCourseSauce.forEach(a=>{
                let divSauce=document.createElement('div')
                    let rowSauce = document.createElement('tr');
                    rowSauce.innerHTML=`<tr>
                <td>Sauce:${a}</td>
                <td>Gratuit</td>
                <td style='font-weight: bold;text-align:center;cursor:pointer' class='hideFromTable' id='sauceRemove'>X</td>
                </tr>`
                document.querySelector('.PersonnaliséPanier').insertAdjacentElement('afterend',rowSauce)
                divSauce.innerHTML=`<h6>Sauce:${a}</h6>
                <h6>Gratuit</h6>`
                document.querySelector('.Personnalisée_ticket').appendChild(divSauce)  
            })
                  
            }
                if(course.dessert){
                    let arrayCourseDessert=course.dessert.split('_')
                arrayCourseDessert = arrayCourseDessert.filter(
                    course => course!== ''
                )
                arrayCourseDessert.forEach(a=>{
                let divDessert=document.createElement('div')
                    let rowDessert = document.createElement('tr');
                    let arrayCourseDessertPriceAndName=a.split('/')
                    console.log(arrayCourseDessertPriceAndName)
                    rowDessert.innerHTML =`<tr>
                <td>Dessert:${arrayCourseDessertPriceAndName[0]}</td>
                <td>${arrayCourseDessertPriceAndName[1]}</td>
                <td style='font-weight: bold;text-align:center;cursor:pointer' class='hideFromTable' id='dessertSaladeRemove'>X</td>
                </tr>`
                document.querySelector('.PersonnaliséPanier').insertAdjacentElement('afterend',rowDessert)   
                divDessert.innerHTML=`<h6>Dessert:${arrayCourseDessertPriceAndName[0]}</h6>
                <h6>${arrayCourseDessertPriceAndName[1]}</h6>`
            document.querySelector('.Personnalisée_ticket').appendChild(divDessert)  

            })
            

                }
                if(course.nbrDesSalade){
                let rowsaladeNbr = document.createElement('tr');
                rowsaladeNbr.innerHTML=`<tr>
                <td class="nbrSalades" colspan="3" style='font-weight:bold;text-align:center'>Salade numéro ${course.nbrDesSalade}</td>
                </tr>`
                document.querySelector('.PersonnaliséPanier').insertAdjacentElement('afterend',rowsaladeNbr)
                }
                break;
            case 'Desssert' :
                
                Array.from(document.querySelectorAll('.bigSizeTable'))[3].style.display=''
                let arrayCourseDessert=course.course.split('_')
                arrayCourseDessert = arrayCourseDessert.filter(
                    course => course!== ''
                )
                console.log(arrayCourseDessert)
                arrayCourseDessert.forEach(a=>{
                    let divNewDessert=document.createElement('div')
                    let rowDessert = document.createElement('tr');
                    let arrayCourseDessertPriceAndName=a.split('/')
                    console.log(arrayCourseDessertPriceAndName)
                    rowDessert.innerHTML =`<tr>
                <td>${arrayCourseDessertPriceAndName[0]}</td>
                <td>${arrayCourseDessertPriceAndName[1]}</td>
                <td style='font-weight: bold;text-align:center;cursor:pointer' class='hideFromTable' id='dessertRemove'>X</td>
                </tr>`
                document.querySelector('.DessertPanier').insertAdjacentElement('afterend',rowDessert)
                divNewDessert.innerHTML=`<h6>${arrayCourseDessertPriceAndName[0]}</h6>
                <h6>${arrayCourseDessertPriceAndName[1]}</h6>`
            document.querySelector('.Dessert_ticket').appendChild(divNewDessert) 


            })
                break;
        }
        removeTitle()
        syncStorage()
    })
    let priceToShow=0
    let priceChange=document.getElementById('priceGonnaChange')
    let allTD=Array.from(document.querySelectorAll('td'))
    let allTdDt=allTD.filter(a=>a.innerHTML.indexOf('DT')!=-1)
    let allTDnbr=allTdDt.map(a=>a.innerHTML.substr(0,a.innerHTML.indexOf('DT')))
    allTDnbr.forEach(a=>{
        priceToShow+=a*1
    })
    priceChange.innerHTML=priceToShow.toFixed(2);+'DT'
    document.querySelector('#priceTicket').innerHTML='Total a payer : '+priceToShow.toFixed(2);+' DT'
    Array.from(document.querySelectorAll('.insideTicket > div')).forEach(a=>{
        if(a.children[1])
        a.style.display='block'
    })
let TRnbrSaladeLength=Array.from(document.querySelectorAll('.nbrSalades')).length
TRlength=Array.from(document.querySelectorAll('tr')).length
document.querySelector('.nbrCmd').innerHTML=TRlength-5-TRnbrSaladeLength
console.log(shoppingCardProducts)
}
function clearHTML(){
    Array.from(document.querySelectorAll('table td')).forEach(a=>{
        console.log(a.parentElement)
        if(a.classList.contains('bigSizeTable')==false)
        a.parentElement.remove()
    })
    Array.from(document.querySelectorAll('.insideTicket div div')).forEach(a=>{
        a.remove()
    })
}
function syncStorage(){
    //localStorage.setItem('courses', JSON.stringify(shoppingCardProducts));
}

function removeTitle(){
    Array.from(document.querySelectorAll('.bigSizeTable')).forEach(a=>{
        if(a.parentElement.nextElementSibling){
            if(a.parentElement.nextElementSibling.children[0].className=='bigSizeTable')
            a.parentElement.style.display='none'
            else
            a.parentElement.style.display=''
            if(a.parentElement.nextElementSibling.children[0].className=='nbrSalades'){
                if(a.parentElement.nextElementSibling.nextElementSibling){
                if(a.parentElement.nextElementSibling.nextElementSibling.children[0].className=='bigSizeTable'){
                    a.parentElement.style.display='none'
                    a.parentElement.nextElementSibling.style.display='none' 
            }
                }
        }
    }
        else{
            if(a.parentElement.className=='DessertPanier')
            a.parentElement.style.display='none'
        }
    })
}
document.querySelector('.commandeWord').addEventListener('click',e=>{
    e.currentTarget.classList.toggle('blockDisplay')
    if(document.querySelector('.commandeWord').classList.contains('blockDisplay'))
    document.querySelector('.CommandePanier').style.display='block'
    else
    document.querySelector('.CommandePanier').style.display=''
})
document.querySelector('.CommandePanier').addEventListener('click',e=>{
    if (e.target.classList.contains('hideFromTable')){
        switch (e.target.getAttribute('id')) {
            case 'petitDejRemove':
                shoppingCardProducts=shoppingCardProducts.filter(a=>{
                    if(a.course==e.target.previousElementSibling.previousElementSibling.innerHTML)
                    return a.course=''
                    else
                    return a
                })
                console.log(shoppingCardProducts)
                shoppingCartHTML()
                break;
            case 'recommandéeRemove':
                shoppingCardProducts=shoppingCardProducts.filter(a=>{
                    if(a.course.substr(0,a.course.indexOf('/'))==e.target.previousElementSibling.previousElementSibling.innerHTML)
                    return a.course=''
                    else
                    return a
                })
                shoppingCartHTML()
                break;
            case 'baseRemove':
                let ss
                shoppingCardProducts.forEach(a=>{
                    if(a.Bases.indexOf(e.target.previousElementSibling.previousElementSibling.innerHTML.substr(6,e.target.previousElementSibling.previousElementSibling.innerHTML.length))!=-1)
                    a.Bases=''
                shoppingCartHTML()
                })
                break;
            case 'ingrédientRemove':
                console.log(shoppingCardProducts)
                let ccs
                shoppingCardProducts.forEach(a=>{
                    console.log(a)
                    console.log(e.target.previousElementSibling.previousElementSibling.innerHTML.substr(11,e.target.previousElementSibling.previousElementSibling.innerHTML.length))
                    if((a.Ingrédints.indexOf(e.target.previousElementSibling.previousElementSibling.innerHTML.substr(11,e.target.previousElementSibling.previousElementSibling.innerHTML.length)))!=-1){
                        console.log('_'+e.target.previousElementSibling.previousElementSibling.innerHTML.substr(11,e.target.previousElementSibling.previousElementSibling.innerHTML.length)+'/'+e.target.previousElementSibling.innerHTML)
                         ccs=a.Ingrédints.split(`_${e.target.previousElementSibling.previousElementSibling.innerHTML.substr(11,e.target.previousElementSibling.previousElementSibling.innerHTML.length)}`+'/'+`${e.target.previousElementSibling.innerHTML}`)
                    }
                    console.log(ccs)
                    let newCourseDessert=ccs.join('')
                    a.Ingrédints=newCourseDessert
                })
                shoppingCartHTML()
                break;   
            case 'sauceRemove':
                let sc
                shoppingCardProducts.forEach(a=>{
                    console.log(e.target.previousElementSibling.previousElementSibling.innerHTML.substr(6,e.target.previousElementSibling.previousElementSibling.innerHTML.length))
                    if(a.Sauce.indexOf(e.target.previousElementSibling.previousElementSibling.innerHTML.substr(6,e.target.previousElementSibling.previousElementSibling.innerHTML.length))!=-1){
                        sc=a.Sauce.split(`_${e.target.previousElementSibling.previousElementSibling.innerHTML.substr(6,e.target.previousElementSibling.previousElementSibling.innerHTML.length)}`)
                    }
                    let newCourseDessert=sc.join('')
                    a.Sauce=newCourseDessert
                })
                shoppingCartHTML()
                break;   
            case 'dessertSaladeRemove':
                let cs
                shoppingCardProducts.forEach(a=>{
                    if(a.dessert.indexOf(e.target.previousElementSibling.previousElementSibling.innerHTML.substr(8,e.target.previousElementSibling.previousElementSibling.innerHTML.length))!=-1){
                        console.log('_'+e.target.previousElementSibling.previousElementSibling.innerHTML+'/'+e.target.previousElementSibling.innerHTML)
                         cs=a.dessert.split(`_${e.target.previousElementSibling.previousElementSibling.innerHTML.substr(8,e.target.previousElementSibling.previousElementSibling.innerHTML.length)}`+'/'+`${e.target.previousElementSibling.innerHTML}`)

                    }
                    console.log(cs)
                    let newCourseDessert=cs.join('')
                    a.dessert=newCourseDessert
                })
                shoppingCartHTML()
                break;   
            case 'dessertRemove':
                let cc
                shoppingCardProducts.forEach(a=>{
                    if(a.course.indexOf(e.target.previousElementSibling.previousElementSibling.innerHTML)!=-1){
                        console.log('_'+e.target.previousElementSibling.previousElementSibling.innerHTML+'/'+e.target.previousElementSibling.innerHTML)
                         cc=a.course.split(`_${e.target.previousElementSibling.previousElementSibling.innerHTML}`+'/'+`${e.target.previousElementSibling.innerHTML}`)

                    }
                    console.log(cc)
                    let newCourseDessert=cc.join('')
                    a.course=newCourseDessert
                })
                shoppingCartHTML()
                break;   
        }
    }
})
//addLocation
let locationBoolean
function addLocation(){
let routeDonnée
let klmDonnée
let aproxDonnée
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
}
addLocation()
//addLoction1
/*function addLocation1(e){
    console.log('d5alna1')
    let routeDonnée1
    let klmDonnée1
    let aproxDonnée1
    let positionInData1
    console.log(e.target)
    locationBoolean=false
    console.log(e.target.className)
    switch (e.target.className){
        case 'localRouteBtn':
            let patternRoute=/Sfax Route:([a-zA-Z]+)/
            patternRoute.test(e.target.value) ? routeDonnée1='Donnée validée' : routeDonnée1='Donnée non validée (ex:Sfax Route:Gremda)';locationBoolean=false;
            e.target.nextElementSibling.innerHTML=routeDonnée1
            break;
        case 'localKlmBtn':
            let patternKlm=/Klm:([1-9,.]+)/
            patternKlm.test(e.target.value) ? klmDonnée1='Donnée validée' : klmDonnée1='Donnée non validée (ex:klm:4)';locationBoolean=false;
            e.target.nextElementSibling.innerHTML=klmDonnée1
            break;
        case 'localAproxBtn':
            let patternAppr=/A proximité de:([a-zA-Z]+)/
            patternAppr.test(e.target.value) ? aproxDonnée1='Donnée validée' : aproxDonnée1='Donnée non validée (ex:A proximité de:Anas+)';locationBoolean=false;   
            e.target.nextElementSibling.innerHTML=aproxDonnée1
            break;
    }
    if(routeDonnée1 === klmDonnée1 && aproxDonnée1==='Donnée validée'){
    localiser.nextElementSibling.nextElementSibling.innerHTML=' '
    locationBoolean=true
}
    else
    locationBoolean=false
    if (locationBoolean){
    positionInData1=document.querySelector('.valueLocation1').innerHTML
    console.log(positionInData1)
    document.querySelector('.valueLocation1').innerHTML=`On va vous livrer a route ${document.querySelector('.localRouteBtn').value.split(':')[1]} klm${document.querySelector('.localKlmBtn').value.split(':')[1]} a proximité de ${document.querySelector('.localAproxBtn').value.split(':')[1]}  `
    }
    else{
    document.querySelector('.valueLocation1').innerHTML=''
    }

}*/
function addLocation2(){
    let positionInData1
    console.log('d5alna2')
    const localiser=document.querySelector('.localisationGPS1')
    const locationInput=Array.from(document.querySelectorAll('.APILocalisation1 input'))
const ShowInLocation=(lat,lng)=>{
    console.log('d5al 7atta')
    localiser.nextElementSibling.nextElementSibling.innerHTML='Vous etes localisé<br>On va vous livrer a ladresse détécté<br>'
    document.querySelector('.valueLocation1').innerHTML=`<h6 class='FermerWase1'>X</h6><iframe src="https://embed.waze.com/iframe?zoom=15&lat=${lat}&lon=${lng}"
    width="300" height="400"></iframe>`
    document.querySelector('.valueLocation1').style.padding='0'
    document.querySelector('.FermerWase1').addEventListener('click',e=>{
        document.querySelector('.valueLocation1').innerHTML=''
        document.querySelector('.valueLocation1').style.padding='10px'
        
    })
    locationBoolean=true
}
const success=pos=>{
    console.log('d5alpos')
    let lat= pos.coords.latitude
    let lng= pos.coords.longitude
    positionInData1='lat :' + lat + ' lng : '+lng
    locationToSend='lat :' + lat + ' lng : '+lng
    console.log(positionInData1)
    ShowInLocation(lat,lng)
}
const error=err=>{
    localiser.nextElementSibling.innerHTML='Erreur au niveau de localisation'
}
const getPosition=e=>{
    console.log('d5altget')
    navigator.geolocation.getCurrentPosition(success, error);
}
getPosition()
console.log(locationBoolean)
}


document.querySelector('.domicile').addEventListener('click',e=>{
    function slowAlert(){
        Array.from(document.querySelectorAll('.CompagnieDeLivraison ul li')).forEach(a=>{
            a.addEventListener('click',e=>{
            verifyGreen()
        exist= Array.from(document.querySelectorAll('.CompagnieDeLivraison ul li')).some(a=>a.style.border=='4px solid red')
        })
        })
            document.querySelector('.vous_localiser').addEventListener('click',e=>{
                console.log("here")
                window.setTimeout(now,0)
                function now(){
                    document.querySelector('.localisationGPS1').addEventListener('click',e=>{
                        verifyGreen()
                        addLocation2()
                    })
                    }
            })
            document.querySelector('.utiliserMap').addEventListener('click',e=>{
    let route,klmaa,klmaaa
                console.log('mapamp')
                window.setTimeout(now,0)
                
                function now(){
                    document.querySelectorAll('.APILocalisation1 input').forEach(a=>{
                        a.addEventListener('input',e=>{
                            verifyGreen()
                            console.log('d5alna1')
    let routeDonnée1
    let klmDonnée1
    let aproxDonnée1
    let positionInData1
    console.log(e.target)
    locationBoolean=false
    console.log(e.target.className)
    switch (e.target.className.split(' ')[0]){
        case 'localRouteBtn':
            let patternRoute=/Sfax Route:([a-zA-Z]+)/
            patternRoute.test(e.target.value) ? routeDonnée1='Donnée validée' : routeDonnée1='Donnée non validée (ex:Sfax Route:Gremda)';locationBoolean=false;
            e.target.nextElementSibling.innerHTML=routeDonnée1
            route=e.target.value
            console.log(route)
            break;
        case 'localKlmBtn':
            let patternKlm=/Klm:([1-9,.]+)/
            patternKlm.test(e.target.value) ? klmDonnée1='Donnée validée' : klmDonnée1='Donnée non validée (ex:klm:4)';locationBoolean=false;
            e.target.nextElementSibling.innerHTML=klmDonnée1
            klmaa=e.target.value
            break;
        case 'localAproxBtn':
            let patternAppr=/A proximité de:([a-zA-Z]+)/
            patternAppr.test(e.target.value) ? aproxDonnée1='Donnée validée' : aproxDonnée1='Donnée non validée (ex:A proximité de:Anas+)';locationBoolean=false;   
            e.target.nextElementSibling.innerHTML=aproxDonnée1
            klmaaa=e.target.value
            break;
          
    }
    if(routeDonnée1 === klmDonnée1 && aproxDonnée1==='Donnée validée'){
    locationBoolean=true
}
    else
    locationBoolean=false
    console.log(route+klmaaa+klmaa)
                        locationToSend=`${route} ${klmaa} ${klmaaa}`
                        })
 
                        
                    })
                }
            })
    }
    let timeoutID
    function delayedAlert() {
        timeoutID = window.setTimeout(slowAlert, 0);
      }
      delayedAlert()
})

let chez_nousInput=document.getElementById('chez_nous')
let domicileInput=document.getElementById('domicile')
let submitButton=document.querySelector('.cmd')
Array.from(document.querySelectorAll('.insideProc input')).forEach(a=>{
    a.addEventListener('input',e=>verifyGreen())
    
})



function verifyGreen(){
        let TRLength=Array.from(document.querySelectorAll('tr')).length>5
        let nom_et_prenomValue=document.getElementById('name_prenom').value!=''
        let telValue=document.getElementById('tel').value!=''
        let dateAndHourValue=document.getElementById('dateAndHour').value!=''
        let chezNous_DomicileValue=Array.from(document.querySelectorAll('.insideProc input[type=radio]'))
        let chezNous_DomicileBoolean=chezNous_DomicileValue.some(a=>a.className=='checked')
        
        
                console.log(`length5:+${TRLength}`)
                console.log('name'+nom_et_prenomValue)
                console.log('Date'+dateAndHourValue)
                console.log('Tel'+telValue)
                console.log('chezNous_DomicileBoolean'+chezNous_DomicileBoolean)
                console.log('locationBoolean'+locationBoolean)
                console.log(exist)
                if(TRLength==true && nom_et_prenomValue){
                    console.log('good name')
                    if(telValue&&dateAndHourValue){
                        if(chezNous_DomicileBoolean){
                            if(chez_nousInput.className=='checked'){
                                exist=false
                                console.log('greenCheznous')
                                submitButton.style.border='2px solid green'
                                submitButton.style.color= 'green'
                            }
                            else if(domicileInput.className=='checked'){
                                if(exist&&locationBoolean){
                                console.log('greenChezVous')
                                    submitButton.style.border='2px solid green'
                                    submitButton.style.color= 'green' 
                                }
                            }
                            else{
                                submitButton.style.border='2px solid green'
                                submitButton.style.color= 'green'
                            }
                        }
                    }
                }
                else{
                submitButton.style.border='2px solid gray'
                submitButton.style.color= 'gray'
                }
                document.querySelector('.cmd').addEventListener('click',e=>{
                    if(submitButton.style.border=='2px solid green' && domicileInput.className=='checked'){
                    domicileSend()}
                    else if(submitButton.style.border=='2px solid green' && chez_nousInput.className=='checked')
                    chezNousSend()  
                })
                          
}
function chezNousSend(){
const domicileObjectSend={
Name:document.getElementById('name_prenom').value,
phoneNbr:document.getElementById('tel').value,
Date:document.getElementById('dateAndHour').value,
Commande:shoppingCardProducts
}
console.log(domicileObjectSend)
window.alert('La requete POST envoyée au serveur: '+JSON.stringify(domicileObjectSend))
}
function domicileSend(){
    let livreur
    Array.from(document.querySelectorAll('.CompagnieDeLivraison ul li')).forEach(a=>{
        if(a.classList.contains('checked'))
        livreur=a.className.split(' ')[0]
    })
const chezNousObjectSend={
    Name:document.getElementById('name_prenom').value,
    phoneNbr:document.getElementById('tel').value,
    Date:document.getElementById('dateAndHour').value,
    Commande:shoppingCardProducts,
    Livreur:livreur,
    location:locationToSend
}
console.log(chezNousObjectSend)
window.alert('La requete POST envoyée au serveur: '+JSON.stringify(chezNousObjectSend))
}