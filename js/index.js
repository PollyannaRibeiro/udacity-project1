//responsive menu

var menu = document.querySelector('#menu-icon');
var main = document.querySelector('main');
var drawer = document.querySelector('#menu-responsive-mobile');

menu.addEventListener("click", function(e){
    drawer.classList.toggle("open");
    e.stopPropagation();
});
main.addEventListener('click', function() {
    drawer.classList.remove('open');
});