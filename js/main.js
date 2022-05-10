const links = document.querySelectorAll('[data-tipo=item-menu]');
const sections = document.querySelectorAll('section');

const changeLinkState = () => {
  let index = sections.length;

  while(--index && window.scrollY +110 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();

window.addEventListener('scroll', changeLinkState);


/***** Calculo de presion al presionar Resumen *****/
const form_ticket = document.getElementById('form_ticket')

const calcularPrecio = () => {
  const cantidad = document.getElementById('cantidad').value
  const categoria = document.getElementById('categoria').value
  let precio = 200 * cantidad  

  if (categoria == 'E') {
    precio -= precio * 0.8
  } else if (categoria == 'T') {
    precio -= precio * 0.5
  } else if (categoria == 'J') {
    precio -= precio * 0.15
  }

  document.getElementById('total').innerHTML = precio
}

form_ticket.addEventListener('submit', e => {
  e.preventDefault()
  calcularPrecio()
})

form_ticket.addEventListener('reset', e => { 
  document.getElementById('total').innerHTML = '' 
})

document.getElementById('cantidad').addEventListener('change', e => {
  if(e.target.value < 1) {
    e.target.value = 1
  }
})