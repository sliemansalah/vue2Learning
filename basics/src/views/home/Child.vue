<template>
  <div>
      Child component {{ title }}
      <input type="text" v-model="name">
      <button @click="$emit('changeName', name)">changeName</button>
  </div>
</template>

<script>
export default {
    props: ["title"],
    data() {
        return {
            name: ''
        }
    },
}
</script>

<style>

</style>