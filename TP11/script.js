function calcul_moyenne() {
    var n1 = prompt("Donner la premiere note :");
    var n2 = prompt("Donner la deuxieme note :");
    var n3 = prompt("Donner la troisiéme note :");
    

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Vous n'etes pas admis");

    }
    else{
        document.write("Vous etes admis");
    }


}

function simple_affichage() {
    let name = prompt("Donner Votre nom");
    let prenom = prompt("Donner Votre prenom");

    document.write('<div style="margin:auto; width:300px; border:2px solid blue;">');
    document.write("Bonjour "  + prenom + " " + name)
    document.write('</div>');
}


function test_age() {
    let age = prompt("quelle est votre âge ?");
    if (age < 18) {
        document.write("Vous Etes mineur");
        document.bgColor="red"
    }

    else {
        document.write("Vous ets majeur");
        document.bgColor="green"
    }
}


function test_couleur() {
    let couleur = prompt("Donner un couleur")
    if (couleur == "rouge" || couleur == "red") {
        document.body.style.backgroundColor = "red"
    }
    else if (couleur == "vert" || couleur == "green") {
        document.body.style.backgroundColor = "green"
    }
    else if (couleur == "bleu" || couleur == "blue") {
        document.body.style.backgroundColor = "blue"
    }
    else if (couleur == "rose" || couleur == "pink") {
        document.body.style.backgroundColor = "pink"
    }
    else {
        document.write("couleur non comprise")
    }

}