const changeMenuToHorizontal = () => {
  const divMenu = document.querySelector('.btn-group-vertical')
  divMenu.setAttribute('class', 'btn-group-horizontal')
  divMenu.setAttribute('aria-label', 'Horizontal button group')
}

changeMenuToHorizontal()