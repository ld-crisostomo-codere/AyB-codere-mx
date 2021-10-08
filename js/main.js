window.onload = function () {
  $('#onload').hide();
  $('body').removeClass('hidden');
  AOS.init();

  setTimeout( function(){
    promModal.show();
  }, 500);

}



let promModal = new bootstrap.Modal(document.getElementById('exampleModal'))
let catSelect = '';
let cat1 = document.querySelector('#cat1');
let cat2 = document.querySelector('#cat2');
let cat3 = document.querySelector('#cat3');

cat1.addEventListener("click", catSelected);
cat2.addEventListener("click", catSelected);
cat3.addEventListener("click", catSelected);

function catSelected() {
  catSelect = this.value;
  console.log('Val: ', this.value);
  console.log('Cat: ', catSelect);
}