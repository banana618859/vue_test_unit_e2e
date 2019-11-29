/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-11-28 18:25:18
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2019-11-29 13:53:06
 */
import Vue from 'vue'
// 将Vue暴露到全局里面
global.Vue = Vue;
console.log('--global:',global.hasOwnProperty('Vue'),'--window:',window.hasOwnProperty('Vue'))
Vue.config.productionTip = false

// 使用elementui组件
import ElementUI from 'element-ui';
// npm run unit时要把这句注释掉-不知为什么导入会报错。也因为测试时，不需要css样式
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);