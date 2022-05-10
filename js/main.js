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

document.getElementById('cantidad').addEventListener('change', e => {
  if(e.target.value < 1) {
    e.target.value = 1
  }
})

const form_ticket = document.getElementById('form_ticket')

form_ticket.addEventListener('submit', e => {
  e.preventDefault()

  const cantidad = document.getElementById('cantidad').value
  const categoria = document.getElementById('categoria').value
  let precio = 200 * cantidad
  let total = 0.00

  if (categoria == 'E') {
    total = precio - (precio * 0.8)
  } else if (categoria == 'T') {
    total = precio - (precio * 0.5)
  } else if (categoria == 'J') {
    total = precio - (precio * 0.15)
  } else {
    total = precio
  }

  document.getElementById('total').innerHTML = total

})

form_ticket.addEventListener('reset', e => { 
  document.getElementById('total').innerHTML = '' 
})