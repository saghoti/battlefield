import Robot from "./Robot.js"

export default class Popo extends Robot {
  constructor(scene) {
    super(scene, 750, 150, {
      name: 'popo',
      bulletSpeed: 9,
      faceDirection: 'left',
      sensorRadius: 150
    })
  }

  update = () => {
    this.y = Phaser.Math.Between(50, 550)
    this.fire()

    // if (this.invincible) {
    //   this.setFaceDirection('up')
    //   this.fire()
    //   this.setFaceDirection('down')
    //   this.fire()
    //   this.setFaceDirection('left')
    // }
  }

  bulletSensor = () => {
    console.log('bullet!')
  }
}