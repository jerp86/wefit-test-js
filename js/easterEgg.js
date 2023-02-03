const secretCode = 'wefit'
let timer
let listString = []

window.addEventListener('keydown', (event) => {
	clearTimeout(timer)
	const keyPressed = event.key
	
  if (['Shift', 'CapsLock'].includes(keyPressed)) return

	listString.push(keyPressed)
	
	const sentence = listString.join('')

	if(sentence.toLowerCase().includes(secretCode)) {
		document.querySelector('#easter-egg').dataset.status = 'active'
		listString = []
	}
	
	timer = setTimeout(function() {
		listString = []		
	}, 1000)
})
