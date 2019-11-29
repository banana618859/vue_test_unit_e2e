/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-11-28 18:25:18
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2019-11-28 18:48:33
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
