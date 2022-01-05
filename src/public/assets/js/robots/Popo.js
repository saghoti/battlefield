import Robot from "./Robot.js"

export default class Popo extends Robot {
  constructor(scene) {
    super(scene, 400, 350, {
      name: 'popo',
      bulletSpeed: 3,
      faceDirection: 'left'
    })
  }

  update = () => {
    this.y = Phaser.Math.Between(50, 550)
    this.fire()
  }
}