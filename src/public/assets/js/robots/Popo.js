import Robot from "./Robot.js"

export default class Popo extends Robot {
  constructor(scene) {
    super(scene, 750, 150, {
      name: 'popo',
      bulletSpeed: 30,
      faceDirection: 'down',
      sensorRadius: 150
    })
  }

  update = () => {
    // this.y = Phaser.Math.Between(50, 550)
    this.clockwiseTurn(true)

    // if (this.invincible) {
    //   this.setFaceDirection('up')
    //   this.fire()
    //   this.setFaceDirection('down')
    //   this.fire()
    //   this.setFaceDirection('left')
    // }
  }

  bulletSensor = (target) => {
    if (Math.abs(target.x - this.x) <= 50) {
      if (this.x > 700) {
        this.x = 70
      } else {
        this.x += 70
      }
      if (target.y < this.y) {
        this.setFaceDirection('down')
      } else if (target.y > this.y) {
        this.setFaceDirection('up')
      }
    }

    if (Math.abs(target.y - this.y) <= 50) {
      if (this.y > 500) {
        this.y = 70
      } else {
        this.y += 70
      }
      if (target.x < this.x) {
        this.setFaceDirection('left')
      } else if (target.x > this.x) {
        this.setFaceDirection('right')
      } 
    }
  }

  clockwiseTurn(shoot = false) {
    switch(this.getFaceDirection()) {
      case 'up':
        this.setFaceDirection('right')
        break
      case 'right':
        this.setFaceDirection('down')
        break
      case 'down':
        this.setFaceDirection('left')
        break
      case 'left':
        this.setFaceDirection('up')
        break
    }
    if (shoot) {
      this.fire()
    }
  }
}