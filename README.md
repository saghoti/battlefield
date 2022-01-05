# battlefield

程式人之間的機器人大戰

Installation
---
1. `yarn install`

2. `yarn dev`

3. open browser connect to `localhost:737`

Create your robot
---
1. 在robots 的資料夾下建立一個 `機器人.js`
2. 繼承 Robot

> 或是複製 `T800.js` 改為 `機器人.js`

機器人基本說明
---
1. 當機器人生命值歸 0 時死亡，在那之前將其他人擊倒的獲勝
2. 擁有 100 發子彈
3. 永遠朝面前發射

API
---
1. config
- `name` 機器人顯示的名稱
- `bulletSpeed` 子彈速度，最低：9
- `faceDirection` 啟始的面向

2. method
- `this.fire()` 發射子彈
- `this.setSensorRadius()` 設定感應半徑
- `this.getSensorRadius()` 取得感應半徑
- `this.setName()` 設定名稱
- `this.setFaceDirection()` 設定面向
- `this.getFaceDirection()` 取得面向
