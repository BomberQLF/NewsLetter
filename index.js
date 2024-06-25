document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form');
    const newsLetter = document.querySelector('.visible');
    const confirmation = document.getElementById('hidden');
    const error = document.getElementById('error');
    const email = document.getElementById('email');
    const button = document.getElementById('dismiss');
    error.style.display = "none";

    form.addEventListener('submit', (event) => {
        const emailInput = email.value.trim();
        if (emailInput === '') {
            error.textContent = 'Veuillez entrer une adresse e-mail valide';
            error.style.display = "block"; 
            email.style.backgroundColor = '#FF6155';
            event.preventDefault();
        
        } else if (!emailInput.includes('@')) {
            error.textContent = 'Veuillez entrer une adresse e-mail valide';
            error.style.display = 'block';
            email.style.backgroundColor = '#FF6155';
            event.preventDefault();
        } 
        
        else if (!emailInput.includes('.')) {
            error.textContent = 'Veuillez entrer une adresse e-mail valide';
            error.style.display = 'block';
            email.style.backgroundColor = '#FF6155';
            event.preventDefault();
        }
        
        else {
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
