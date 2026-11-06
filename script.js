document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnClick');
    const message = document.getElementById('message');

    // Ajout d'un compteur de clics par Alice
    let compteur = 0;
    btn.addEventListener('click', () => {
        compteur++;
        message.textContent = `Bravo ! Vous avez cliqué ${compteur} fois.`;
    });
});