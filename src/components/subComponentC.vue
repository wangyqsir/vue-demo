<template>
    <label>
      {{ label }}
      <input v-bind="$attrs" v-bind:value="value" v-on="inputListeners" />
    </label>
</template>

<script>
export default {
    name: "sub-component-c",
    props: ['label', 'value'],
    inheritAttrs: false,
    computed: {
      inputListeners: function () {
        var vm = this
        console.log(this.$listeners)
        // `Object.assign` 将所有的对象合并为一个新对象
        return Object.assign({},
          // 我们从父级添加所有的监听器
          this.$listeners,
          // 然后我们添加自定义监听器，
          // 或覆写一些监听器的行为
          {
            // 这里确保组件配合 `v-model` 的工作
            input: function (event) {
              vm.$emit('input', event.target.value)
            },
            focus:function (event) {
              vm.$emit('focus',event.target.value)
            }
          }
        )
      }
    }
}
</script>

<style scoped>

</style>
