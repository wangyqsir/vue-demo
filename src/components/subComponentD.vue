<template>
    <div>
      <button @click="changeLabel">改变label</button>
      <button @click="changeHref">改变href</button>
    </div>
</template>

<script>
    export default {
        name: "sub-component-d",
        methods:{
          changeLabel(){
              this.$emit('update:activeName','新')
          },
          changeHref(){
            this.$emit('update:href','新href')

          }
        }
    }
</script>

<style scoped>

</style>
