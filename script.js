
document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.querySelector('.like-button');
    const likeCount = document.getElementById('like-count');

    // Obtener el número inicial de "me gusta"
    fetch('/likes')
        .then(response => response.json())
        .then(data => {
            likeCount.textContent = data.likes;
        });

    // Evento de clic para registrar un "me gusta"
    likeButton.addEventListener('click', () => {
        fetch('/like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                likeCount.textContent = parseInt(likeCount.textContent) + 1;
                likeButton.classList.add('liked');
                setTimeout(() => {
                    likeButton.classList.remove('liked');
                }, 3000);
            } else {
                alert(data.message);
            }
        });
    });
});

fetch('https://likes-system-backend.vercel.app')
    .then(response => response.json())
    .then(data => {
    console.log('Número de likes:', data.likes);
    // Actualizar la interfaz con la información recibida
})
    .catch(error => {
    console.error('Error:', error);
});
//ESTE CONTENIDO ES PARA EL BARS DE LA DERECHA SUPERIOR
/*/
// Obtener los elementos
const menuButton = document.getElementById('menu-button');
const sideMenu = document.getElementById('side-menu');
const closeButton = document.getElementById('close-button');
const sideMenuBlur = document.querySelector('.side-menu-blur');

// Agregar evento al botón de menú
menuButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Alternar la clase 'open' en el menú y en el botón
    sideMenu.classList.toggle('open');
    menuButton.classList.toggle('open');

    // Alternar el icono entre barras y equis
    if (menuButton.classList.contains('open')) {
        menuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Cerrar el menú al hacer clic en el botón de cerrar o en el área difuminada
closeButton.addEventListener('click', function(event) {
    event.preventDefault();
    sideMenu.classList.remove('open');
    menuButton.classList.remove('open');
    menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
});

sideMenuBlur.addEventListener('click', function() {
    sideMenu.classList.remove('open');
    menuButton.classList.remove('open');
    menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
});
*/
