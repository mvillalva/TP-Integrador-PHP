window.addEventListener('load', () => {

  let items = document.querySelectorAll('[data-tipo=item-menu]')
  
  items.forEach((e) => {

    e.addEventListener('click', t => {

      document.querySelectorAll('[data-tipo=item-menu]').forEach( e => e.classList.remove('active') )
      t.target.classList.add('active')

    })

  })

}, false);


