/*abrir menu mobile*/

const menu = document.querySelector(".nav__menu");
const openMenuBtn = document.querySelector(".header__openMenu");
const closeMenuBtn = document.querySelector(".header__closeMenu");

function togglemenu() {
   menu.classList.toggle("abrir-menu");
}

openMenuBtn.addEventListener("click", togglemenu);
closeMenuBtn.addEventListener("click", togglemenu);
//
//
//

//seccrion de produuctos (pan casero)
// Obtener los elementos de la ventana modal
const modal = document.getElementById("myModal");
const modalImg = document.querySelector(".modal__imagen");
const modalTitle = document.querySelector(".modal__titulo");
const modalDescription = document.querySelector(".modal__descripcion");
const closeModalBtn = document.querySelector(".modal-close");

// Obtener las tarjetas y agregar un evento de clic a cada una
const cards = document.querySelectorAll(".panCasero__card");
cards.forEach((card) => {
   card.addEventListener("click", () => {
      // Obtener la información de la tarjeta correspondiente
      const imgSrc = card
         .querySelector(".panCasero__card--image")
         .getAttribute("src");
      const title = card.querySelector(".panCasero__card--nombre").textContent;
      const description = card.querySelector(
         ".panCasero__card--descripcion"
      ).textContent;

      // Mostrar la ventana modal
      modal.style.display = "block";

      // Mostrar la información de la tarjeta en la ventana modal
      modalImg.setAttribute("src", imgSrc);
      modalTitle.textContent = title;
      modalDescription.textContent = description;
   });
});

// Agregar un evento de clic al botón de cerrar la ventana modal
closeModalBtn.addEventListener("click", () => {
   modal.style.display = "none";
});

// Agregar un evento de clic al área fuera de la ventana modal para cerrarla
window.addEventListener("click", (event) => {
   if (event.target == modal) {
      modal.style.display = "none";
   }
});
