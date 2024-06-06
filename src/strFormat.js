// 驼峰转下划线
const hump2Line = (str) => {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase()
}
// 下划线转驼峰
const line2Hump = (str) => {
  return str.replace(/_(\w)/g, (_, l) => {
    return l.toUpperCase()
  })
}

// 首字母大写
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("")

// 单个单词首字母大写
const capitalizeEveryWord = (str) =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase())

// 删除字符串中的 HTMl 标签
const stripHTMLTags = (str) => str.replace(/<[^>]*>/g, "")

// 文件大小的单位转换
/**
 * 将文件大小从一个单位转换为另一个单位。
 *
 * @param {number} size 文件大小。
 * @param {string} fromUnit 初始单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
 * @param {string} toUnit 目标单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
 * @param {number} [decimalPoint=2] 结果保留的小数位数，默认为2。
 * @return {string} 转换后的文件大小，带单位。
 */

const convertFileSize = (size, fromUnit, toUnit, decimalPoint = 2) => {
  // 定义单位与字节之间的转换关系
  const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  // 获取初始单位和目标单位的索引
  const fromIndex = units.indexOf(fromUnit)
  const toIndex = units.indexOf(toUnit)

  // 如果单位不在列表中，抛出错误
  if (fromIndex === -1 || toIndex === -1) {
    throw new Error("Invalid units")
  }

  // 计算初始单位与目标单位之间的转换系数
  const exponent = toIndex - fromIndex
  // 计算结果大小
  const resultSize = size / Math.pow(1024, exponent)

  // 返回格式化后的结果
  return parseFloat(resultSize.toFixed(decimalPoint)) + " " + toUnit
}


// RGB 转 Hex
function rgb2Hex(r, g, b) {
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  )
}

// Hex 转 RGB
function hex2Rgb(hex) {
  const bigint = parseInt(hex.slice(1), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return [r, g, b]
}

export default {
  hump2Line,
  line2Hump,
  capitalize,
  capitalizeEveryWord,
  stripHTMLTags,
  convertFileSize,
  rgb2Hex,
  hex2Rgb,
}
