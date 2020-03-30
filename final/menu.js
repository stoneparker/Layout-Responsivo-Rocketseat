let show = true;

const menuSection = document.querySelector('.menu-section');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {

     document.body.style.overflow = show ? 'hidden' : 'initial'; // analisa a variável declareda

     menuSection.classList.toggle('on', show); // toggle: EXISTE O ON ? TIRA : ADICIONA,     aquilo é um "true"
     show = !show; // show fica diferente do show atual!!!!
});