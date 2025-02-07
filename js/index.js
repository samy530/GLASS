document.getElementById('input').addEventListener('change', function() {
    const round = document.getElementById('round');
    const back = document.body;
    const title = document.getElementById('titre');
    const btnContact = document.getElementById('contact');
    const btnContinuer = document.getElementById('continuer');
    title.classList.toggle("dark-titre");
    round.classList.toggle("dark-round"); 
    back.classList.toggle("dark-body");
    btnContact.classList.toggle("dark-btn");
    btnContinuer.classList.toggle("dark-continuer");

})