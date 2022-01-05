import Robot from "./Robot.js"

export default class GF2014NA extends Robot {
    constructor(scene, x, y) {
        super(scene, 300, 100, {
            name: 'GF2-014NA',
            bulletSpeed: 100,
            faceDirection: 'down'
        })
        this.setSensorRadius(100)
    }

// run 2 times per second
    update = () => {
        if (this.hasTarget()) {
            const target = this.getFirstTarget()
            console.log(target.x, target.y)
            this.y = target.y + 100
            this.x = target.x - 100
            this.setFaceDirection("left");
            this.fire()
        }

        this.fire()
        // this.x =Phaser.Math.Between(50, 800)
        // this.y = Phaser.Math.Between(50, 550)
        var face = Phaser.Math.Between(0, 4)
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