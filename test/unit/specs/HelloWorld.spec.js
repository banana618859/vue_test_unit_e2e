/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-11-28 18:25:18
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2019-11-29 11:55:41
 */

// import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { mount } from '@vue/test-utils'

describe('测试用helloworld组件',() => {
    it('测试初始化的data',() => {
        expect( HelloWorld.data().msg ).toBe('vue test')
    })
    //created和mounted里数据测试都是一样的
    it('测试新建完毕后，create生命周期后的数据',() => {//created
        let vm = new Vue(HelloWorld).$mount()
        expect(vm.msg).toBe('aftermounted')
    })
    it('测试新建完毕后，create生命周期后的数据',() => {//mounted
        let vm = new Vue(HelloWorld).$mount()
        expect(vm.msg1).toBe('开课吧')
    })
    //点击事件测试
    it('测试点击后，msg的改变',() => {
        // $mount处理不了用户交互，所以我们要用到vue官方推荐的@vue/test-utils
        let wrapper = mount(HelloWorld)
        expect( wrapper.vm.msg ).toBe('aftermounted')
        //点击一下
        wrapper.find('.btn').trigger('click')
        expect( wrapper.vm.msg ).toBe('click over1')
    })
})

// describe('HelloWorld.vue', () => {
//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(HelloWorld)
//     const vm = new Constructor().$mount()
//     expect(vm.$el.querySelector('.hello h1').textContent)
//       .toEqual('Welcome to Your Vue.js App')
//   })
// })
