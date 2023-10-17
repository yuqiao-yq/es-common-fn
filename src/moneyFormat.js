// 格式化金钱，每千分位加逗号
const moneyThousands = (str) => {
    return str.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
}

module.exports = {
  moneyThousands,
}