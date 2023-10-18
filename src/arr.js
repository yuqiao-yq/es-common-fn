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

// 根据数组某个属性去重
const uniqueBy = (arr, prop) => {
  const res = new Map()
  return arr.filter(
    (item) => !res.has(item[prop]) && res.set(item[prop], 1)
  )
}

module.exports = {
  DeduplicateArr2,
  uniqueBy,
}
