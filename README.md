## 安装

```
npm install es-common-fn
```

## 导入

```js
const esCommonFn = require('es-common-fn')
```
## 格式相关

### 首字母大写
```javascript
const res = esCommonFn.capitalize('str')
```

### 单个单词首字母大写
```javascript
const res = esCommonFn.capitalizeEveryWord('hello world!'); // 'Hello World!'
```

### 删除字符串中的 HTMl 标签
```javascript
const res = esCommonFn.stripHTMLTags('<p><em>Hello</em> <strong>World</strong></p>'); // 'Hello World!'
```

### 驼峰转下划线
```javascript
const res = esCommonFn.hump2Line('strExample')
```

### 格式化金钱
```javascript
// 格式化金钱，每千分位加逗号
const res = esCommonFn.moneyThousands("1234567")
// res='1,234,567'
```

## 数组相关

### 二维数组去重
```javascript
const res = esCommonFn.DeduplicateArr2([[1,2],[1,2]]) // [1,2]
```
### 根据数组某个属性去重
```javascript
const res = esCommonFn.uniqueBy(arr, propName)
```

## 对象相关

### 判断对象是否为空
```javascript
const res = esCommonFn.isEmptyObj(obj) // true / false
```
### 深拷贝
```javascript
const res = esCommonFn.deepCopy(obj)
```

## 浏览器相关

### 检查是否为浏览器环境
```js
esCommonFn.isBrowser(); // true (browser) / false (Node)
```

### 判断手机类型
```javascript
esCommonFn.getMobileType() // "Android" / "iOS"
```

### 获取任一元素的任意属性
```javascript
esCommonFn.getStyle(elem, prop)
```

### 判断元素有没有子元素
```javascript
esCommonFn.hasChildrenEle(elem)
```

### 带参数跳转到对应页面并打开新窗口
```javascript
esCommonFn.openNewWindow(routerName, query)
```