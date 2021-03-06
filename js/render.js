export const render={
    renderChezNous:()=>{
        return `<p class='livreurChezNous'>Bienvenue chez nous</p>`
    },
    renderChezVous:()=>{
        return `<div class="livreur">
        <div class="lastLivr">
            <h4 class="hAdress">Votre adresse</h4>
            <input type="button" class="vous_localiser" value="Utiliser votre GPS">
            <input type="button" class="utiliserMap" value="Décrivez votre local">
        </div>
        <div class="CompagnieDeLivraison">
            <h4>Choisissez votre compagnie de livraison</h4>
            <ul>
                <li class="Yacir"><img src="img/yassir.png"></li>
                <li class="alloJek"><img src="img/alloJek.png"></li>
                <li class="tikTak"><img src="img/tiktak.PNG"></li>
                <li class="Deliveroo"><img src="img/Deliveroo.png"></li>
            </ul>
        </div>
        <div class="ajouterGPSorPersonnelData"></div>`
    },
    useGPS:()=>{
        return `<button class="localisationGPS1 localisationGPS">Localiser</button><br><p></p>
        <h4 class="valueLocation1 valueLocation"></h4>`
    },
    usePersonnelData:()=>{
        return `<div class=" APILocalisationAdd APILocalisation1 APILocalisation">
        <h4>Veillez entre votre localisation</h4>
        <input type="text" class="localRouteBtn localRouteBtn1" value="Sfax Route:">
        <small></small>
        <input type="text" class="localKlmBtn localKlmBtn1" value="Klm:">
        <small></small>
        <input type="text" class="localAproxBtn localAproxBtn1" value="A proximité de:">
        <small></small>
    </div>
    <h4 class="valueLocation1 valueLocation"></h4>`
    }
}
