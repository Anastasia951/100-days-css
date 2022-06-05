const burger = document.querySelector('.burger')
const burgerHandler = (event) => {
  burger.classList.toggle('active')
}
burger.addEventListener('click', burgerHandler)