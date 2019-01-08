<template>
    <div>
      <input type="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)">
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
      checked:Boolean
    }
}
</script>

<style scoped>

</style>
