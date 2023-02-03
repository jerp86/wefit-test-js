const changeMenuToHorizontal = () => {
  const divMenu = document.querySelector('.btn-group-vertical')
  divMenu.setAttribute('class', 'btn-group-horizontal')
  divMenu.setAttribute('aria-label', 'Horizontal button group')
}

const changeButtonHeader = () => {
  const buttonHeader = document.querySelector('a.btn.btn-primary.btn-lg')
  buttonHeader.classList.remove('btn-primary')
  buttonHeader.classList.add('btn-success')
}

const changeHeaderStyles = () => {
  const header = document.querySelector('.jumbotron')
  header.classList.add('text-right')
  header.style.cssText = `
    background-color: var(--gray);
    color: var(--white);
  `
}

const changeHeaderBox = () => {
  changeButtonHeader()
  changeHeaderStyles()
}

changeMenuToHorizontal()
changeHeaderBox()