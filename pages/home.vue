<template>
  <div>
    <nuxt-link to="order"><v-btn>Order</v-btn></nuxt-link>
    <nuxt-link to="stock"><v-btn>Stock</v-btn></nuxt-link>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace('/login')
      }
    })
  },
}
</script>

<style></style>
