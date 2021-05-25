let commande
let verification ={  
verifBtns:function(){
    allButtons=Array.from(document.querySelectorAll('input.Modal[type=button]'))
    allButtons.forEach(modalElement=>{
        toSwitch=modalElement.parentElement.parentElement.className
    switch (toSwitch){
        case 'modalPetitDej':
        let petitDejInputs=Array.from(document.querySelectorAll('.modalPetitDej .flex ul li input'))
        petitDejInputs.forEach(a=>{
            a.addEventListener('click',e=>{
                hi = Array.from(a.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.btnss input'))
                if(a.className==='checked'){
                    hi[0].style.border='2px solid gold'
                    hi[1].style.border='2px solid gold'
                    hi[0].style.color='gold'
                    hi[1].style.color='gold'
                }
                else{
                    hi[0].style.border=''
                    hi[1].style.border=''
                    hi[0].style.color=''
                    hi[1].style.color=''    
                }
            })
           
        })

        break;
        case 'modalDessert':
        let dessertCheckbox=Array.from(document.querySelectorAll('.modalDessert .flex ul li input'))
        dessertCheckbox.forEach(a=>{
            a.addEventListener('click',e=>{
                if(a.checked==true){
                    nbr+=2
                }
                else{
                    nbr-=2
                }
                hi=Array.from(a.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.btnss input'))
                if(nbr>0){
                    hi[0].style.border='2px solid gold'
                    hi[1].style.border='2px solid gold'
                    hi[0].style.color='gold'
                    hi[1].style.color='gold'
                }
                else{
                    hi[0].style.border=''
                    hi[1].style.border=''
                    hi[0].style.color=''
                    hi[1].style.color=''    
                }
            })
        })
        break;
        case 'PersSalade':
            let nbrBase=0,nbrIng=0,nbrSauce=0
            let ingrédientsParsSalade=document.querySelectorAll('.PersSalade .Bases input,.PersSalade .Ingrédints input,.PersSalade .Sauce input');
                    document.querySelectorAll('.PersSalade .Bases input').forEach(bases=>{
                        bases.addEventListener('click',e=>{
                            if(e.target.className=='checked')
                            nbrBase=1
                            else
                            nbrBase=0
                        })
                        
                    })
                        document.querySelectorAll('.PersSalade .Ingrédints input').forEach(ingrédient=>{
                            ingrédient.addEventListener('click',e=>{
                                if(e.target.checked==true)
                                nbrIng=nbrIng+1
                                else
                                nbrIng=nbrIng-1
                                })
                            
                        })
                            document.querySelectorAll('.PersSalade .Sauce input').forEach(Sauce=>{
                                Sauce.addEventListener('click',e=>{
                                if(e.target.checked==true)
                                nbrSauce=nbrSauce+1
                                else
                                nbrSauce=nbrSauce-1
                                if(nbrSauce>4){
                                    nbrSauce-=1
                                    e.target.checked=false
                                }
                                })
                            })
                            ingrédientsParsSalade.forEach(a=>{
                                a.addEventListener('click',e=>{
                                    if(nbrBase==1 && nbrIng>0 && nbrSauce>0){
                                        Array.from(document.querySelectorAll('.PersSalade .btnss input'))[0].style.color='gold'
                                        Array.from(document.querySelectorAll('.PersSalade .btnss input'))[0].style.border='2px solid gold'
                                        Array.from(document.querySelectorAll('.PersSalade .btnss input'))[1].style.color='gold'
                                        Array.from(document.querySelectorAll('.PersSalade .btnss input'))[1].style.border='2px solid gold'
                                    }
                                    else{
                                    Array.from(document.querySelectorAll('.PersSalade .btnss input'))[0].style.color=''
                                    Array.from(document.querySelectorAll('.PersSalade .btnss input'))[0].style.border=''
                                    Array.from(document.querySelectorAll('.PersSalade .btnss input'))[1].style.color=''
                                    Array.from(document.querySelectorAll('.PersSalade .btnss input'))[1].style.border=''                                
                                }
                                })
                                
                            
                            })

        break;
        case'RecSalade':
        let nbrOccOfRexSalade=0
        Array.from(document.querySelectorAll('.RecSalade .nosSaladeRec>div')).forEach(a=>{
            a.addEventListener('click',e=>{
                if(a.className.indexOf('checked')==-1 && a.style.border=='5px solid gold')
                nbrOccOfRexSalade=0
                else
                nbrOccOfRexSalade=1
                if(nbrOccOfRexSalade==1){
                Array.from(document.querySelectorAll('.RecSalade .btnss input'))[0].style.color='gold'
                Array.from(document.querySelectorAll('.RecSalade .btnss input'))[0].style.border='2px solid gold'
                Array.from(document.querySelectorAll('.RecSalade .btnss input'))[1].style.color='gold'
                Array.from(document.querySelectorAll('.RecSalade .btnss input'))[1].style.border='2px solid gold'
            }
            else{
            Array.from(document.querySelectorAll('.RecSalade .btnss input'))[0].style.color=''
            Array.from(document.querySelectorAll('.RecSalade .btnss input'))[0].style.border=''
            Array.from(document.querySelectorAll('.RecSalade .btnss input'))[1].style.color=''
            Array.from(document.querySelectorAll('.RecSalade .btnss input'))[1].style.border=''                                
        }
            })
        })
        break;
    }
})
}
}
verification.verifBtns()