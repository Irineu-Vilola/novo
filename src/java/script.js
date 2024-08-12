/**
   Preload toda configuração do preload.
   */
   const preloader = document.querySelector('#preloader');
   if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
   }
   
   
   
const menuDiv = document.getElementById('menu-mobile');
const btnAnimar = document.getElementById('btn-menu');

    menuDiv.addEventListener('click', animarMenu)

function animarMenu(){

    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
    }


    
// Seleciona todos os botões que abrem e fecham o modal
const openButtons = document.querySelectorAll('.open-modal');
const closeButtons = document.querySelectorAll('.close-modal');

// Percorre cada botão de abrir e adiciona o evento de click
openButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Pega o id do modal que o botão abre
        const modalId = button.getAttribute('data-modal');

        // Pega o modal pelo id
        const modal = document.getElementById(modalId);

        // Abre o modal
        modal.showModal();
    });
});

// Percorre cada botão de fechar e adiciona o evento de click
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Pega o id do modal que o botão fecha
        const modalId = button.getAttribute('data-modal');

        // Pega o modal pelo id
        const modal = document.getElementById(modalId);

        // Fecha o modal
        modal.close();
    });
});



