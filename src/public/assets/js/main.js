import Popo from "./robots/Popo.js";
import GF2014NA from "./robots/GF2014NA.js";
import GuaiBi from "./robots/GuaiBi.js";

export default class battle extends Phaser.Scene {
  constructor() {
    super('battle')
  }

  create() {
    // world setting
    this.winners = this.registry.get('winners')
    this.players = new Map()

    this.matter.world.getAllBodies().forEach((wall) => {
      wall.onCollideCallback = (event) => {
        let target = event.bodyA.gameObject
        if (event.bodyA.id === wall.id) target = event.bodyB.gameObject
        
        if (target?.name === 'bullet') target.destroyReady = true
      }
    })


    // add your robot here ==============================================
    new Popo(this)
    new GuaiBi(this)
    new GF2014NA(this)
    // add your robot here ==============================================


    // ui
    this.add.text(10, 10, 'battlefield v3.1', {
      fill: '#ff00f7'
    });

    let winnerCount = 0
    for(const [key, value] of this.winners) {
      this.add.text(10, 40 + (winnerCount * 30), `${key}: ${value}`, {
        fill: '#ff00f7'
      })
      winnerCount++
    }

    let timeCount = 40
    const timeText = this.add.text(790, 10, `TimeLeft:${timeCount}`, {
      fill: '#ff00f7'
    }).setOrigin(1, 0)
    const gameTimer = this.time.addEvent({
      delay: 1000,
      callback: () => {
        timeCount--
        timeText.text = `TimeLeft:${timeCount}`

        // time's up
        if (gameTimer.repeatCount <= 0) {
          for(const [key, value] of this.players) {
            if (!value.isDead()) {
              this.addWinner(key)
            }
          }
          this.gameRestart()
        }

        // early game
        if (gameTimer.repeatCount % 10 === 0) {
          let leftPlayer = null
          for(const [key, value] of this.players) {
            if (!value.isDead()) {
              if (leftPlayer !== null) return
              leftPlayer = key
            }
          }
          this.addWinner(leftPlayer)
          this.gameRestart()
        }
      },
      repeat: timeCount-1
    })
    
  }

  addWinner = (key) => {
    if (this.winners.has(key)) {
      this.winners.set(key, this.winners.get(key)+1)
    } else {
      this.winners.set(key, 1)
    }
  }

  gameRestart = () => {
    this.registry.set('winners', this.winners)
    this.scene.restart()
  }
}