import Bullet from "../Bullet.js"

export default class Robot extends Phaser.GameObjects.Container {
  constructor(scene, x, y, config = {}) {
    super(scene, 0, 0)

    this.id = `${this.name}-${Date.now()}`
    this.name = config.name ?? `defaultName-${this.id}`
    // sprite and render
    const sprite = scene.add.sprite(0, -4, 'robot', 0)
    this.add(sprite)
    const nameText = scene.add.text(0, -57, this.name, {
      fill: '#000'
    }).setOrigin(.5, 0)
    this.add(nameText)
    const lifeBar = scene.add.rectangle(0, -35, 50, 5, 0x00ff00, 1)
    this.add(lifeBar)
    const bulletCountText = scene.add.text(0, 35, '100', {
      fill: '#000'
    }).setOrigin(.5, 0)
    this.add(bulletCountText)
    const rope = scene.add.rope(0, 0, 'robot', 0)
    rope.setColors(0xf71b1b)
    rope.setVisible(false)
    this.add(rope)

    // state
    let life = 100
    let bulletCount = 100
    let lastHitDirection = 'none'
    let invincible = false
    let faceDirection = config.faceDirection ?? 'down'
    let bulletSpeed = config.bulletSpeed < 9 ? 9 : config.bulletSpeed
    const targets = new Map()

    // matter body
    const Matter = Phaser.Physics.Matter.Matter
    const collideBody = Matter.Bodies.rectangle(0, 0, 40, 56)
    const sensor = Matter.Bodies.circle(0, 0, 60, { isSensor: true })
    const compoundBody = Matter.Body.create({
      parts: [ collideBody, sensor ]
    })
    scene.matter.add.gameObject(this, compoundBody)
    scene.matter.body.setInertia(this, Infinity)
    scene.add.existing(this)

    sensor.onCollideCallback = (events) => {
      let target = events.bodyB.gameObject
      if (!target || !events.bodyA.gameObject) return
      if (events.bodyA.gameObject.id !== this.id) return

      if (target instanceof Robot) {
        targets.set(target.id, target)
      }
    }

    sensor.onCollideEndCallback = (events) => {
      let target = events.bodyB.gameObject
      if (!target || !events.bodyA.gameObject) return
      if (events.bodyA.gameObject.id !== this.id) return

      if (target instanceof Robot) {
        targets.delete(target.id)
      }
    }

    // methods
    this.getFirstTarget = () => {
      const [first] = targets.keys()
      return targets.get(first)
    }

    this.hasTarget = () => {
      return targets.size > 0
    }

    this.setSensorRadius = (radius) => {
      sensor.circleRadius = radius
    }

    this.getSensorRadius = () => {
      return sensor.circleRadius
    }

    this.setName = (name) => {
      this.name = name
      nameText.text = name
    }

    this.setFaceDirection = (direction) => {
      faceDirection = direction
      sprite.anims.play(`robot-idle-${direction}`)
    }

    this.getFaceDirection = () => {
      return faceDirection
    }

    this.fire = () => {
      if (bulletCount <= 0) return
      let vx = 0
      let vy = 0
      if (faceDirection === 'left') {
        vx = -bulletSpeed
      } else if (faceDirection === 'right') {
        vx = bulletSpeed
      } else if (faceDirection === 'up') {
        vy = -bulletSpeed
      } else if (faceDirection === 'down') {
        vy = bulletSpeed
      }
      
      new Bullet(scene, this.x, this.y, vx, vy)
      bulletCount--
      bulletCountText.text = bulletCount
    }

    this.damage = (value) => {
      invincible = true
      rope.setVisible(true)
      life -= value
      lifeBar.width -= (value * 0.5)

      if (life <= 20) {
        lifeBar.setFillStyle(0xf71b1b)
      } else if (life <= 50) {
        lifeBar.setFillStyle(0xf7bd1b)
      }

      if (life <= 0) {
        this.dispose()
      } else {
        scene.time.addEvent({
          delay: 300,
          callback: () => {
            rope.setVisible(false)
          }
        })
      }
    }

    this.update = () => {}

    const lifeCycle = scene.time.addEvent({
      delay: 500,
      callback: () => {
        this.update()
      },
      loop: true
    })

    this.dispose = () => {
      lifeCycle.remove(false)
      sprite.setVisible(false)
      rope.setColors(0x707070)
      rope.flipY = true
      this.body.destroy()
    }

    // init
    this.x = x
    this.y = y
    this.setFaceDirection(faceDirection)
  }
}