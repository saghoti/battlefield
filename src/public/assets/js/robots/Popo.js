import Robot from "./Robot.js"

export default class Popo extends Robot {
  constructor(scene, x, y) {
    super(scene, x, y, {
      name: 'popo',
      bulletSpeed: 3,
      faceDirection: 'left'
    })
  }

  update = () => {
    // this.fire()
  }
}