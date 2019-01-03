<template>
    <div class="components-a">
      这是组件A
      <component-b></component-b>
    </div>
</template>

<script>
import ComponentB from '@/components/ComponentB'
export default {
  components: {ComponentB},
  name: 'CompontntA',
  component: {
    ComponentB
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
