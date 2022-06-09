document.addEventListener('click', (event) => {
  if (event.target.classList.contains('block')) {
    event.target.classList.toggle('active')
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const n = 20
  const fill = [129, 130, 148, 149, 150, 151, 167, 168, 169, 170, 171, 172, 186, 187, 189, 190, 192, 193, 206, 207, 208, 209, 210, 211, 212, 213, 228, 231, 247, 249, 250, 252, 266, 268, 271, 273]
  const checkboxes = document.querySelector('.checkboxes')
  for (let i = 0; i < n * n; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    if (fill.indexOf(i) !== -1) {
      block.classList.add('active')
    }
    checkboxes.append(block)
  }
})