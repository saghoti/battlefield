import Robot from "./Robot.js"

export default class GuaiBi extends Robot {
    constructor(scene, x, y) {
        super(scene, x, y, {
            name: 'GuaiBi',
            bulletSpeed: 10,
            faceDirection: 'up'
        })
    }

    // run 2 times per second
    update = () => {
        this.fire();
        this.x = Math.floor(Math.random() * 400);
        super.life = 50;
        super.bulletCount = 100;
    }
}