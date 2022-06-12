const input = document.querySelector('input')
const text = document.querySelector('.text')

for (let i = 0; i < 3; i++) {
  const hint = document.createElement('div')
  hint.classList.add('hint')
  text.append(hint)
}
function showHints(event) {
  const value = event.target.value
  if (value.trim()) {
    text.classList.add('visible')
    text.children[0].innerHTML = `
      <b>${value}</b>
    `
    text.children[1].innerHTML = `
      Did you mean <b>${value}</b>?
    `
    text.children[2].innerHTML = `
      More about <b>${value}</b>
    `
  } else {
    text.classList.remove('visible')
  }
}
input.addEventListener('keyup', showHints)