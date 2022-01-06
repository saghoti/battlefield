import Robot from "./Robot.js"

export default class T800 extends Robot {
  constructor(scene, x, y) {
    super(scene, 100, 150, {
      name: 'T-800',
      bulletSpeed: 10,
      faceDirection: 'right',
      sensorRadius: 300
    })

    this.setSensorRadius(3)
  }

  // run 2 times per second
  update = () => {
    // this.fire()
  }

  bulletSensor = (target) => {
    if (Math.abs(target.y - this.y) < 40) {
      this.y += 40
    }
  }
}