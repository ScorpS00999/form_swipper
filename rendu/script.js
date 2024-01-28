"use strict";

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}




let valider = document.querySelector('#valider');

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;


function formulaire(e) {
    //identité
    e.preventDefault();

    //identité
    let prenom = document.querySelector('#prenom').value;
    let nom = document.getElementById('nom').value;
    let mdp = document.getElementById('mdp').value;
    let mail = document.getElementById('mail').value;

    let mdpErreur = document.querySelector("#mdpErreur")



    //mot de passe
    if (!regex.test(mdp.value)) {
        mdpErreur.textContent = "Le mot de passe ne respecte pas les critères requis.";
    } else {
        mdpErreur.textContent ="";
    }


    //genre
    let genre;
    let genres = document.getElementsByName('genre');
    for (let i = 0; i < genres.length; i++) {
        if (genres[i].checked) {
            genre = genres[i].value;
            break
        }
    }

    //pays
    let pays = document.getElementById('pays').value;

    //activite
    let activites = document.getElementsByName('choix');
    let nbr_activite = 0;
    let activiteErreur = document.querySelector('#activiteErreur')
    for (let i = 0; i < activites.length; i++) {
        if (activites[i].checked) {
            nbr_activite += 1;
        }
    }
    if (nbr_activite < 3) {
        activiteErreur.textContent = "Veuillez selectionner au moins 3 activtés"
    } else {
        activiteErreur.textContent ="";
    }

    let anniv = document.querySelector('#date_anniv').value;

    let adresse = document.querySelector('#adresse').value;
    let tel = document.querySelector('#telephone').value;


    //retranscrire les informations
    let prenom_info = document.querySelector('#prenom_info');
    let nom_info = document.querySelector('#nom_info');
    let mail_info = document.querySelector('#mail_info');
    let genre_info = document.querySelector('#genre_info');
    let pays_info = document.querySelector('#pays_info');
    let anniv_info = document.querySelector('#anniv_info')
    let adresse_info = document.querySelector('#adresse_info');
    let tel_info = document.querySelector('#tel_info');

    prenom_info.textContent(prenom);
    nom_info.append(nom);
    mail_info.append(mail);
    genre_info.append(genre);
    pays_info.append(pays);
    anniv_info.append(anniv);
    adresse_info.append(adresse);
    tel_info.append(tel);
}



// Fonction pour click sur valider 
valider.addEventListener("click", formulaire);




let darkMode = document.querySelector("#Dark_Mode");
let DM = 0;

function DarkMode() {
    let body = document.querySelector('body');
    if (DM == 0) {
        body.style.background = 'black';
        body.style.color = 'white';
        DM = 1;
    }
    else{
        body.style.background = 'white';
        body.style.color = 'black';
        DM = 0;
    }
}


darkMode.addEventListener("click", DarkMode);