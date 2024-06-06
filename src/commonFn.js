// 防抖
function debounce(fn, delay) {
  let timer = null // 创建一个标记用来存放定时器的返回值
  return function () {
    let that = this,
      args = arguments
    clearTimeout(timer) // 每当用户输入的时候把前一个 setTimeout clear 掉
    // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
    timer = setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}

// 节流
function throttle(fn, delay) {
  let lastTime = 0
  return function () {
    let nowTime = new Date().getTime()
    if (nowTime - lastTime > delay) {
      fn.apply(this, arguments)
      lastTime = nowTime
    }
  }
}

// 复制文本到剪贴板
function copyToClipboard(text) {
  const textArea = document.createElement("textarea")
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand("copy")
  document.body.removeChild(textArea)
}

// 生成随机字符串 (英文字母大小写+数字)
function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result = ""
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

// 生成随机颜色(16进制)
function getRandomColor() {
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

// UUID 生成 -版本号 4
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}



export default {
  debounce,
  throttle,
  copyToClipboard,
  generateRandomString,
  getRandomColor,
  generateUUID,
}