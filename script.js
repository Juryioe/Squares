const color = () => {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)]
  return color
}

function randomBoxSize(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const boxes = []

const handleButton = () => {
  const container = document.querySelector('.container')
  const box = document.createElement('div')
  const boxColor = color()
  container.style.visibility = 'visible'
  box.classList.add('box')
  box.style.backgroundColor = boxColor
  const randomSize = randomBoxSize(10, 150) + 'px'
  box.style.width = randomSize
  box.style.height = randomSize
  container.appendChild(box)
  boxes.push({ element: box, dimensions: randomSize, color: boxColor })
  console.log(boxes)
}
