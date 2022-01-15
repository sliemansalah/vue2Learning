<template>
  <div class="home">
    <input type="text" v-model="name" />
    <input ref="number1" type="number" v-model.number="num1" />
    <input type="number" v-model.number="num2" />
    <p>name is: {{ name }}</p>
    <p>age is: {{ age }}</p>
    <a :href="link" target="_blank">Google</a>
    <p v-text="name"></p>
    <p v-html="ourHtml"></p>
    <button @click="save">Calc sum</button>
    <p v-if="show">test 1</p>
    <p v-show="show">test2></p>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: "slieman",
      show:false,
      age: 28,
      link: "http://www.google.com",
      ourHtml: `<h2 style="color:red;">My h2</h2>`,
      num1: 10,
      num2: 20,
      items: ['test1', 'test2', 'test3']
    };
  },
  computed: {
    summation() {
      return this.num1 + this.num2;
    },
  },
  methods: {
    save() {
      console.log(this.summation);
    },
  },
  created() {
  },
  mounted() {
    console.log(this.$refs.number1)
  },
};
</script>
