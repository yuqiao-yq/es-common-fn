## 安装

```
npm install es-common-fn
```

## 导入

```js
const esCommonFn = require('es-common-fn')
```

## 格式化金钱
```javascript
// 格式化金钱，每千分位加逗号
const res = esCommonFn.moneyThousands("1234567")
// res='1,234,567'
```