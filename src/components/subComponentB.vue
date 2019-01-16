<template>
    <div>
      <input type="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)">

      <p>来自路由的参数，通过prop传递：{{id}}</p>
    </div>
</template>

<script>
export default {
    name: "sub-component-b",
    model:{
      prop: 'checked',
      event: 'change'
    },
    props:{
      checked:Boolean,
      id:String
    }
}
</script>

<style scoped>

</style>
