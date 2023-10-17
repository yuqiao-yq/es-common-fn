// 浏览器相关

// 检查是否为浏览器环境
const isBrowser = () => ![typeof window, typeof document].includes("undefined")
// isBrowser(); // true (browser)
// isBrowser(); // false (Node)

// 判断手机类型
const getMobileType = () => {
  let u = navigator.userAgent
  let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1 // g
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isAndroid) {
    return "Android"
  }
  if (isIOS) {
    return "IOS"
  }
}

// 获取任一元素的任意属性
const getStyle = (elem, prop) => {
  return window.getComputedStyle
    ? window.getComputedStyle(elem, null)[prop]
    : elem.currentStyle[prop]
}

// 判断元素有没有子元素
const hasChildrenEle = (e) => {
  let children = e.childNodes,
    len = children.length
  for (let i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      return true
    }
  }
  return false
}

module.exports = {
  isBrowser,
  getMobileType,
  getStyle,
  hasChildrenEle,
}
