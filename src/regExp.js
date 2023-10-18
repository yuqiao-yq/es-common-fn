// 正则表达式

/*是否带有小数*/
const isDecimal = (strValue) => {
  let objRegExp = /^\d+\.\d+$/
  return objRegExp.test(strValue)
}

/*校验是否中文名称组成 */
const isChineseText = (str) => {
  let reg = /[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/ /*定义验证表达式*/
  return reg.test(str) /*进行验证*/
}

/*校验电话码格式 */
const isPhoneNum = (str) => {
  let reg = /^((0\d{2,3}-\d{7,8})|(1[34589]\d{9}))$/
  return reg.test(str)
}

/*校验邮件地址是否合法 */
const IsEmail = (str) => {
  let reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/
  return reg.test(str)
}

module.exports = {
  isDecimal,
  isChineseText,
  isPhoneNum,
  IsEmail,
}
