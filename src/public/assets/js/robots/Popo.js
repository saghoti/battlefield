import Robot from "./Robot.js"

export default class Popo extends Robot {
  constructor(scene, x, y) {
    super(scene, x, y, {
      name: 'popo',
      bulletSpeed: 3,
      faceDirection: 'left'
    })

    this.setSensorRadius(100)
    this.moveSpeed = 5
    this.moveX = -moveSpeed
    this.moveY = moveSpeed
  }

  update = () => {
    if (this.hasTarget()) {
      const target = this.getFirstTarget()
      if (target.y + 10 < this.y) this.y -= moveSpeed
      else if (target.y - 10 > this.y) this.y += moveSpeed
      else if (target.x < this.x) {
        this.setFaceDirection('left')
        this.fire()
      }
      else if (target.x > this.x) {
        this.setFaceDirection('right')
        this.fire()
      }
    } else {
      if (this.x < 35) {
        this.setFaceDirection('right')
        this.moveX = moveSpeed
        this.y += this.moveY
      } else if (this.x > 565) {
        this.setFaceDirection('left')
        this.moveX = -moveSpeed
        this.y += this.moveY
      }

      if (this.y < 35) {
        this.moveY = moveSpeed
      } else if (this.y > 565) {
        this.moveY = -moveSpeed
      }

      this.x += this.moveX
    }
  }
}