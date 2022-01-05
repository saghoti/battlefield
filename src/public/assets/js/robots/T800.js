import Robot from "./Robot.js"

export default class T800 extends Robot {
  constructor(scene, x, y) {
    super(scene, x, y, {
      name: 'T-800',
      bulletSpeed: 10,
      faceDirection: 'right'
    })
  }

  // run 2 times per second
  update = () => {
    // this.fire()
  }
}