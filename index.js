const money = require("./src/moneyFormat")
const browser = require("./src/browser")
const strFormat = require("./src/strFormat")

module.exports = {
  ...money,
  ...browser,
  ...strFormat,
}
