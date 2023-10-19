// 判断对象是否为空
const isEmptyObj = (obj) => {
  for (var key in obj) {
    return false
  }
  return true
}

// 深拷贝
const deepCopy = (newObj, oldObj) => {
  newObj = newObj || {}
  for (let i in oldObj) {
    if (Object.prototype.hasOwnProperty.call(oldObj, i)) {
      // 判断是复杂数据类型还是简单数据类型
      if (typeof oldObj[i] === "object") {
        // 判断是数组还是对象
        newObj[i] = Array.isArray(oldObj[i]) ? [] : {}
        // 递归调用
        deepCopy(newObj[i], oldObj[i])
      } else {
        // 属于简单数据类型 直接赋值
        newObj[i] = oldObj[i]
      }
    }
  }
  return newObj
}

export default {
  isEmptyObj,
  deepCopy,
}