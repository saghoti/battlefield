import Robot from "./Robot.js"

export default class GuaiBi extends Robot {
    constructor(scene) {
        super(scene, 300, 500, {
            name: 'GuaiBi',
            bulletSpeed: 10,
            faceDirection: 'up'
        })
        this.rdnNum = 0;
        this.phase = 0;
    }

    // run 2 times per second
    // X:800 Y:600
    update = () => {
        switch (this.phase) {
            case 0:
                this.x = 0;
                this.y = Phaser.Math.Between(0,550);
                this.setFaceDirection('right');
                break;
            case 1:
                this.x = 750;
                this.y = Phaser.Math.Between(0,550);
                this.setFaceDirection('left');
                break;
            case 2:
                this.x = Phaser.Math.Between(0,750);
                this.y = 0;
                this.setFaceDirection('down');
                break;
            case 3:
                this.x = Phaser.Math.Between(0,750);
                this.y = 550;
                this.setFaceDirection('up');
                break;


        }
        this.fire();
        // this.phase = Math.floor(Math.random() * 400) % 4;
        this.phase++;
        if(this.phase == 4){
            this.phase = 0;
        }

    }
}