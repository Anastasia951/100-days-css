const dashboard = document.querySelector('.dashboard')
const burger = document.querySelector('.burger')
const notifications = document.querySelector('.notifications')
const search = document.querySelector('.search')
const input = document.querySelector('.input')

const showDashboard = () => {
  notifications.classList.toggle('moved')
  dashboard.classList.toggle('visible')
}
const showInput = () => {
  input.classList.toggle('visible')
}
burger.addEventListener('click', showDashboard)
search.addEventListener('click', showInput)