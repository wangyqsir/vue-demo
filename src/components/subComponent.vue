<template>
  <div style="color: red;">
    <div>作为子组件data:{{newTitle}}</div>
    <div>作为子组件computed:{{title}}</div>
  </div>

</template>

<script>
export default {
    name: "sub-component",
    props:{
      data:Object
    },
    data:function () {
      return {
        newTitle : this.data.title.title
      }
    },
  computed:{
      title(){
        return this.data.title.title.toUpperCase()
      }
  }
}
</script>

<style scoped>

</style>
