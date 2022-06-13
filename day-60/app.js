const orange = document.querySelector('.orange')
const wrapper = document.querySelector('.wrapper')
const { y: wrapperY } = wrapper.getBoundingClientRect()

const throttle = (func, ms) => {
  let canDoAgain = true
  function wrapper(...args) {
    if (canDoAgain) {
      canDoAgain = false
      func.call(this, args)
      setTimeout(() => canDoAgain = true, ms)
    }
  }
  return wrapper
}

let mouseMoveHandler = ([event]) => {
  const { clientY } = event
  orange.style.height = `${clientY - wrapperY}px`
}

mouseMoveHandler = throttle(mouseMoveHandler, 50)

wrapper.addEventListener('mousemove', mouseMoveHandler)
wrapper.addEventListener('mouseleave', (event) => {
  orange.style.height = `50%`
})