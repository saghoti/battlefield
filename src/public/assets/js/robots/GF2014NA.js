import Robot from "./Robot.js"

export default class GF2014NA extends Robot {
    constructor(scene, x, y) {
        super(scene, 35, 35, {
            name: 'GF2-014NA',
            bulletSpeed: 120,
            faceDirection: 'right'
        })
    }

// run 2 times per second
    bulletSensor = (target) => {

        if (target.body != null) {
            var bodyX = target.body.velocity.x
            var bodyY = target.body.velocity.y

            if (bodyX > 0) {
                this.setFaceDirection("left")
                var moveY =  Phaser.Math.Between(-50,50)
                if (this.y > 565)
                    this.y = target.y + Phaser.Math.Between(-50, -1)
                    // this.y = this.y - moveY * 2
                else
                    this.y = target.y + Phaser.Math.Between(1, 50)
            } else {
                this.setFaceDirection("right")
                if (this.y > 565)
                    this.y = target.y + Phaser.Math.Between(-50, -1)
                else
                    this.y = target.y + Phaser.Math.Between(1, 50)
            }

            if(bodyY>0){
                this.setFaceDirection("down")
                if (this.x > 765)
                    this.x = target.x + Phaser.Math.Between(-50, -1)
                else
                    this.x = target.x + Phaser.Math.Between(1, 50)
            }else {
                this.setFaceDirection("up")
                if (this.x > 765)
                    this.x = target.x + Phaser.Math.Between(-50, -1)
                else
                    this.x = target.x + Phaser.Math.Between(1, 50)
            }

        }

    }
    update = () => {

        if (this.hasTarget()) {
            const target = this.getFirstTarget()
            console.log(target)
            this.y = target.y + 100
            this.x = target.x - 100

            this.fire()
        }
        this.setFaceDirection("right");
        this.fire()
        // this.x =Phaser.Math.Between(50, 800)
        // this.y = Phaser.Math.Between(50, 550)
        // var face = Phaser.Math.Between(0, 4)
        // switch (face) {
        //     case 1:
        //         this.setFaceDirection("left");
        //         break;
        //
        //     case 2:
        //         this.setFaceDirection("right");
        //         break;
        //     case 3:
        //         this.setFaceDirection("down");
        //         break;
        //     case 4:
        //         this.setFaceDirection("up");
        //         break;
        // }


    }
}