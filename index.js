const money = require("./src/moneyFormat")
const browser = require("./src/browser")
const strFormat = require("./src/strFormat")
const obj = require("./src/obj")
const arr = require("./src/arr")
const commonFn = require("./src/commonFn")
const regExp = require("./src/regExp")

module.exports = {
  ...money,
  ...browser,
  ...strFormat,
  ...obj,
  ...arr,
  ...commonFn,
  ...regExp,
}
