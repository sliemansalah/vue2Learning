<template>
  <div class="home">
    <p>Home page</p>
    <my-child @changeName="changeName" :title="title" />
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  name: "Home",
  components: {
    'myChild': Child
  },
  data() {
    return {
      title: 'my name'
    }
  },
  methods: {
    changeName(val) {
      console.log(val)
    }
  }
};
</script>
