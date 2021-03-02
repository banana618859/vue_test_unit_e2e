/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-11-28 18:25:18
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2019-12-05 17:11:45
 */

import HelloWorld from '@/components/HelloWorld.vue'
import { shallowMount,mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ElementUI from 'element-ui';

const localVue = createLocalVue()
localVue.use(Vuex);
localVue.use(ElementUI);

// VXETable组件
import 'xe-utils'
import VXETable from 'vxe-table'
// import 'vxe-table/lib/index.css'
localVue.use(VXETable)

// 国际化
import zhlang from '@/assets/lang/zh.json';
import enlang from '@/assets/lang/en.json';
import VueI18n from 'vue-i18n'
localVue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': {...zhlang},
    'en': {...enlang}
  }
})

const fakeStore = new Vuex.Store({
    state: {
        one: 'one'
    },
    actions: {
        actionClick: jest.fn()
    },
    mutations:{
        changeOne(state,data){
            console.log('-vuex-changeOne:',data)
            state.one = data;
        }
    }
})

// const wrapper = shallowMount(HelloWorld, { store: fakeStore, localVue })
const wrapper = mount(HelloWorld, 
    { 
        store: fakeStore, 
        localVue,
        i18n,
        propsData: {
            father: 'father'
        }
     });
console.log('--localVue:',Object.keys(wrapper));


describe('测试用helloworld组件',() => {
    it('测试初始化的data',() => {
        expect( HelloWorld.data().msg ).toBe('vue test')
    })
    // Vuex测试
    it('当按钮被点击时候调用actionClick的 action', () => {
        console.log('--button-num:',wrapper.findAll('button').length)
        wrapper.find('button').trigger('click');
        setTimeout(()=>{
            expect(fakeStore.state.one).toBe('jerry');
        })
    })
    it('测试新建完毕后，create生命周期后的数据',() => {
        //mounted
        expect(wrapper.vm.msg1).toBe('开课吧')
    })
    //点击事件测试
    it('测试点击后，msg1的改变',() => {
        // $mount处理不了用户交互，所以我们要用到vue官方推荐的@vue/test-utils
        // let wrapper = mount(HelloWorld)
        expect( wrapper.vm.msg ).toBe('aftermounted')
        wrapper.find('.btn').trigger('click')
        expect( wrapper.vm.msg ).toBe('click over1')
    })
    it('测试点击后，msg2的改变',() => {
        //点击一下
        wrapper.vm.newData = 1;
        wrapper.find('.btn').trigger('click')
        expect( wrapper.vm.msg ).toBe('test_if')
    })
    it('测试点击后，text的改变',() => {
        //点击一下
        // let wrapper = mount(HelloWorld)
        // console.log('--wrapper.find-el-button:',wrapper.findAll('.el-button'))
       wrapper.findAll('.changeText').trigger('click')
        setTimeout(()=>{
            expect( wrapper.vm.text ).toBe('text2')
        })
    })
    it('测试点击后，table--已删除',() => {
        //点击一下
        // let wrapper = mount(HelloWorld)
        
        wrapper.find('.removeBtn').trigger('click');
        
        // table 删除1条数据后，剩余3条
        console.log('---run 11')
        setTimeout(() => {
            console.log('--wrapper5555:',wrapper.find('.removeLine'))
            wrapper.find('.removeLine').trigger('click');
            expect(wrapper.vm.tableData.length).toBe(3)
            console.log('---run 1')
        })
    });
    // it('测试点击后，table--未删除',() => {
    //     //点击一下
    //     console.log('---run 22')
    //     setTimeout(() => {
    //         console.log('---run 2')
    //         wrapper.find('.removeBtn').trigger('click');
    //         setTimeout(()=>{
    //             wrapper.find('.cancelRemoveLine').trigger('click');
    //             expect(wrapper.vm.tableData.length).toBe(3)
    //         })
    //     },1000)
    // });
    it('获取子组件参数',() => {
        expect(wrapper.vm.getSonProp()).toBe('son')
    });
    it('获取子组件table数据',() => {
        let rel = wrapper.vm.getSonTableData();
        expect(rel.length).toBe(1)
    });
    it('改变语言',() => {
        // 先获取当前语言
        let firstLang = wrapper.vm.currentLang;
        wrapper.vm.changeLaguages();
        setTimeout(()=>{
            let lastLang = wrapper.vm.currentLang;
            expect(lastLang).not.toEqual(firstLang)
        })
    });
    it('调用提示函数',() => {
        let rel =  wrapper.find('.closePage').trigger('click');
        expect(wrapper.vm.hasClose).toEqual(true)
     });
})


// describe('HelloWorld.vue', () => {
//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(HelloWorld)
//     const vm = new Constructor().$mount()
//     expect(vm.$el.querySelector('.hello h1').textContent)
//       .toEqual('Welcome to Your Vue.js App')
//   })
// })
