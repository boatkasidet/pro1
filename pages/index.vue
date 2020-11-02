<template>
  <div>
    <div>Random Number = {{ randomNumber }}</div>
    <v-btn @click="myFunction">Click Me</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomNumber: '',
    }
  },
  methods: {
    myFunction() {
      this.randomNumber = Math.floor(Math.random() * Math.floor(10000))
    },
  },
}
</script>

<style></style>
