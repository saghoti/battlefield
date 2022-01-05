import battle from "./main.js";

class boot extends Phaser.Scene {
  constructor() {
    super('boot')
  }

  preload ()
  {
    this.load.spritesheet('robot', 
      'assets/images/robot.png',
      { frameWidth: 64, frameHeight: 64 }
    );

    this.load.image('bomb', 'assets/images/bomb.png')
  }

  create() {
    this.anims.create({
      key: 'robot-idle-down',
      frames: [ { key: 'robot', frame: 0} ]
    })
    this.anims.create({
      key: 'robot-idle-left',
      frames: [ { key: 'robot', frame: 4} ]
    })
    this.anims.create({
      key: 'robot-idle-right',
      frames: [ { key: 'robot', frame: 8} ]
    })
    this.anims.create({
      key: 'robot-idle-up',
      frames: [ { key: 'robot', frame: 12} ]
    })

    this.anims.create({
      key: 'robot-move-down',
      frames: this.anims.generateFrameNumbers('robot', { frames: [ 0, 1, 2, 3 ] }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: 'robot-move-left',
      frames: this.anims.generateFrameNumbers('robot', { frames: [ 4, 5, 6, 7 ] }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: 'robot-move-right',
      frames: this.anims.generateFrameNumbers('robot', { frames: [ 8, 9, 10, 11 ] }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: 'robot-move-up',
      frames: this.anims.generateFrameNumbers('robot', { frames: [ 12, 13, 14, 15 ] }),
      frameRate: 8,
      repeat: -1
    })

    this.scene.start('battle')
  }
}

const DEFAULT_WIDTH = 800
const DEFAULT_HEIGHT = 600

const config = {
  type: Phaser.WEBGL,
  transparent: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  autoFocus: true,
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
  audio: {
    disableWebAudio: true
  },
  disableContextMenu: true,
  physics: {
    default: 'matter',
    matter: {
      debug: true,
      setBounds: {
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
      },
      gravity: {
        x: 0,
        y: 0
      }
    }
  },
  parent: 'phaser-game',
  dom: {
    createContainer: true
  },
  scene: [
    boot,
    battle
  ],
}

var game = new Phaser.Game(config);