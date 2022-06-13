const CORRECT = 'password'
const input = document.querySelector('.input')
const wrapper = document.querySelector('.wrapper')
input.addEventListener('keyup', (event) => {
  if (event.target.value !== CORRECT) return
  wrapper.classList.add('open')
  // input.setAttribute('disabled', true)
})