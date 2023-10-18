// 判断对象是否为空
const isEmptyObj = (obj) => {
  for (var key in obj) {
    return false
  }
  return true
}

module.exports = {
  isEmptyObj,
}