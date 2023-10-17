// 驼峰转下划线
const hump2Line = (str) => {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase()
}

// 首字母大写
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("")

module.exports = {
  hump2Line,
  capitalize,
}