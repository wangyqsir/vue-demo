<template>
  <div>
    <a href="" class="btn">{{title.title}}</a>
    <button @click="$emit('enlarge-text','我是子组件说的话')">向父组件通信</button>
  <br>
  </div>
</template>

<script>
export default {
  // components: {BaseButton},
  name: 'base-button',
  props:['title','id'],
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>
