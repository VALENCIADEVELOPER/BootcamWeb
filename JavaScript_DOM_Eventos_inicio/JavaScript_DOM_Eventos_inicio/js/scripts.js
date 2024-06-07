// query selector
const heading = document.querySelector('#heading'); // retorna 0 o un elemento 
heading.textContent = 'Nuevo heading';
heading.classList.add('NuevaClase');

//QuerySelectorAll - 

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[5]);
enlaces[0].textContent = 'Perrillo';
enlaces[0].classList.add('navegacion_enlace');
enlaces[0].classList.remove('navegacion_enlace');


//getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);