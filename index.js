document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form');
    const newsLetter = document.querySelector('.visible');
    const confirmation = document.getElementById('hidden');
    const error = document.getElementById('error');
    const email = document.getElementById('email');
    const button = document.getElementById('dismiss');
    const btn = document.getElementById('btn');
    error.style.display = "none";

    btn.addEventListener('click', (event) => {
        const emailInput = email.value.trim();  // Récupérer la valeur de l'email au moment de l'événement
        console.log(emailInput);

        if (emailInput === '') {
            error.textContent = 'Veuillez entrer une adresse e-mail valide';
            error.style.display = "block"; 
            email.style.backgroundColor = '#FF6155';
            console.log(emailInput);
            event.preventDefault();
        
        } else if (!emailInput.includes('@')) {
            error.textContent = 'Veuillez entrer une adresse e-mail valide';
            error.style.display = 'block';
            email.style.backgroundColor = '#FF6155';
            console.log(emailInput);
            event.preventDefault();
        
        } else if (!emailInput.split('@')[1].includes(".")) {
            error.textContent = 'Veuillez entrer une adresse e-mail valide';
            error.style.display = 'block';
            email.style.backgroundColor = '#FF6155';
            console.log(emailInput);
            event.preventDefault();
        
        } else {
            error.style.display = "none";
            email.style.backgroundColor = '';
            newsLetter.style.display = "none"; 
            confirmation.style.display = "block";
            event.preventDefault();
        }
    });

    button.addEventListener('click', (event) => {
        confirmation.style.display = "none";
        newsLetter.style.display = "block";
    });
});
