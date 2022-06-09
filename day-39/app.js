const links = document.querySelectorAll('a')
const ul = document.querySelector('ul')
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    ul.classList.add('close')
  })
})
ul.addEventListener('click', (event) => {
  if (event.target.tagName == 'A') return
  ul.classList.remove('close')
})