
import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from '../pages/vuexLearn/module'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    moduleA
  },
  state: {
    count: 0,
    todos:[
      {
        done:true,
        id:1
      },
      {
        done:false,
        id:2
      }
    ]
  },
  getters:{
    filterData:state => {
      return state.todos.filter(todo => todo.done)
    },
    getterParm:(state, getters) => {
      return getters.filterData.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment (state,payload) {
      console.log(payload)
      payload ?(state.count+=payload.count) :(state.count++)
    },
    incrementCount(state,payload){
      console.log(payload)
      payload ?(state.count+=payload.count) :(state.count+=10)
    },
    someMutation(state){
      state.count++
    }
  },
  actions: {
    //原始写发
    // increment (context) {
    //   context.commit('incrementCount')
    // }
    //解构写法
    increment ({ commit },payload) {
      setTimeout(() => {
        commit('incrementCount',payload)
      }, 1000)
    },
    actionA ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('someMutation')
          resolve()
        }, 1000)
      })
    },
    actionB ({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        commit('someMutation')
      })
    },
    // async actionC ({ commit }) {
    //   commit('gotData', await getData())
    // },
    // async actionD ({ dispatch, commit }) {
    //   await dispatch('actionC') // 等待 actionA 完成
    //   commit('gotOtherData', await getOtherData())
    // }
  }
})
