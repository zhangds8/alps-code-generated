/**
 * 产生随机整数
 * @param {} low
 * @param {*} high
 */
function randomIntFromRange (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)
}

/**
 * 产生随机颜色
 * @param {} colors
 */
function randomColor (colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

let colorArray = [
  '#4CBF88',
  '#F2B134',
  '#6F4A70',
  '#FF6275',
  '#00B5C4'
]

let Gravity = 0.8
let Friction = 0.9

function Ball (x, y, dx, dy, radius, color, ctx) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.color = color
  this.ctx = ctx

  this.draw = function () {
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.closePath()
  }

  this.update = function () {
    if (this.y + this.radius + this.dy + Gravity > window.innerHeight) {
      this.dy = -this.dy
      this.dy *= Friction
      this.dx *= Friction
    } else {
      this.dy += Gravity
    }

    if (this.x + this.radius + this.dx >= window.innerWidth ||
      this.x - this.radius + this.dx <= 0) {
      this.dx = -this.dx
    }
    this.x += this.dx
    this.y += this.dy
    this.draw()
  }
}

let ballArray

export function init (width, height, ctx) {
  ballArray = []
  for (let i = 0; i < 200; i++) {
    let radius = 2
    let x = randomIntFromRange(radius, width - radius)
    let y = randomIntFromRange(radius, height - radius)
    let dx = randomIntFromRange(-5, 5)
    let dy = randomIntFromRange(1, 2)
    let color = randomColor(colorArray)
    ballArray.push(new Ball(x, y, dx, dy, radius, color, ctx))
  }
}

export function animate () {
  requestAnimationFrame(animate)
  for (let ball of ballArray) {
    ball.update()
  }
}
