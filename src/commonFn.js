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
  return function (e) {
    let nowTime = new Date().getTime()
    if (nowTime - lastTime > delay) {
      fn.apply(this, arguments)
      lastTime = nowTime
    }
  }
}

module.exports = {
  debounce,
  throttle,
}