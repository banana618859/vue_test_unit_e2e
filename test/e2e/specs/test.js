/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-11-28 18:25:18
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2019-12-05 14:53:34
 */
// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL
    console.log('-------------devServer:',devServer)

    // browser
      // .url(devServer)
      // .waitForElementVisible('#app', 5000)
      // .assert.elementPresent('.hello') //是否存在元素
      // .assert.containsText('h1', 'Welcome to Your Vue.js App') // 是否包含指定内容
      // .assert.elementCount('img', 1) // 元素的个数
      // .end()
      browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      // 查看有否搜索框，并且赋值
      .assert.elementPresent('input')
      .setValue('input', 'jest')
      // 查看有否搜索按钮，并且点击
      // .assert.elementPresent('.hello button')
      .pause(1000)
      .assert.elementPresent('button')
      .click('button')
      .pause(1000)
      // 查看搜索后的第一项
      .assert.elementPresent('.el-table')
      .click('.el-table .el-table__row:nth-child(1)')
      .pause(2000)
      // 2秒后打开弹窗
      .click('.showDialog')
      .pause(3000)
      // 3秒后关闭弹窗
      .click('.el-dialog__close')
      .pause(2000)
      // 2秒后点击改变文本
      .click('.changeText')
      .pause(1000)
      // 1秒后查看文本是否改变
      .assert.containsText('h2', 'text2')
      .pause(1000)
      // 3秒后点击删除
      .click('.el-table .el-table__row:nth-child(1) .el-button--danger')
      .pause(1000)
      // 1秒后取消删除
      .click('.el-message-box__btns .el-button--default')
      .pause(3000)
      // 3秒后点击删除
      .click('.el-table .el-table__row:nth-child(1) .el-button--danger')
      .pause(1000)
      // 1秒后确认删除
      .click('.el-message-box__btns .el-button--primary')
      .pause(3000)
      .click('.closePage')
      .pause(2000)
      .end()
  }
}
