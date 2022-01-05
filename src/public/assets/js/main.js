import Popo from "./robots/Popo.js";
import T800 from "./robots/T800.js";

export default class battle extends Phaser.Scene {
  constructor() {
    super('battle')
  }

  create() {
    this.add.text(10, 10, 'battlefield', {
      fill: '#000'
    });
    
    // world setting
    this.matter.world.getAllBodies().forEach((wall) => {
      wall.onCollideCallback = (event) => {
        let target = event.bodyA.gameObject
        if (event.bodyA.id === wall.id) target = event.bodyB.gameObject
        
        if (target.name === 'bullet') target.destroy()
      }
    })

    // add your robot here
    const popo = new Popo(this, 400, 300)
    const t800 = new T800(this, 200, 300)
  }
}