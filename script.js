document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.open-button');
    const card = document.querySelector('.card');
    const music = document.getElementById('music');

    openButton.addEventListener('click', () => {
     
        music.play();

        
        card.classList.add('open');
        
        
        setTimeout(() => {
            openButton.style.display = 'none';
        }, 1000); // siempre me preocupo 
    });
});
