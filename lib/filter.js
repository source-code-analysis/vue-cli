/**
 * 根据 meta 信息中的 filters 对文件进行过滤
 */
// 文件名匹配工具，https://www.npmjs.com/package/minimatch
const match = require('minimatch')
const evaluate = require('./eval')

module.exports = (files, filters, data, done) => {
  // 若无 filters，返回
  if (!filters) {
    return done()
  }
  // 获取所有的文件名/路径
  const fileNames = Object.keys(files)
  // 遍历 filters
  Object.keys(filters).forEach(glob => {
    fileNames.forEach(file => {
      if (match(file, glob, { dot: true })) {
        // 获取到匹配的值
        const condition = filters[glob]
        if (!evaluate(condition, data)) {
          delete files[file] // 删除文件
        }
      }
    })
  })
  done()
}
