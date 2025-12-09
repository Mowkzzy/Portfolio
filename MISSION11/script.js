
function ajouterLigne() {
    var newLi = document.getElementById("modeleLigne").cloneNode(true); 
    
    newLi.removeAttribute("id");
    newLi.style.display = 'table-row'; 
    newLi.querySelector(".desc").value = "";
    newLi.querySelector(".qte").value = "0";
    newLi.querySelector(".prix").value = "0";
    newLi.querySelector(".totalLigne").value = "0.00";

    var lastLi = document.getElementById("lastLigne");

    var table = document.getElementById("table_inv");
    var pere = table.querySelector("tbody");
    
    pere.insertBefore(newLi, lastLi);
}


function remplir() {
    const objets = new Array("parapluie", "Bureau", "ram 4go", "cle usb 8go", "cle usb 16go", "souris", "ecran 17 pouces");
    
    var listePrix = document.getElementsByClassName("prix");
    var listeQte = document.getElementsByClassName("qte");
    var listeDesc = document.getElementsByClassName("desc");
    
    for (let i = 0; i < listeDesc.length; i++) {
        const descIndex = Math.floor(Math.random() * objets.length);
        listeDesc[i].value = objets[descIndex];

        const qteAleatoire = Math.floor(10 * Math.random() + 1);
        listeQte[i].value = qteAleatoire;

        const prixAleatoire = Math.floor(100 * Math.random() + 1);
        listePrix[i].value = prixAleatoire;
    }
    
}



function calculate() {
    var listePrix = document.getElementsByClassName("prix");
    var listeQte = document.getElementsByClassName("qte");
    var listeTtl = document.getElementsByClassName("totalLigne"); 
    
    var sousTotal = 0; 
    
    for (let i = 0; i < listePrix.length; i++) {
        const qte = parseInt(listeQte[i].value);
        const prix = parseFloat(listePrix[i].value);
        
        const totalLigne = isNaN(qte) || isNaN(prix) ? 0 : qte * prix;
        
        listeTtl[i].value = totalLigne.toFixed(2);
        
        sousTotal += totalLigne;
    }
    
    document.getElementById("sous_total_output").innerText = sousTotal.toFixed(2);
    

    const remiseInput = document.getElementById("remise_input").value;
    const fraisExpedition = parseFloat(document.getElementById("frais_expedition_input").value);
    
    const tauxImpositionStr = document.getElementById("taux_imposition_input").value.replace('%', '');
    const tauxImposition = parseFloat(tauxImpositionStr) / 100;
    
    const remise = parseFloat(remiseInput) / 100; // Si remise est un pourcentage
    const sousTotalApresRemise = sousTotal - (sousTotal * remise);
    document.getElementById("sous_total_remise_output").innerText = sousTotalApresRemise.toFixed(2);
    
    const taxeTotale = sousTotalApresRemise * tauxImposition;
    document.getElementById("taxe_totale_output").innerText = taxeTotale.toFixed(2);
    
    const solde = sousTotalApresRemise + taxeTotale + (isNaN(fraisExpedition) ? 0 : fraisExpedition);
    document.getElementById("solde_output").innerText = solde.toFixed(2) + "€";
}

function annuler() {
    alert("Fonction Annuler non implémentée.");
}

