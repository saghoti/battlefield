import Robot from "./robots/Robot.js"

export default class Bullet extends Phaser.Physics.Matter.Sprite {
  constructor(scene, x, y, vx, vy) {
    super(scene.matter.world, x, y, 'bomb')

    this.name = 'bullet'
    this.setVelocity(vx, vy)
    scene.add.existing(this)

    scene.time.addEvent({
      delay: 50,
      callback: () => {
        if (!this) return
        this.setOnCollide((events) => {
          let otherObject = events.bodyA.gameObject
          if (events.bodyA.id === this.id) otherObject = events.bodyB.gameObject
    
          if (otherObject instanceof Robot) {
            otherObject.damage(10)
          }
          this.destroy()
        })
      }
    })
  }
}