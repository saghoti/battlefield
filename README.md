# battlefield v3.0

程式人之間的機器人大戰

Robots war between developers

Installation
---
1. `yarn install` or `npm install`

2. `yarn dev` or `npm start`

3. open the browser and connect to `localhost:737`

Create your robot
---
1. 在robots 的資料夾下建立一個 `機器人.js`
2. 繼承 Robot

```
或是複製 `T800.js` 改為 `機器人.js`
```

3. 在`main.js` 中找到 add your robot here
4. 加入 `new 機器人(this)`

Rules
---
1. Kill other robot in 40 seconds. 在40秒內擊敗其他機器人
2. 100 ammos. 100發子彈
3. Always fire with facing direction. 總是朝著面對的方向發射子彈

API
---

```
super(scene: Phaser.Scene, x: int, y: int, config: object)
```
1. config
- `name` 機器人顯示的名稱
- `bulletSpeed` 子彈速度，最低：9
- `faceDirection` 啟始的面向
- `sensorRadius` 感應半徑，預設：60

2. method
- `this.fire()` 發射子彈
- `this.setName(name: string)` 設定名稱
- `this.setFaceDirection(direction: string)` 設定面向 (up, down, left, right)
- `this.getFaceDirection()` 取得面向

Path info
---
v3.0 - 子彈感應 bulletSensor(bullet: Bullet)
