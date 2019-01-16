<template>
  <div>
    <p>这是vuex学习页面</p>
    <p>来自store的状态 count:{{count}} countPlusLocalState:{{countPlusLocalState}},countAlias:{{countAlias}}</p>
    <p>组件自身的computed selfComputedData:{{selfComputedData}}</p>
    <p>vuex 提供的getter filterData:{{filterData}};;getter作为参数给另一个getter使用 getterParmLength：{{getterParmLength}} </p>
    <p>给getter传参数getGetterByID：{{getGetterByID}}</p>
    <h3>提交mutation基础</h3>
    <button @click="setStoreCount">提交mutation</button>
    <h3>提交载荷（Payload）（额外参数）</h3>
    <button @click="setStoreCountParm">提交</button>
    <h3>action</h3>
    <p>通过dispatch触发</p>
    <button @click="startAction">触发action</button>
    <button @click="anotherAction">触发action使用map</button>
    <button @click="actionA">异步actionA</button>
    <button @click="actionB">异步actionB</button>
    <h3>模块</h3>
    <p>模块A中的状态modalCount：{{modalCount}} module中的getter:{{moduleGetter}}</p>

  </div>

</template>

<script>
import { mapState, mapActions, mapMutations,mapGetters } from "vuex";
export default {
    name: "vuex-component",
    data:function () {
      return {
        localCount:1
      }
    },
  computed:{
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,

      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),
    // ...mapState(["moduleA"]),
    // modalCount(){
    //   return  this.$store.state.moduleCount
    // },
    ...mapState('moduleA',{
      modalCount:function (state) {
        console.log(state)
        return state.moduleCount
      }
    }),
    // moduleGetter(){
    //
    //   return this.$store.getters.doubleCount
    // },
    ...mapGetters({
       // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
      getterParmLength: 'getterParm'
     }),
    ...mapGetters('moduleA',{
        moduleGetter:'doubleCount'
    }),
    selfComputedData(){
        return this.localCount+2
    },
    filterData(){
        return this.$store.getters.filterData
    },
    // getterParmLength(){
    //     return this.$store.getters.getterParm
    // },
    getGetterByID(){
        return this.$store.getters.getTodoById(1)
    }
  },
  methods:{
    setStoreCountParm(){
      //对象风格提交
      this.$store.commit({
        type:'increment',
        count:100
      })
      //标准提交模式
      // this.$store.commit('increment',{count:100})
    },
    ...mapMutations({
      setStoreCount:'incrementCount'
    }),
    startAction(){
      this.$store.dispatch('increment',{count:30})
    },
    ...mapActions({
      anotherAction:'increment',
      actionB:'actionB'
    }),
    actionA(){
      this.$store.dispatch('actionA').then(()=>{
        alert('执行完毕')
      })
    },


  }
}
</script>

<style scoped>

</style>
