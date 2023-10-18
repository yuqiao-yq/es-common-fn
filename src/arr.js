// 二维数组去重
const DeduplicateArr2 = (arr) => {
  let hash = {}
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      res.push(arr[i])
      hash[arr[i]] = true
    }
  }
  return res
}

module.exports = {
  DeduplicateArr2,
}
