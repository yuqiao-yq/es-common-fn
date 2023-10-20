// 驼峰转下划线
const hump2Line = (str) => {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase()
}
// 下划线转驼峰
const Line2Hump = (str) => {
  return str.replace(/_(\w)/g, (_, l) => {
    return l.toUpperCase()
  })
}

// 首字母大写
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("")

// 单个单词首字母大写
const capitalizeEveryWord = (str) => str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

// 删除字符串中的 HTMl 标签
const stripHTMLTags = (str) => str.replace(/<[^>]*>/g, '');

export default {
  hump2Line,
  Line2Hump,
  capitalize,
  capitalizeEveryWord,
  stripHTMLTags,
}