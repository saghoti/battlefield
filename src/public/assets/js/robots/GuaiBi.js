import Robot from "./Robot.js"

export default class GuaiBi extends Robot {
    constructor(scene) {
        super(scene, 300, 500, {
            name: 'GuaiBi',
            bulletSpeed: 10,
            faceDirection: 'up'
        })
        this.phase = 0;
        this.attackType = 0;//0:side attack,1:four side  random attack
        this.attackTimes = 0;
        this.countSideAttack = 0;
    }

    // run 2 times per second
    // X:800 Y:600
    update = () => {

        if (this.attackType == 0) {
            switch (this.phase) {
                case 0:
                    this.x = 50;
                    this.y = 50;
                    this.setFaceDirection('down');
                    break;
                case 1:
                    this.x = 750;
                    this.y = 50;
                    this.setFaceDirection('left');
                    break;
                case 2:
                    this.x = 750;
                    this.y = 550;
                    this.setFaceDirection('up');
                    break;
                case 3:
                    this.x = 50;
                    this.y = 550;
                    this.setFaceDirection('right');
                    break;

            }
            this.attackTimes++;
            if (this.attackTimes == 3) {
                this.phase++;
                this.attackTimes = 0;
                if (this.phase == 4) {
                    this.phase = 0;
                    this.countSideAttack++;
                }
            }

            if(this.countSideAttack == 3){
                this.attackType = 1;
            }
        } else if (this.attackType == 1) {
            switch (this.phase) {
                case 0:
                    this.x = 0;
                    this.y = Phaser.Math.Between(0, 550);
                    this.setFaceDirection('right');
                    break;
                case 1:
                    this.x = 750;
                    this.y = Phaser.Math.Between(0, 550);
                    this.setFaceDirection('left');
                    break;
                case 2:
                    this.x = Phaser.Math.Between(0, 750);
                    this.y = 0;
                    this.setFaceDirection('down');
                    break;
                case 3:
                    this.x = Phaser.Math.Between(0, 750);
                    this.y = 550;
                    this.setFaceDirection('up');
                    break;
            }
            this.phase++;
            if (this.phase == 4) {
                this.phase = 0;
            }
        }
        this.fire();


    }
}