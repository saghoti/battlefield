import Robot from "./Robot.js"

export default class GF2014NA extends Robot {
    constructor(scene, x, y) {
        super(scene, x, y, {
            name: 'GF2-014NA',
            bulletSpeed: 10,
            faceDirection: 'down'
        })
        this.setSensorRadius(100)
    }
// run 2 times per second
    update = () => {
        this.fire()
        this.x = Math.floor(Math.random() * 400);
        this.y = Phaser.Math.Between(50, 550)
        var  face = Phaser.Math.Between(0,4)
        switch (face) {
            case 1:
                this.setFaceDirection("left");
                break;

            case 2:
                this.setFaceDirection("right");
                break;
            case 3:
                this.setFaceDirection("down");
                break;
            case 4:
                this.setFaceDirection("up");
                break;
        }


    }
}