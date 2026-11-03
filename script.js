document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnClick');
    const message = document.getElementById('message');

    btn.addEventListener('click', () => {
        message.textContent = "Bravo ! Le fichier JavaScript s'exécute correctement.";
    });
});