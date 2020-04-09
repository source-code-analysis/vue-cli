/**
 *  从git命令行获取name、email
 */
const exec = require('child_process').execSync

module.exports = () => {
  let name
  let email

  // 从git 命令行获取name,email buffer
  try {
    name = exec('git config --get user.name')
    email = exec('git config --get user.email')
  } catch (e) {}

  // name.toString() buffer转字符串
  name = name && JSON.stringify(name.toString().trim()).slice(1, -1)
  email = email && (' <' + email.toString().trim() + '>')
  return (name || '') + (email || '')
}
