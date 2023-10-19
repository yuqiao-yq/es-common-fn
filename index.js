import money from "./src/moneyFormat.js"
import browser from "./src/browser.js"
import strFormat from "./src/strFormat.js"
import obj from "./src/obj.js"
import arr from "./src/arr.js"
import commonFn from "./src/commonFn.js"
import regExp from "./src/regExp.js"

export default {
  ...money,
  ...browser,
  ...strFormat,
  ...obj,
  ...arr,
  ...commonFn,
  ...regExp,
}
