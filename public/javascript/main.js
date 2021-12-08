window.onload = function () {
  $('#onload').hide();
  $('body').removeClass('hidden');
  $('header').removeClass('hidden2');
  AOS.init();

  setTimeout( function(){
    promModal.show();
  }, 500);

}



let promModal = new bootstrap.Modal(document.getElementById('exampleModal'))
let desayunos = document.querySelector('#slideDesayunos');
let comidas = document.querySelector('#slideComidas');
let bebidas = document.querySelector('#slideBebidas');
let extras = document.querySelector('#slideExtras');

desayunos.addEventListener("click", () => { document.location.href="./desayuno.html" });
comidas.addEventListener("click", () => { document.location.href="./comida.html" });
bebidas.addEventListener("click", () => { document.location.href="./bebidas.html" });
extras.addEventListener("click", () => { document.location.href="./extras.html" });
