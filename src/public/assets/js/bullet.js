import Robot from "./robots/Robot.js"

export default class Bullet extends Phaser.Physics.Matter.Sprite {
  constructor(scene, x, y, vx, vy, shooter) {
    super(scene.matter.world, x, y, 'bomb')

    this.name = 'bullet'
    this.shooter = shooter
    this.destroyReady = false
    this.setVelocity(vx, vy)
    scene.add.existing(this)

    scene.time.addEvent({
      delay: 50,
      callback: () => {
        if (!this) return
        if (this.destroyReady) {
          this.destroy()
          return
        }
        
        this.setOnCollide((events) => {
          // if (events.bodyA.id === this.id)
          // let otherObject = events.bodyA.gameObject
          // if (events.bodyA.id === this.id) otherObject = events.bodyB.gameObject
    
          
          if (events.bodyA.name !== 'sensor') {
            if (events.bodyA.gameObject instanceof Robot) {
              if (!events.bodyA.gameObject.invincible) {
                events.bodyA.gameObject.damage(10)
              }
            }
            this.destroy()
          }
        })
      }
    })
  }
}