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
