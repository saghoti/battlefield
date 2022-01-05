import Robot from "./Robot.js"

export default class T800 extends Robot {
  constructor(scene, x, y) {
    super(scene, x, y, {
      name: 'T-800',
      bulletSpeed: 10,
      faceDirection: 'right'
    })

    // this.moveSpeed = 5
    // this.moveSpeedY = 20
    // this.moveX = -this.moveSpeed
    // this.moveY = this.moveSpeedY
  }

  // run 2 times per second
  update = () => {
    // this.fire()

    //   if (this.hasTarget()) {
    //     const target = this.getFirstTarget()
    //     if (target.y + 10 < this.y) this.y -= this.moveSpeed
    //     else if (target.y - 10 > this.y) this.y += this.moveSpeed
    //     else if (target.x < this.x) {
    //       this.setFaceDirection('left')
    //       this.fire()
    //     }
    //     else if (target.x > this.x) {
    //       this.setFaceDirection('right')
    //       this.fire()
    //     }
    //   } else {
    //     if (this.x < 35) {
    //       this.setFaceDirection('right')
    //       this.moveX = this.moveSpeed
    //       this.y += this.moveY
    //     } else if (this.x > 765) {
    //       this.setFaceDirection('left')
    //       this.moveX = -this.moveSpeed
    //       this.y += this.moveY
    //     }

    //     if (this.y < 35) {
    //       this.moveY = this.moveSpeedY
    //     } else if (this.y > 565) {
    //       this.moveY = -this.moveSpeedY
    //     }

    //     this.x += this.moveX
    //   }
  }
}