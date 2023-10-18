const esCommonFn = require("./index.js")
console.log("esCommonFn", esCommonFn)

// const res = esCommonFn.moneyThousands("1234567")
// const res = esCommonFn.isBrowser()
const res = esCommonFn.DeduplicateArr2([
  [1, 2],
  [3, 4],
  [1, 2],
  [5, 6],
])

console.log(res)
