document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.querySelector('.like-button');
    const likeCount = document.getElementById('like-count');

    // Cargar el número de "me gusta" desde localStorage
    let likes = localStorage.getItem('likes') || 0;
    likeCount.textContent = likes;

    // Evento de clic para incrementar el número de "me gusta"
    likeButton.addEventListener('click', () => {
        likes++;
        likeCount.textContent = likes;
        localStorage.setItem('likes', likes);

        // Cambiar el color del ícono a rojo
        likeButton.classList.add('liked');

        // Volver al color original después de 3 segundos
        setTimeout(() => {
            likeButton.classList.remove('liked');
        }, 300);
    });
});
