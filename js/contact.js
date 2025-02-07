let avis = [
    {
        nom: "AMINE",
        email: "amine@gmail.com",
        commentaire: "Excellent travail."
    },
    {
        nom: "SANDRA",
        email: "sandra@gmail.com",
        commentaire: "Pas mal votre site."
    },
    {
        nom: "SAMY",
        email: "samy@gmail.com",
        commentaire: "Grâce à ce site, j'ai compris comment structurer ma page web."
    },
    {
        nom: "LAMIA",
        email: "lamia@gmail.com",
        commentaire: "Excellent site merci pour votre aide."
    },
    {
        nom: "GHILES",
        email: "ghiles@gmail.com",
        commentaire: "Le contenu est incroyable bravo."
    }
];

function genererAvis(avis) {
    const asideElement = document.querySelector(".commentaire_container");
    asideElement.innerHTML = "";

    for (let i = 0; i < avis.length; i++) {
        const avisEnCours = avis[i];

        const cmt = document.createElement("div");
        cmt.classList.add("cmt");

        const nomElement = document.createElement("h4");
        nomElement.innerText = avisEnCours.nom;

        const emailElement = document.createElement("h5");
        emailElement.innerText = '(' + avisEnCours.email + ')' + ' :';

        const commentaireElement = document.createElement("p");
        commentaireElement.innerText = avisEnCours.commentaire;

        cmt.appendChild(nomElement);
        cmt.appendChild(emailElement);
        cmt.appendChild(commentaireElement);

        asideElement.appendChild(cmt);
    }
}

function ecouterSoumissionFormulaire() {
    const formulaire = document.querySelector(".section-contact form");

    formulaire.addEventListener("submit", function (event) {
        event.preventDefault();

        const nom = document.querySelector("[name=nom]").value;
        const email = document.querySelector("[name=email]").value;
        const commentaire = document.querySelector("[name=message]").value;

        const nouvelAvis = {
            nom: nom,
            email: email,
            commentaire: commentaire
        };

        avis.push(nouvelAvis);

        formulaire.reset();

        genererAvis(avis);
    });
}

genererAvis(avis);
ecouterSoumissionFormulaire();
