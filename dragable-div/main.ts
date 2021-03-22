// npx parcel index.html
// npx parcel build index.html --public-url=/typescript-learning/dragable-div/dist/

// var a: string = 'hi'
// console.log('hi')

const div = document.createElement('div')
div.style.border = '1px solid red'
div.style.height = '100px'
div.style.width = '100px'
div.id = 'demo'

document.body.appendChild(div)

let flag = false
let position = [0, 0]

div.onmousedown = e => {
  flag = true
  position = [e.clientX, e.clientY]
}

document.onmouseup = e => {
  flag = false
}

document.onmousemove = e => {
  if (flag) {
    const deltaX = e.clientX - position[0]
    const deltaY = e.clientY - position[1]
    const top = parseInt(div.style.top!) || 0
    const left = parseInt(div.style.left!) || 0
    div.style.top = `${top + deltaY}px`
    div.style.left = `${left + deltaX}px`
    position = [e.clientX, e.clientY]
  }
}
