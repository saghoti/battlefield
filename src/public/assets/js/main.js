import Popo from "./robots/Popo.js";
import T800 from "./robots/T800.js";
import GF2014NA from "./robots/GF2-014NA.js";
import GuaiBi from "./robots/GuaiBi.js";

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
    new Popo(this)
    new GuaiBi(this,300,500)
    new GF2014NA(this,300,100)
  }
}