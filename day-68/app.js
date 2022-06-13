const wrapper = document.querySelector('.wrapper')
const micro = document.querySelector('.micro')
const dots = document.querySelector('.dots')

const loading = () => {
  wrapper.classList.toggle('start')
}
micro.addEventListener('click', loading)
dots.addEventListener('click', loading)