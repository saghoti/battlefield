import Robot from "./Robot.js"

export default class Popo extends Robot {
  constructor(scene) {
    super(scene, 400, 400, {
      name: 'popo',
      bulletSpeed: 10,
      faceDirection: 'down',
      sensorRadius: 100
    })

    this.targets = new Map()
    this.findEnemy(scene)
  }

  findEnemy = (scene) => {
    const act = scene.matter.add.circle(400, 300, 800, {isSensor: true})
    act.onCollideCallback = (events) => {
      let body = events.bodyA
      if (body.id === act.id) body = events.bodyB

      if (body.gameObject && body.gameObject instanceof Robot) {
        if (body.gameObject.name === this.name) return
        this.targets.set(body.gameObject.name, body.gameObject)
      }
    }
    scene.time.addEvent({
      delay: 100,
      callback: () => {
        scene.matter.world.remove(act)
      }
    })
  }

  update = () => {
    if (this.targets.size <= 0) return

    const [first] = this.targets.keys()
    const target = this.targets.get(first)
    if (!target.isDead()) {
      this.snipe(target)
    } else {
      this.targets.delete(target.name)
    }
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

  snipe(target) {
    if (target.getFaceDirection() === 'up' || target.getFaceDirection() === 'down') {
      this.y = target.y
      if (target.x + 100 < 500) {
        this.x = target.x + 150
        this.setFaceDirection('left')
      } else {
        this.x = target.x - 150
        this.setFaceDirection('right')
      }
      this.fire()
    } else {
      this.x = target.x
      if (target.y + 100 < 400) {
        this.y = target.y + 150
        this.setFaceDirection('up')
      } else {
        this.y = target.y - 150
        this.setFaceDirection('down')
      }
      this.fire()
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