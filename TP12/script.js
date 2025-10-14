function calcule_moyenne(){
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if(moyenne < 10){
        document.write("Redoublant");
         document.write("<br>")
         document.write('<a href="index.html">RETOUR</a>');
    }
    else if(moyenne < 12){
        document.write("Admis – Passable");
         document.write("<br>")
         document.write('<a href="index.html">RETOUR</a>');
    }
    else if(moyenne < 14){
        document.write("Admis – Bien");
         document.write("<br>")
         document.write('<a href="index.html">RETOUR</a>');
        
    }
    else{
        document.write(" Admis – Très bien ");
         document.write("<br>")
         document.write('<a href="index.html">RETOUR</a>');
    }
}


function temperature() {
    var n1 = prompt("Donner la première note :");

    if(n1 < 10){
        document.write("Froid");
        document.body.style.background = "blue";
         document.write("<br>")
         document.write('<a href="index.html">RETOUR</a>');
    }
    else if(n1 < 25){
        document.write("Normale");
        document.body.style.background = "green";
         document.write("<br>")
         document.write('<a href="index.html">RETOUR</a>');
    } 
    else{
        document.write("Chaud");
        document.body.style.background = "red";
         document.write("<br>")
         document.write('<a href="index.html">RETOUR</a>');
    }   
}

function grand(){

    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");


    if(n1 > n2){
        document.write("Voici le plus grands : " + n1 + "<br>");
        document.write("Voici le plus petit : " + n2 + "<br>");
         document.write("<br>")
         document.write('<a href="index.html">RETOUR</a>');
    }
    else{
        document.write("Voici le plus grands : " + n2 + "<br>");
        document.write("Voici le plus petit : " + n1 + "<br>");
         document.write("<br>")
         document.write('<a href="index.html">RETOUR</a>');
    }

}


