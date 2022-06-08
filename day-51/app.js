const resume = document.querySelector('.resume')
const pause = document.querySelector('.pause')
const digits = document.querySelector('.digits')

const toggleButton = (event) => {
  resume.classList.toggle('active')
  pause.classList.toggle('active')
  digits.classList.toggle('stop')

}
resume.addEventListener('click', toggleButton)
pause.addEventListener('click', toggleButton)