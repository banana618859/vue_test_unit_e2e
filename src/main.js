/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-11-28 18:25:18
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2019-12-04 12:54:33
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import {store} from './store/index'

// 国际化
import zhlang from '@/assets/lang/zh.json';
import enlang from '@/assets/lang/en.json';
import VueI18n from 'vue-i18n'
Vue.use(VueI18n) // 通过插件的形式挂载，通过全局方法 Vue.use() 使用插件
const i18n = new VueI18n({
  locale: 'zh', // 语言标识 //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh': {...zhlang},
    'en': {...enlang}
  }
  // messages: {
  //   'zh': require('./VueI18n/language-zh'),  //
  //   'en': require('./VueI18n/language-en')
  // }
})

// VXETable组件
console.log('--########运行单元测试时，会跑到这里？####################----------------###')
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)


// elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
