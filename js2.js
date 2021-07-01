const body=document.querySelector('body')
document.addEventListener('DOMContentLoaded',chargingDataBase)
function chargingDataBase(){
    return fetch('http://192.168.1.17:3000/getBase', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
.then((response) => response.json())
.then((responseJson) => {
  responseJson.forEach(a=>{
      let all=''
      a.Commande.forEach(b=>{
          all+=JSON.stringify(b)
      })
      if(a.location){
          body.innerHTML+=`<table>
          <tr><th colspan='2'>A domicile</th></tr>
          <tr><th>Nom et prénom</th><td>${a.Name}</td></tr>
          <tr><th>Numéro de téléphone</th><td>${a.phoneNbr}</td></tr>
          <tr><th>Date</th><td>${a.Date}</td></tr>
          <tr><th>Livreur</th><td>${a.Livreur}</td></tr>
          <tr><th>localisation</th><td>${a.location}</td></tr>
          <tr><th>Commande</th><td>${all}</td></tr>
          <tr><th>Prix</th><td>${a.Price} TD</td></tr>
          </table>
          `
      }
      else{
        body.innerHTML+=`<table>
        <tr><th colspan='2'>Chez nous</th></tr>
        <tr><th>Nom et prénom</th><td>${a.Name}</td></tr>
        <tr><th>Numéro de téléphone</th><td>${a.phoneNbr}</td></tr>
        <tr><th>Date</th><td>${a.Date}</td></tr>
        <tr><th>Commande</th><td>${all}</td></tr>
        <tr><th>Prix</th><td>${a.Price} TD</td></tr>
        </table>
        `
      }
  })
})
.catch((error) => {
  console.error(error);
});
}