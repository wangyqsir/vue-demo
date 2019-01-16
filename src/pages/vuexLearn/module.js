export default {
  namespaced:true,
  state: { moduleCount: 2 },
  mutations: {
    increment (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.moduleCount++
    }
  },
  getters: {
    doubleCount (state) {
      return state.moduleCount * 2
    }
  }
}
