<template>
    <div>
      <h3>这是路由学习页面</h3>
      <button @click="pageTo">点击切换动态路由参数</button>
      <p>动态路由参数:{{username}}</p>
      <button @click="loadSubRouter">加载子路由</button>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "router-page",
    data:function () {
      return {
        username:this.$route.params
      }
    },
    watch: {
      '$route'(to, from) {
        // 对路由变化作出响应...
        console.log(to,from)
        console.log(this.$route.params)
        this.username=this.$route.params
      }
    },
    methods:{
      pageTo(){
        this.$router.push({name:'RouterPage',params:{id:'lala'}})
      },
      loadSubRouter(){
        this.$router.push('/router/lala/subrouter')
      }
    }
}
</script>

<style scoped>

</style>
