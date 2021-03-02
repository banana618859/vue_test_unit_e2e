/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-12-02 10:52:15
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2019-12-02 15:15:31
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export var store = new Vuex.Store({
        state: {
            user: 'tom',
            a: 0
        },
        actions:{
            actionClick(context){
                context.commit('increment')
            }
        },
        mutations:{
            increment(state,data){
                state.a = data
            },
            changeOne(state,data){
                state.user = data;
            }
        }
    })