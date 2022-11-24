let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let tabMots = ["vendre", "russie", "stylo", "langue", "batteries", "Cosmique"];
let essais = 5;
let lettres_restantes = 'abcdefghijklmnopqrstuvwxyz';

let mot_a_deviner;
let affichage;
let lettre_jouee;
let jeu_en_cours = true;
let victoire = false;
let nb_essais_restants = essais;

lettres_restantes = alphabet;



function choix_de_mot() {
    let nombre = Math.round(Math.random() * (tabMots.length - 1));
    mot_a_deviner = tabMots[nombre];

}
choix_de_mot();

function contient(lettre, mot) {
    let sortie;

    for (i = 0; i < mot.length; i++) {
        if (mot[i] == lettre) {
            sortie = true;
            break;
        }
        else {
            sortie = false;
        }
    }
    return sortie;
}

function mot_a_afficher(mot, lettres_restantes) {
    let mot_final = "";
    for (let i = 0; i < mot.length; i++) {
        if (contient(mot[i], lettres_restantes)) {
            mot_final += "-";
        }
        else {
            mot_final += mot[i];
        }
    }
    return mot_final;
}


affichage = mot_a_afficher(mot_a_deviner, lettres_restantes);

function affiche_mot(mot) {
    alert(mot);
}

function actualise_lettre(lettre_jouee) {
    let chaine = "";
    for (i = 0; i < lettres_restantes.length; i++) {
        if (lettre_jouee != lettres_restantes[i]) {
            chaine += lettres_restantes[i];
        }
    }
    return chaine
}

function test_victoire(mot_a_deviner, affichage) {
    let result = false;
    if (affichage == mot_a_deviner) {
        result = true;
    }
    return result;
}

function saisie_lettre() {
    let lettre = prompt("écrire une lettre");
    return lettre;
}

function continuer_jeu() {
    let result;
    if (victoire) {
        result = false;
    } else if (nb_essais_restants == 0) {
        result = false;
    } else {
        result = true;
    }
    return result;
}

while (jeu_en_cours) {

    affiche_mot(affichage);

    lettre_jouee = saisie_lettre();

    lettres_restantes = actualise_lettre(lettre_jouee);

    if (contient(lettre_jouee, mot_a_deviner) == false) {
        nb_essais_restants--;
        alert("Il ne vous reste que " + nb_essais_restants + " essais")
    }
    affichage = mot_a_afficher(mot_a_deviner, lettres_restantes);

    victoire = test_victoire(mot_a_deviner, affichage);

    jeu_en_cours = continuer_jeu();
}

if (victoire) {
    alert("Victoire !");
}
else {
    alert("Perdu !");
}