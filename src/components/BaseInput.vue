<template>
    <div>
      <input :value="value" @input="$emit('input', $event.target.value)" type="text">
    </div>
</template>

<script>
export default {
    name: "base-input",
    props:{
      value:String
    }
}
</script>

<style scoped>

</style>
